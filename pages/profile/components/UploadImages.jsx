import React, { useState } from 'react'
import { FileUpload } from 'primereact/fileupload';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Knob } from 'primereact/knob';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';

import { storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { firestore } from '../../../firebase';
import { UserAuth } from '../../../providers/AuthenticatedUser';
import { Tags } from '../../../providers/Tags';
import { collection, addDoc } from 'firebase/firestore';
import { color } from '../../../styles';

import { UploadImagesStyling } from '../styling'
import { MultipleValuesInput } from './MultipleValuesInput'


const UploadImages = () => {

  const { user } = UserAuth();
  const { selectedTags, setSelectedTags } = Tags();

  const [knobValue, setKnobValue] = useState(0)
  const [description, setDescription] = useState('')


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
      setKnobValue(prog)
    },
      (err) => console.log(err),
      () => {
        getDownloadURL(upload.snapshot.ref).then(url => {
          addDoc(collection(firestore, 'images'), {
            userId: uid,
            image: url,
            description: description,
            tags: selectedTags
          })
        }).then(() => {
          setDescription('');
          setSelectedTags('')
        })
      }
    )
  }



  return (
    <UploadImagesStyling>
      <Knob value={knobValue} min={0} max={100} onChange={(e) => setKnobValue(knobValue)} valueColor={color.green} rangeColor={color.black} />
      <MultipleValuesInput />
      <InputTextarea placeholder='description' rows={5} cols={30} value={description} onChange={(e) => setDescription(e.target.value)} autoResize />
      <FileUpload customUpload uploadHandler={handleSubmit} name="demo[]" url="./upload" multiple maxFileSize="10000000" accept="image/*" />
    </UploadImagesStyling>
  )
}

export default UploadImages