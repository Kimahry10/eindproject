import React, { useEffect, useState, useContext } from 'react'
import { StandardComponentStyling } from '../styling'
import Banner from './Banner'
import UserInfoAndNavigation from './UserInfoAndNavigation'
import { useAppContext } from '../../../providers/UserComponents'
import UserComponents from './UserComponents'


const StandardComponent = () => {
  const { userComponent, setUserComponent } = useAppContext();

  console.log(userComponent)

  return (
    <StandardComponentStyling>
      <Banner />
      <UserInfoAndNavigation />
      <UserComponents />
    </StandardComponentStyling>
  )
}

export default StandardComponent