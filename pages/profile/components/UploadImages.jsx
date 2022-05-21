import React from 'react'
import { FileUpload } from 'primereact/fileupload';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const UploadImages = () => {

  const myUploader = (event) => {
    //event.files == files to upload
    console.log(event.files)
  }

  return (
    <>
      <FileUpload customUpload uploadHandler={myUploader} name="demo[]" url="./upload" multiple maxFileSize="10000000" accept="image/*" />
    </>
  )
}

export default UploadImages