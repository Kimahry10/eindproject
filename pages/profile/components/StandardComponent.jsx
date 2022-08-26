import React from 'react'
import { StandardComponentStyling } from '../styling'
import Banner from './Banner'
import UserInfoAndNavigation from './UserInfoAndNavigation'
import UserComponents from './UserComponents'


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