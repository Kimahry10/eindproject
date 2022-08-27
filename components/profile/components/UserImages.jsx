import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../../providers/AuthenticatedUser';
import { collection, getDocs, query, where, } from "firebase/firestore";
import Image from 'next/image';

import { firestore } from '../../../firebase';
import { ImageGridStyling } from '../../../styles/profile/styling';
// import Image from 'next/image';

const UserImages = () => {

  const { user } = UserAuth();
  const [allImages, setAllImages] = useState([])


  useEffect(() => {
    const q = query(collection(firestore, "images"), where("userId", "==", user.uid));

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
        allImages && allImages.map((image, index) => {
          if (user.uid === image.userId) {
            return <div>
              <Image src={image.image} key={index} alt='image' layout='fill' objectFit='fill' priority />
            </div>
          }
        })

      }
    </ImageGridStyling>
  )
}

export default UserImages