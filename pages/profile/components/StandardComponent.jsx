import React from 'react'
import { StandardComponentStyling } from '../styling'
import Banner from './Banner'
import UserInfoAndNavigation from './UserInfoAndNavigation'
// import { useAppContext } from '../../../providers/UserComponents'
import UserComponents from './UserComponents'


const StandardComponent = ({ loggedInUser }) => {
  return (
    <StandardComponentStyling>
      <Banner />
      <UserInfoAndNavigation loggedInUser={loggedInUser} />
      <UserComponents />
    </StandardComponentStyling>
  )
}

export default StandardComponent