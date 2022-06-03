import React, { useState } from 'react'
import { FileUpload } from 'primereact/fileupload';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { firestore } from '../../../firebase';
import { UserAuth } from '../../../providers/AuthenticatedUser';
import { collection, addDoc } from 'firebase/firestore';


const UploadImages = () => {

  const { user } = UserAuth();

  const [progress, setProgress] = useState(0)
  const [imageURL, setImageURL] = useState(null)
  const [tag, setTag] = useState('')

  const handleSubmit = async (event) => {
    const file = event.files[0]
    const storageRef = ref(storage, `${file.name}`)
    const upload = uploadBytesResumable(storageRef, file)

    const uid = user.uid
    if (!uid) {
      return
    }

    upload.on('state_changed', (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(prog)
    },
      (err) => console.log(err),
      () => {
        getDownloadURL(upload.snapshot.ref).then(url => {
          addDoc(collection(firestore, 'users'), {
            id: uid,
            image: url,
          })
        })

      }
    )


  }



  return (
    <>
      <h3>uploaded {progress} %</h3>
      <FileUpload customUpload uploadHandler={handleSubmit} name="demo[]" url="./upload" multiple maxFileSize="10000000" accept="image/*" />
    </>
  )
}

export default UploadImages