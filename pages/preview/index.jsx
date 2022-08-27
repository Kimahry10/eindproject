import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BaseLayout from '../../components/BaseLayout';
import { firestore } from '../../firebase';
import { UserAuth } from '../../providers/AuthenticatedUser';
import { ImageDetailsText, ImageSize } from '../../styles/imageDetail/styles';
const stripePromise = loadStripe(process.env.stripe_public_key)


loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PreviewPage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;
  const { image } = router.query

  const { user } = UserAuth();


  const [allImages, setAllImages] = useState([])


  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log('Order placed! You will receive an email confirmation.');
      }
      if (canceled) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }
    const colRef = collection(firestore, 'images')
    getDocs(colRef).then((snapshot) => {
      let images = [];
      snapshot.docs.forEach(doc => {
        images.push({ ...doc.data(), id: doc.id })
      })
      setAllImages(images)
    })
  }, [success, canceled]);


  let description = '';
  let tags = [];
  let imageTitle = '';

  allImages.map(imageDetail => {
    const imageSplit = imageDetail.image.split('&token')[0]
    if (imageSplit == image) {
      description = imageDetail.description
      tags = imageDetail.tags
      imageTitle = imageDetail.image
      localStorage.setItem('imageInfo', JSON.stringify({ image: imageTitle, uid: user.uid, description: description }));
    }
  })
  console.log(tags)

  const createCheckoutSession = async () => {
    const imageStorage = JSON.parse(localStorage.getItem('imageInfo')).image
    const stripe = await stripePromise;

    // call backend to create checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      image: imageStorage,
      email: user.email,
      description: description,
      uid: user.uid
    });

    // redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    });
    if (result.error) {
      alert(result.error.message)
    }
  }

  return (
    <BaseLayout>
      <div className='container flex flex-wrap px-4 mx-auto'>
        <ImageSize>
          <Image src={image} alt='image' layout='fill' objectFit='cover' priority />
        </ImageSize>
        <div className='w-full mt-8 laptop:mt-0 laptop:ml-4 laptop:w-1/4'>
          <h2 className='text-2xl font-bold '>Description</h2>
          <p className='mb-4'>{description}</p>
          <h2 className='text-2xl font-bold '>Tags</h2>
          <ul className='mb-4'>
            {
              tags && tags.map((tag, index) => <li key={index}>{tag.name}</li>)
            }
          </ul>
          <button className='w-full px-12 py-4 font-bold text-white duration-200 bg-green-500 rounded shadow-md hover:bg-green-600' type="submit" role="link" onClick={createCheckoutSession}>
            Checkout
          </button>
        </div>
      </div>
    </BaseLayout>
  );
}

export default PreviewPage;