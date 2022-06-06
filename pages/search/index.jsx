import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { H1, H2, ImageGridStyling, SearchStyling } from './styles';
import BaseLayout from '../../components/BaseLayout'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import Image from 'next/image';


// need to add input and filter results for users and images

const Search = () => {

  const [allImages, setAllImages] = useState([])


  useEffect(() => {
    const colRef = collection(firestore, 'images')
    getDocs(colRef).then((snapshot) => {
      let images = [];
      snapshot.docs.forEach(doc => {
        images.push({ ...doc.data(), id: doc.id })
      })
      setAllImages(images)
    })
  }, [])
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
  });

  return (
    <BaseLayout>
      <SearchStyling>
        <H1>Search</H1>
        <H2>Profiles</H2>
        <H2>images</H2>
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