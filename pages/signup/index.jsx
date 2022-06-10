import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { UserAuth } from '../../providers/AuthenticatedUser';
import { Form, SignInStyling } from '../signin/styles';
import Link from 'next/link';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputTextarea } from 'primereact/inputtextarea';


const SignUp = (e) => {
  const router = useRouter()

  const { createUser } = UserAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [bio, setBio] = useState('')
  const [website, setWebsite] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, username, bio, website)
      // add user to users table
      router.push('/profile')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    // <div>
    //   <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
    //     {/* <input type="file" name="photoUrl" id="photoUrl" onChange={(e) => setPhotoUrl(e.target.files[0].name)} /> */}
    //     username:
    //     <input required type="text" onChange={(e) => setUsername(e.target.value)} />
    //     email:
    //     <input required type="email" onChange={(e) => setEmail(e.target.value)} />
    //     bio:
    //     <textarea cols="30" rows="10" onChange={(e) => setBio(e.target.value)}></textarea>
    //     website:
    //     <input type="text" onChange={(e) => setWebsite(e.target.value)} />
    //     password:
    //     <input required type="password" onChange={(e) => setPassword(e.target.value)} />
    //     <button type="submit">submit</button>
    //     <p>{error}</p>
    //   </form>
    // </div>

    <SignInStyling>
      <Form onSubmit={handleSubmit}>
        <div className='back-to-homepage'>
          <i className="pi pi-arrow-left" style={{ 'fontSize': '1em' }}></i>
          <Link href={'/'}>
            <a>
              Back to homepage
            </a>
          </Link>
        </div>
        <span className="p-float-label">
          <InputText id="in" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="in">Email</label>
        </span>
        <span className="p-float-label">
          <InputText id="in" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="in">Username</label>
        </span>
        <span className="p-float-label">
          <InputTextarea autoResize id="in" value={bio} onChange={(e) => setBio(e.target.value)} />
          <label htmlFor="in">Bio</label>
        </span>
        <span className="p-float-label">
          <InputText id="in" value={website} onChange={(e) => setWebsite(e.target.value)} />
          <label htmlFor="in">Website</label>
        </span>
        <span className="p-float-label">
          <InputText id="in" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="in">Password</label>
        </span>
        <Button label="Sign up" />
      </Form>
    </SignInStyling>
  )
}

export default SignUp