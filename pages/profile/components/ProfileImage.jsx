import React, { useEffect } from 'react'
import { ProfileImageStyling } from '../styling'
import { UserAuth } from '../../../providers/AuthenticatedUser';
import Image from 'next/image';


const ProfileImage = () => {


  const { user } = UserAuth();




  return (
    <ProfileImageStyling>
      {user.photoURL && <Image src={user.photoURL} alt='profile picture' layout='fill' />}
    </ProfileImageStyling>
  )
}

export default ProfileImage