<<<<<<< HEAD
import React from 'react'
// import { withAuthenticator } from '@aws-amplify/ui-react'
=======
import React, { useEffect } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
>>>>>>> 2191af6c6959e745ca8d2067ede69458faca5544
import BaseLayout from '../../components/BaseLayout'
import StandardComponent from './components/StandardComponent';
import Head from 'next/head';
import { Auth } from 'aws-amplify';



const Profile = ({ signOut, user }) => {
<<<<<<< HEAD


  // const jwtToken = user.signInUserSession.accessToken.jwtToken;
  // console.log(jwtToken)

  // fetch("https://bynns3kq11.execute-api.eu-west-3.amazonaws.com/user/usernametwo")
  //   .then(res => res.json())
  //   .then(
  //     (data) => {
  //       console.log(data)
  //     })
=======
  const jwtToken = user.signInUserSession.accessToken.jwtToken;
  console.log(user)
>>>>>>> 2191af6c6959e745ca8d2067ede69458faca5544


  return (
    <BaseLayout>
      <Head>
        <title>{`users's profile`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StandardComponent loggedInUser={user} />

    </BaseLayout>
  )
}

export default Profile