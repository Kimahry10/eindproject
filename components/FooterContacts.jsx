import React from 'react'
import FooterContactsItem from './FooterContactsItem'
import pinIcon from '/public/icons/pin.svg';
import phoneIcon from '/public/icons/telephone.svg';
import mailIcon from '/public/icons/mail.svg';
import FooterHeadingTitle from './FooterHeadingTitle';
import { FooterContactsUl } from './styling';

const FooterContacts = () => {
  return (
    <FooterContactsUl>
      <FooterHeadingTitle>Contacts</FooterHeadingTitle>
      <FooterContactsItem icon={pinIcon} text={['Stationstraat 1', '1000 Brussel']} />
      <FooterContactsItem icon={phoneIcon} text={['0470 11 22 33']} />
      <FooterContactsItem icon={mailIcon} text={['johnDoe@test.com']} />
    </FooterContactsUl>
  )
}

export default FooterContacts