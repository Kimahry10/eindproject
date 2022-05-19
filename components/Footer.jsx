import React from 'react'
import FooterContacts from './FooterContacts'
import FooterHeadingTitle from './FooterHeadingTitle'
import FooterLinks from './FooterLinks'
import FooterSocials from './FooterSocials'
import { FooterStyling } from './styling'

const Footer = () => {
  return (
    <FooterStyling>
      <div className='footer-width'>
        <div className='headerwrap'>
          <FooterHeadingTitle>Photoland</FooterHeadingTitle>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nulla illo earum reiciendis. Reiciendis, possimus unde! Hic obcaecati recusandae fuga?</p>
        </div>
        <FooterLinks />
        <FooterContacts />
        <FooterSocials />
      </div>
    </FooterStyling>
  )
}

export default Footer