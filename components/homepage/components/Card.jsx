import Image from 'next/image'
import React from 'react'
import { StyledCard } from '../../../styles/homepage/styles';
import LinkButtonNoBorder from '../../buttons/LinkButtonNoBorder';


const Card = ({ icon, title, text, buttonText, buttonLink }) => {
  return (
    <StyledCard className='card'>
      <Image className='card__img' src={icon} alt="icon" height={65} width={65} />
      <h4>{title}</h4>
      <p>{text}</p>
      <LinkButtonNoBorder linkName={buttonText} linkUrl={buttonLink} />
    </StyledCard>
  )
}

export default Card