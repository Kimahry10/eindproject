import React, { useContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from 'formik';
import { Auth } from '../../firebase';
import { AuthenticatedUserContext } from '../../providers/AuthenticatedUser';


const SignUp = (e) => {

  const auth = getAuth();

  const [currentUser, setCurrentUser] = useContext(AuthenticatedUserContext)

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirrm, setPasswordConfirrm] = useState('')


  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setCurrentUser(userCredential.user)
        // ...
      })
    e.preventDefault();
    console.log("test")
  }

  console.log(currentUser)


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setFirstname(e.target.value)} placeholder='firstname' />
        <input type="text" onChange={(e) => setLastname(e.target.value)} placeholder='lastname' />
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <input type="password" onChange={(e) => setPasswordConfirrm(e.target.value)} placeholder='password' />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default SignUp