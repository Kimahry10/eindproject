import React, { useState } from 'react'
import { StyledButton, UserInfoAndNavigationStyling } from '../styling'
import ProfileImage from './ProfileImage'
import { useAppContext } from '../../../providers/UserComponents'
import { Auth } from 'aws-amplify'
import { UserAuth } from '../../../providers/AuthenticatedUser'

const UserInfoAndNavigation = () => {
  const [active, setActive] = useState('myDetails')
  const { userComponent, setUserComponent } = useAppContext();
  const { user, logout } = UserAuth();
  console.log(user)

  return (
    <UserInfoAndNavigationStyling>
      <div className='button-wrap'>
        <StyledButton onClick={() => setUserComponent('myDetails')}>My Details</StyledButton>
        <StyledButton onClick={() => setUserComponent('profile')}>Profile</StyledButton>
        <StyledButton onClick={() => setUserComponent('uploadImages')}>Upload Images</StyledButton>
      </div>
      <div className='profileImageUserInfoWrap'>
        <ProfileImage />
        <div>
          <h4>{user && user.email}</h4>
          <p>Update your profile picture and personal details.</p>
        </div>
      </div>
    </UserInfoAndNavigationStyling>
  )
}

export default UserInfoAndNavigation