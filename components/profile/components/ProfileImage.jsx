import Image from 'next/image';
import React from 'react';
import { UserAuth } from '../../../providers/AuthenticatedUser';
import { ProfileImageStyling } from '../../../styles/profile/styling';


const ProfileImage = () => {

  const { user } = UserAuth();

  return (
    <ProfileImageStyling>
      {user.photoURL && <Image src={user.photoURL} alt='profile picture' layout='fill' />}
    </ProfileImageStyling>
  )
}

export default ProfileImage