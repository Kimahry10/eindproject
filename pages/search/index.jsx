import React, { useEffect, useState } from 'react'
import { H1, H2, ImageGridStyling, SearchStyling } from './styles';
import BaseLayout from '../../components/BaseLayout'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import Image from 'next/image';
import Link from 'next/link';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputText } from 'primereact/inputtext';


// need to add input and filter results for users and images

const Search = () => {

  const [allImages, setAllImages] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [allTags, setAllTags] = useState()
  const [searchValue, setSearchValue] = useState('')


  useEffect(() => {
    const imageRef = collection(firestore, 'images')
    const usersRef = collection(firestore, 'users')

    getDocs(imageRef).then((snapshot) => {
      let images = [];
      snapshot.docs.forEach(doc => {
        images.push({ ...doc.data(), id: doc.id })
      })
      setAllImages(images)
    })
    getDocs(usersRef).then((snapshot) => {
      let users = [];
      snapshot.docs.forEach(doc => {
        users.push({ ...doc.data(), id: doc.id })
      })
      setAllUsers(users)
    })
  }, [])

  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault()
  // });

  const tags = allImages.map(tag => {
    return tag
  })
  const filteredTags = tags.map(tag => {
    return tag.tags
  })

  const test = filteredTags.map(tag => {
    tag.forEach(t => {
      console.log(t.name)
      return t.name
    })
  })

  console.log(test)

  return (
    <BaseLayout>
      <SearchStyling>
        <H1>Search</H1>
        <span className="p-float-label">
          <InputText id="in" type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <label htmlFor="in">Search</label>
        </span>
        <H2>Profiles</H2>
        <div className='all-users'>
          {
            allUsers && allUsers.filter((val) => {
              if (searchValue === '') {
                return val
              } else if (val.displayName.toLowerCase().includes(searchValue.toLowerCase())) {
                return val
              }
            }).map((user, index) => {
              return <Link key={index} href={`/user?uid=${user.uid}`}>
                <a>
                  {/* image */}
                  <Image src={user.photoURL} alt='avatar' height={50} width={50} />
                  <p>{user.displayName}</p>
                </a>
              </Link>
            })
          }
        </div>
        <H2>Images</H2>
        <ImageGridStyling>
          {
            allImages.filter((val) => {
              if (searchValue === '') {
                return val
              } else {
                val.tags.map(tag => {
                  // console.log(tag.name)
                  if (tag.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    console.log(val)
                    return <Image src={val.image} alt='image' layout='fill' objectFit='cover' priority />
                    // return val.image
                  }
                })
              }
            }).map((image, index) => {
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