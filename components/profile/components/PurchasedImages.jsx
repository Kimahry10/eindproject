import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../../../firebase';
import { UserAuth } from '../../../providers/AuthenticatedUser';
import Image from 'next/image';

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
    <div className='container mx-auto'>
      <div className='grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
        {
          allImages.map((image, index) => {
            if (image.uid === user.uid) {
              return <div key={index}>
                <Image src={image.image} alt='image' width="100%" height="100%" layout="responsive" objectFit="cover" priority />
              </div>
            }
          })
        }
      </div>
    </div>
  )
}

export default PurchasedImages