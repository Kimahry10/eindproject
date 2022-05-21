import React from 'react'
import { StandardComponentStyling } from '../styling'
import Banner from './Banner'
import UserInfoAndNavigation from './UserInfoAndNavigation'
import { useAppContext } from '../../../providers/UserComponents'
import UserComponents from './UserComponents'


const StandardComponent = () => {
  return (
    <StandardComponentStyling>
      <Banner />
      <UserInfoAndNavigation />
      <UserComponents />
    </StandardComponentStyling>
  )
}

export default StandardComponent