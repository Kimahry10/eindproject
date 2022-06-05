import React from 'react'
import successIcon from '/public/icons/check.svg';
import Image from 'next/image';
import BaseLayout from '../../components/BaseLayout';
import Link from 'next/link';
import { SuccessStyling } from './styling';
import LinkButtonNoBorder from '../../components/buttons/LinkButtonNoBorder';

const Success = () => {
  return (
    <BaseLayout>
      <SuccessStyling>
        <Image src={successIcon} alt='success' height={80} width={80} />
        <h2>Thank you for your purchase</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis autem laborum sit hic consequuntur dolores repudiandae ad architecto earum.</p>
        <LinkButtonNoBorder linkName={'Continue Shopping'} linkUrl={'/search'} />
      </SuccessStyling>
    </BaseLayout>
  )
}

export default Success