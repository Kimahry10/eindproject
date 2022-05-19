import React from 'react'
import { FooterHeadingTitleStyle } from './styling'

const FooterHeadingTitle = ({ children }) => {
  return (
    <FooterHeadingTitleStyle>
      {children}
    </FooterHeadingTitleStyle>
  )
}

export default FooterHeadingTitle