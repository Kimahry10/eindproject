import React from 'react'
import { UserAuth } from '../../../providers/AuthenticatedUser';


const UserDetails = () => {
  const { user } = UserAuth();
  console.log(user)

  return (
    <div>
      <p>{user.email}</p>
      <p>{user.displayName ? user.displayName : 'no username'}</p>
    </div>
  )
}

export default UserDetails