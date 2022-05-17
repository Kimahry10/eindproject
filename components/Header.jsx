import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="47" viewBox="0 0 28 47">
        <text id="p" transform="translate(0 37)" fill="#101820" fontSize="38" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700"><tspan x="0" y="0">P</tspan></text>
      </svg>
      <Navigation />
    </header>
  )
}

export default Header