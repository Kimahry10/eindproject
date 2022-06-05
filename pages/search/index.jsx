import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { H1, H2, ImageGridStyling, SearchStyling } from './styles';
import BaseLayout from '../../components/BaseLayout'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import Image from 'next/image';




const Search = () => {

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
    <BaseLayout>
      <SearchStyling>
        <H1>Search</H1>
        <H2>Profiles</H2>

        <h2>images</h2>
        <ImageGridStyling>
          {
            allImages.map((image, index) => {
              return <Link key={index} href={`preview?image=${image.image}`}>
                <a>
                  <Image src={image.image} alt='image' layout='fill' objectFit='cover' priority />
                </a>
              </Link>
            })
          }
        </ImageGridStyling>
      </SearchStyling>
    </BaseLayout >
  )
}

export default Search