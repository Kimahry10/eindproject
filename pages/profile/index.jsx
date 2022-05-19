import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import BaseLayout from '../../components/BaseLayout'

const Profile = ({ signOut, user }) => {
  const jwtToken = user.signInUserSession.accessToken.jwtToken;
  console.log(user)
  return (
    <BaseLayout>
      <p>this is the profile page</p>
      <h1>hello {user.username}</h1>
      <button onClick={signOut}>sign out</button>
    </BaseLayout>
  )
}

export default withAuthenticator(Profile)