/* eslint-disable import/no-anonymous-default-export */
import { buffer } from 'micro'
import * as admin from "firebase-admin";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

// secure a connection to firebase from the backend
const serviceAccount = require('../../permissions.json')
const app = !admin.apps.length
  ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
  : admin.app();

// establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_SIGNIN_SECRET
const fulfillOrder = async (session) => {
  addDoc(collection(firestore, 'userPaidImages'), {
    uid: session.metadata.uid,
    image: session.metadata.images,
  })
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    // verify that the event posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
      console.log(error.message)
      return res.status(400).send(`webhook error: ${error.message}`)
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch(err => {
          res.status(400).send(`webhook err: ${err.message}`)
        })
    }

  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
}