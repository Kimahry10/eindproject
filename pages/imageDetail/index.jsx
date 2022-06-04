import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import BaseLayout from '../../components/BaseLayout'
import { ImageDetailsText, ImageDetailStyling, ImageSize } from './styles';
import LinkButtonNoBorder from '../../components/buttons/LinkButtonNoBorder';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';

const ImageDetail = () => {

  const router = useRouter()
  const { image } = router.query

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

  let description = '';

  allImages.map(imageDetail => {
    const imageSplit = imageDetail.image.split('&token')[0]
    if (imageSplit == image) {
      description = imageDetail.description
    }
  })

  return (
    <BaseLayout>
      <ImageDetailStyling>
        <ImageSize>
          <Image src={image} alt='image' layout='fill' objectFit='contain' />
        </ImageSize>
        <ImageDetailsText>
          <h1>title of the photo.jpg</h1>
          <h3>€13,00</h3>
          <h2>Description</h2>
          <p>{description}</p>
          <ul>
            <li>tags</li>
            <li>tags</li>
            <li>tags</li>
            <li>tags</li>
          </ul>
          <LinkButtonNoBorder linkUrl={'/'} linkName='Buy' />
        </ImageDetailsText>
      </ImageDetailStyling>
    </BaseLayout>
  )
}

export default ImageDetail