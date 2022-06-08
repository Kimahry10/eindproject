import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../../../firebase';
import { UserAuth } from '../../../providers/AuthenticatedUser';
import Image from 'next/image';

const PurchasedImages = () => {

  const { user } = UserAuth();

  const [allImages, setAllImages] = useState([])


  useEffect(() => {
    const colRef = collection(firestore, 'userPaidImages')
    getDocs(colRef).then((snapshot) => {
      let images = [];
      snapshot.docs.forEach(doc => {
        images.push({ ...doc.data(), id: doc.id })
      })
      setAllImages(images)
    })
  }, [])

  return (
    <div>
      {
        allImages.map(image => {
          if (image.uid === user.uid) {
            return <Image src={image.image} alt={image} width={300} height={300} priority />
          }
        })
      }
    </div>
  )
}

export default PurchasedImages