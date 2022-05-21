import React from 'react'
import { useAppContext } from '../../../providers/UserComponents'
import { StyledUserComponents } from '../styling';
import UploadImages from './UploadImages';
import UserDetails from './UserDetails';
import UserImages from './UserImages';

const UserComponents = () => {
  const { userComponent, setUserComponent } = useAppContext();
  return (
    <StyledUserComponents>
      {userComponent === 'myDetails' && <UserDetails />}
      {userComponent === 'profile' && <UserImages />}
      {userComponent === 'uploadImages' && <UploadImages />}
    </StyledUserComponents>
  )
}

export default UserComponents