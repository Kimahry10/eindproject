import React from 'react'
import Image from 'next/image'
import { StyledLi } from './styling'


const FooterContactsItem = ({ icon, text }) => {
  return (
    <StyledLi>
      <Image src={icon} height={15} width={15} alt='icon' />
      <div className='spanwrap'>
        {
          text && text.map(t => <span key={t}>{t}</span>)
        }
      </div>
    </StyledLi>
  )
}

export default FooterContactsItem