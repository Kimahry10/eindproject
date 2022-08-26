import React, { useState } from 'react'
import Navigation from './Navigation'
import Link from 'next/link'
import { Hamburger, HeaderStyle } from './styling'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const hamburgerToggle = () => setIsOpen(!isOpen);

  return (
    <HeaderStyle className='container mx-auto'>
      <Link href='/'>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="47" viewBox="0 0 28 47">
            <text id="p" transform="translate(0 37)" fill="#101820" fontSize="38" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700"><tspan x="0" y="0">P</tspan></text>
          </svg>
        </a>
      </Link>

      <Hamburger onClick={hamburgerToggle}>
        <div className={isOpen ? 'menu-btn open' : 'menu-btn'}>
          <div className="menu-btn__burger"></div>
        </div>
      </Hamburger>

      <nav className={isOpen ? 'showMenu' : ''}>
        <ul>
          <li>
            <Hamburger onClick={hamburgerToggle}>
              <div className={isOpen ? 'menu-btn open' : 'menu-btn'}>
                <div className="menu-btn__burger"></div>
              </div>
            </Hamburger>
          </li>
          <Navigation />
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header