import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../../providers/AuthenticatedUser';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase';
import Image from 'next/image';
import Link from 'next/link';
import { ImageGridStyling } from '../styling';
import { screenSize } from '../../../styles';

const UserImages = () => {

  const { user } = UserAuth();
  console.log(user.uid)

  const [allImages, setAllImages] = useState([])

  const colRef = collection(firestore, 'images')

  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      let images = [];
      snapshot.docs.forEach(doc => {
        images.push({ ...doc.data(), id: doc.id })
      })
      setAllImages(images)
    })
  }, [])

  return (
    <ImageGridStyling>
      {
        allImages.map(image => {
          if (user.uid === image.userId) {
            return <Link href={`imageDetail?image=${image.image}`}>
              <a>
                <Image src={image.image} alt='image' width={300} height={300} />
              </a>
            </Link>
          }
        })
      }
    </ImageGridStyling>
  )
}

export default UserImages