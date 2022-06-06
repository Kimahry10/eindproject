import React, { useContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from 'formik';
import { Auth } from '../../firebase';
import { AuthenticatedUserContext } from '../../providers/AuthenticatedUser';
import { useRouter } from 'next/router'
import { UserAuth } from '../../providers/AuthenticatedUser';

// upload image as avatar at signup
// delete authenticated users, signed up users get default image

const SignUp = (e) => {
  const router = useRouter()

  const { createUser } = UserAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, username)
      // add user to users table
      router.push('/profile')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input required type="text" onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        <input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
        <input required type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <button type="submit">submit</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default SignUp