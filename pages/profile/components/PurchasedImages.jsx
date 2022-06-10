import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../../../firebase';
import { UserAuth } from '../../../providers/AuthenticatedUser';
import Image from 'next/image';
import { ImageGridStyling } from '../styling';

const PurchasedImages = () => {

  const { user } = UserAuth();

  const [allImages, setAllImages] = useState([])

  useEffect(() => {
    const q = query(collection(firestore, "userPaidImages"), where("uid", "==", user.uid));
    getDocs(q).then((querySnapshot) => {
      let images = [];
      querySnapshot.forEach((doc) => {
        images.push({ ...doc.data(), id: doc.id })
        setAllImages(images);
      });
    })
  }, [])

  return (
    <ImageGridStyling>
      {
        allImages.map((image, index) => {
          if (image.uid === user.uid) {
            return <div>
              <Image src={image.image} key={index} alt='image' layout='fill' objectFit='fill' priority />
            </div>
          }
        })
      }
    </ImageGridStyling>
  )
}

export default PurchasedImages