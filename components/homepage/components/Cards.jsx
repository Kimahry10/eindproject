import React from 'react'
import Card from './Card'
import profileIcon from '/public/icons/profile.svg';
import uploadIcon from '/public/icons/cloud-upload.svg';
import checkIcon from '/public/icons/check.svg';
import { StyledCards } from '../../../styles/homepage/styles';


const Cards = () => {
  return (
    <StyledCards>
      <Card icon={profileIcon} title="Create an account" text="Create an account fast and easy. Get started in no time." buttonText='Sign Up' buttonLink='/signup' />
      <Card icon={uploadIcon} title="Upload your images" text="Upload your images with a single click." buttonText='Upload' buttonLink='/profile' />
      <Card icon={checkIcon} title="Enjoy" text="Enjoy the experience and let the money roll in." buttonText='Enjoy' buttonLink={'https://www.binance.com/en'} />
    </StyledCards>
  )
}

export default Cards