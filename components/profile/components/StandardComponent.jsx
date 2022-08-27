import React from 'react'
import Banner from './Banner'
import UserInfoAndNavigation from './UserInfoAndNavigation'
import UserComponents from './UserComponents'
import { StandardComponentStyling } from '../../../styles/profile/styling'


const StandardComponent = () => {
  return (
    <StandardComponentStyling>
      <Banner />
      <div className='container px-4 mx-auto'>
        <UserInfoAndNavigation />
        <UserComponents />
      </div>
    </StandardComponentStyling>
  )
}

export default StandardComponent