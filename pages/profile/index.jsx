import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import BaseLayout from '../../components/BaseLayout'
import StandardComponent from './components/StandardComponent';
import Head from 'next/head';

const Profile = ({ signOut, user }) => {
  const jwtToken = user.signInUserSession.accessToken.jwtToken;
  console.log(user)
  return (
    <BaseLayout>
      <Head>
        <title>{`${user.username}'s profile`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StandardComponent />

    </BaseLayout>
  )
}

export default withAuthenticator(Profile)