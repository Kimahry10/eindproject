import React, { useContext, useState } from 'react'
import router from 'next/router';
import Link from 'next/link';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Form, SignInStyling } from '../../styles/signin/styles';
import { UserAuth } from '../../providers/AuthenticatedUser';

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = UserAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(email, password);
      router.push('/profile')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }


  return (
    <SignInStyling>
      <Form onSubmit={handleSignIn}>
        <div className='back-to-homepage'>
          <i className="pi pi-arrow-left" style={{ 'fontSize': '1em' }}></i>
          <Link href={'/'}>
            <a>
              Back to homepage
            </a>
          </Link>
        </div>
        <span className="p-float-label">
          <InputText id="in" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="in">Email</label>
        </span>
        <span className="p-float-label">
          <InputText id="in" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="in">Password</label>
        </span>
        <Button label="Sign in" />
      </Form>
      <div className='formText'>
        <p>{error}</p>
        <p>Don&apos;t have an account? <Link href={'/signup'}><a>sign up</a></Link></p>
      </div>
    </SignInStyling>
  )
}

export default SignIn