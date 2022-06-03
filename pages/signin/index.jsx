import React, { useContext, useState } from 'react'
import router from 'next/router';
import { UserAuth } from '../../providers/AuthenticatedUser';
import Link from 'next/link';

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
    <div>
      <form onSubmit={handleSignIn}>
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">sign in</button>
      </form>
      <p>don&apos;t have an account? <Link href={'/signup'}><a>sign up</a></Link></p>
    </div>
  )
}

export default SignIn