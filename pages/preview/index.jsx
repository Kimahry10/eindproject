import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FormStyling, ImageDetailsText, ImageSize } from './styles';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import BaseLayout from '../../components/BaseLayout';
import { UserAuth } from '../../providers/AuthenticatedUser';



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PreviewPage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;
  const { image } = router.query

  const { user } = UserAuth();


  const [allImages, setAllImages] = useState([])


  useEffect(() => {
    const colRef = collection(firestore, 'images')

    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log('Order placed! You will receive an email confirmation.');
      }
      if (canceled) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }
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
      console.log(imageDetail.tags)
      description = imageDetail.description
      tags = imageDetail.tags
      imageTitle = imageDetail.image
      localStorage.setItem('imageInfo', JSON.stringify({ image: imageTitle, uid: user.uid }));
    }
  })

  // console.log(tags.map(tag => ))

  return (
    <BaseLayout>
      <FormStyling action="/api/checkout_sessions" method="POST">
        <ImageSize>
          <Image src={image} alt='image' layout='fill' objectFit='cover' priority />
        </ImageSize>
        <ImageDetailsText>
          <div>
            <h2>Description</h2>
            <p>{description}</p>
            <h2>Tags</h2>
            <ul>
              {
                tags && tags.map((tag, index) => <li key={index}>{tag.name}</li>)
              }
            </ul>
          </div>
          <button type="submit" role="link">
            Checkout
          </button>
        </ImageDetailsText>
      </FormStyling>
    </BaseLayout>
  );
}

export default PreviewPage;