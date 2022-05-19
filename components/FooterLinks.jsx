import React from 'react'
import Link from 'next/link'
import FooterHeadingTitle from './FooterHeadingTitle'
import { FooterLinksUl } from './styling'

const FooterLinks = () => {
  return (
    <FooterLinksUl>
      <FooterHeadingTitle>Links</FooterHeadingTitle>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a>My account</a>
        </Link>
      </li>
      <li>
        <Link href="/termsofuse">
          <a>Terms of Use</a>
        </Link>
      </li>
    </FooterLinksUl>
  )
}

export default FooterLinks