import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../../providers/AuthenticatedUser';
import { collection, getDocs, query, where, } from "firebase/firestore";
import Image from 'next/image';

import { firestore } from '../../../firebase';
// import Image from 'next/image';
import { ImageGridStyling } from '../styling';

const UserImages = () => {

  const { user } = UserAuth();
  const [allImages, setAllImages] = useState([])


  useEffect(() => {
    const q = query(collection(firestore, "images"), where("userId", "==", user.uid));

    getDocs(q).then((querySnapshot) => {
      let images = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        images.push({ ...doc.data(), id: doc.id })
        setAllImages(images);
      });
    })
  }, [])

  return (
    <ImageGridStyling>
      {
        allImages && allImages.map(image => {
          if (user.uid === image.userId) {
            return <div>
              <Image src={image.image} alt='image' layout='fill' objectFit='cover' priority />
            </div>
          }
        })

      }
    </ImageGridStyling>
  )
}

export default UserImages