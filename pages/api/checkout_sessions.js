// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'eur',
              unit_amount: 1300,
              product_data: {
                name: 'A very beautifull image',
                description: 'Hier moet dynamische info komen van de geklikte image maar da lukt ni.',
                images: ['https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg'],
              },
            },
            quantity: 1,
          }],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?payment=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
//   const stripe = require("stripe")(functions.config().stripe.token);
//   let event;

//   try {
//     const whSec = functions.config().stripe.payments_webhook_secret;

//     event = stripe.webhooks.constructEvent(
//       req.rawBody,
//       req.headers["stripe-signature"],
//       whSec,
//     );
//   } catch (err) {
//     console.error("⚠️ Webhook signature verification failed.");
//     return res.sendStatus(400);
//   }

//   const dataObject = event.data.object;

//   await admin.firestore().collection("orders").doc().set({
//     checkoutSessionId: dataObject.id,
//     paymentStatus: dataObject.payment_status,
//     shippingInfo: dataObject.shipping,
//     amountTotal: dataObject.amount_total,
//   });
// })