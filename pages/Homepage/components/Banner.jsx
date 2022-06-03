import React from 'react'
import LinkButtonNoBorder from '../../../components/buttons/LinkButtonNoBorder'
import LinkButtonWithBorder from '../../../components/buttons/LinkButtonWithBorder'
import { BannerStyling, H1, P } from '../styles'

const Banner = () => {
  return (
    <BannerStyling className='banner'>
      <H1>Photoland</H1>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste illo. At dolor magni sunt harum? Eligendi temporibus fuga vitae.</P>
      <div className='banner__btn-wrap'>
        <LinkButtonNoBorder linkName='Get started' linkUrl='/signin' />
        {/* <LinkButtonWithBorder linkName='Sign Up' linkUrl='/profile' /> */}
      </div>
    </BannerStyling>
  )
}

export default Banner