import React, { useEffect } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import BaseLayout from '../../components/BaseLayout'
import StandardComponent from './components/StandardComponent';
import Head from 'next/head';
import { Auth } from 'aws-amplify';


const Profile = ({ signOut, user }) => {
  const jwtToken = user.signInUserSession.accessToken.jwtToken;


  return (
    <BaseLayout>
      <Head>
        <title>{`${user.username}'s profile`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StandardComponent loggedInUser={user} />

    </BaseLayout>
  )
}

export default withAuthenticator(Profile)