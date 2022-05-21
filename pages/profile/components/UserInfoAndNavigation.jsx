import React, { useState } from 'react'
import { StyledButton, UserInfoAndNavigationStyling } from '../styling'
import ProfileImage from './ProfileImage'
import UploadImages from './UploadImages'
import UserDetails from './UserDetails'
import UserImages from './UserImages'
import { useAppContext } from '../../../providers/UserComponents'

const UserInfoAndNavigation = () => {
  const [active, setActive] = useState('myDetails')
  const { userComponent, setUserComponent } = useAppContext();


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
          <h4>username</h4>
          <p>Update your photo and personal details.</p>
        </div>
      </div>
    </UserInfoAndNavigationStyling>
  )
}

export default UserInfoAndNavigation