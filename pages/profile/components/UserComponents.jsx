import React from 'react'
import { useAppContext } from '../../../providers/UserComponents'
import { StyledUserComponents } from '../styling';
import UploadImages from './UploadImages';
import UserDetails from './UserDetails';
import UserImages from './UserImages';
import PurchasedImages from './PurchasedImages';

const UserComponents = () => {
  const { userComponent, setUserComponent } = useAppContext();
  return (
    <StyledUserComponents>
      {userComponent === 'myDetails' && <UserDetails />}
      {userComponent === 'myImages' && <UserImages />}
      {userComponent === 'uploadImages' && <UploadImages />}
      {userComponent === 'purchasedImages' && <PurchasedImages />}
    </StyledUserComponents>
  )
}

export default UserComponents