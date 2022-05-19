import React from 'react'
import { StyledCards } from '../styles'
import Card from './Card'
import profileIcon from '/public/icons/profile.svg';
import uploadIcon from '/public/icons/cloud-upload.svg';
import checkIcon from '/public/icons/check.svg';


const Cards = () => {
  return (
    <StyledCards>
      <Card icon={profileIcon} title="Create an account" text="Create an account fast and easy. Get started in no time." buttonText='Sign Up' buttonLink='#' />
      <Card icon={uploadIcon} title="Upload your images" text="Upload your images with a single click." buttonText='Upload' buttonLink='#' />
      <Card icon={checkIcon} title="Enjoy" text="Enjoy the experience and let the money roll in." buttonText='Upload' buttonLink='#' />
    </StyledCards>
  )
}

export default Cards