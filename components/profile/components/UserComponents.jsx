import React from 'react'
import { useAppContext } from '../../../providers/UserComponents'
import UploadImages from './UploadImages';
import UserDetails from './UserDetails';
import UserImages from './UserImages';
import PurchasedImages from './PurchasedImages';

const UserComponents = () => {
  const { userComponent, setUserComponent } = useAppContext();
  return (
    <div className='mt-8'>
      {userComponent === 'myDetails' && <UserDetails />}
      {userComponent === 'myImages' && <UserImages />}
      {userComponent === 'uploadImages' && <UploadImages />}
      {userComponent === 'purchasedImages' && <PurchasedImages />}
    </div>
  )
}

export default UserComponents