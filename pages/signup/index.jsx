import React, { useContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from 'formik';
import { Auth } from '../../firebase';
import { AuthenticatedUserContext } from '../../providers/AuthenticatedUser';
import { useRouter } from 'next/router'
import { UserAuth } from '../../providers/AuthenticatedUser';


const SignUp = (e) => {
  const router = useRouter()

  const { createUser } = UserAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [passwordConfirrm, setPasswordConfirrm] = useState('')
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
        {/* <input type="text" onChange={(e) => setFirstname(e.target.value)} placeholder='firstname' /> */}
        {/* <input type="text" onChange={(e) => setLastname(e.target.value)} placeholder='lastname' /> */}
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        {/* <input type="password" onChange={(e) => setPasswordConfirrm(e.target.value)} placeholder='password' /> */}
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default SignUp