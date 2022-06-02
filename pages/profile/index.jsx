import React from 'react'
// import { withAuthenticator } from '@aws-amplify/ui-react'
import BaseLayout from '../../components/BaseLayout'
import StandardComponent from './components/StandardComponent';
import Head from 'next/head';


const Profile = ({ signOut, user }) => {


  // const jwtToken = user.signInUserSession.accessToken.jwtToken;
  // console.log(jwtToken)

  // fetch("https://bynns3kq11.execute-api.eu-west-3.amazonaws.com/user/usernametwo")
  //   .then(res => res.json())
  //   .then(
  //     (data) => {
  //       console.log(data)
  //     })


  return (
    <BaseLayout>
      <Head>
        <title>{`users's profile`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StandardComponent />

    </BaseLayout>
  )
}

export default Profile