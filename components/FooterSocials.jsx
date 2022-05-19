import React from 'react'
import FooterHeadingTitle from './FooterHeadingTitle'
import { SocialsUlStyling } from './styling'
import facebookIcon from '/public/icons/facebook.svg';
import instagramIcon from '/public/icons/instagram.svg';
import twitterIcon from '/public/icons/twitter.svg';
import Link from 'next/link'
import Image from 'next/image'



const FooterSocials = () => {
  return (
    <div>
      <FooterHeadingTitle>Follow us</FooterHeadingTitle>
      <SocialsUlStyling>
        <li>
          <Link href='#'>
            <a>
              <Image src={facebookIcon} width={30} height={30} alt='icon' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>
              <Image src={instagramIcon} width={30} height={30} alt='icon' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>
              <Image src={twitterIcon} width={30} height={30} alt='icon' />
            </a>
          </Link>
        </li>

      </SocialsUlStyling>
    </div>
  )
}

export default FooterSocials