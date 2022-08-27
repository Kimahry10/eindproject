import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import Head from 'next/head';
import { UserAuth } from '../../providers/AuthenticatedUser';
import router from 'next/router';
import StandardComponent from '../../components/profile/components/StandardComponent'

const Profile = () => {
  const { user } = UserAuth();

  if (!user) {
    router.push('/signin')
  } else {
    return (
      <BaseLayout>
        <Head>
          <title>{user.displayName}&apos;s profile</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <StandardComponent />
      </BaseLayout>
    )
  }
}

export default Profile