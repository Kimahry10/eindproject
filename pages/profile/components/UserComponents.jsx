import React from 'react'
import { useAppContext } from '../../../providers/UserComponents'
import UploadImages from './UploadImages';
import UserDetails from './UserDetails';
import UserImages from './UserImages';

const UserComponents = () => {
  const { userComponent, setUserComponent } = useAppContext();
  return (
    <div>
      {userComponent === 'myDetails' && <UserDetails />}
      {userComponent === 'profile' && <UserImages />}
      {userComponent === 'uploadImages' && <UploadImages />}
    </div>
  )
}

export default UserComponents