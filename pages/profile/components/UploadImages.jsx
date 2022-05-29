import React, { useState } from 'react'
import { FileUpload } from 'primereact/fileupload';
import Image from 'next/image'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const UploadImages = () => {
  const axios = require('axios')
  const API_ENDPOINT = "https://18yb3mgnpj.execute-api.eu-west-3.amazonaws.com/default/getPreSignedImageURL"

  const [img, setImg] = useState()

  const handleSubmit = async (event) => {
    const files = event.files
    if (files.length > 1) {
      alert('only 1 file can be uploaded')
    } else {
      // presigned URL
      const response = await axios({
        method: 'GET',
        headers: {
          "Content-Type": "images/jpeg"
        },
        url: API_ENDPOINT
      })
      // upload file to S3
      const result = await fetch(response.data.uploadURL, {
        method: 'PUT',
        body: files[0]
      })
      console.log(result)
      // image
      setImg(result.url.split('?')[0])

      // if (result.status === 200) {
      //   alert('file uploaded')
      // }
    }
  }
  console.log(img)



  return (
    <>
      <FileUpload customUpload uploadHandler={handleSubmit} name="demo[]" url="./upload" multiple maxFileSize="10000000" accept="image/*" />
      {img && <Image src={img} height={300} width={300} alt='icon' />}
    </>
  )
}

export default UploadImages