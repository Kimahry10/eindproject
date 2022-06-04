import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { H1, H2 } from './styles';
import BaseLayout from '../../components/BaseLayout'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import Image from 'next/image';




const Search = () => {

  const [allImages, setAllImages] = useState([])

  const colRef = collection(firestore, 'users')

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
      <H1>Search</H1>
      <H2>Profiles</H2>

      <h2>images</h2>
      <div className='images'>
        {
          allImages.map(image => {
            return <div key={image.id}>
              {
                image.image && <Image key={image.id} src={image.image} alt='image' height={300} width={300} />
              }
            </div>
          })
        }
      </div>
    </BaseLayout >
  )
}

export default Search