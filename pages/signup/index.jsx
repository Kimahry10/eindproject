import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { UserAuth } from '../../providers/AuthenticatedUser';


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
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="file" name="photoUrl" id="photoUrl" onChange={(e) => setPhotoUrl(e.target.files[0].name)} />
        username:
        <input required type="text" onChange={(e) => setUsername(e.target.value)} />
        email:
        <input required type="email" onChange={(e) => setEmail(e.target.value)} />
        bio:
        <textarea cols="30" rows="10" onChange={(e) => setBio(e.target.value)}></textarea>
        website:
        <input type="text" onChange={(e) => setWebsite(e.target.value)} />
        password:
        <input required type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">submit</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default SignUp