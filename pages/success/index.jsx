import React, { useEffect } from 'react'
import successIcon from '/public/icons/check.svg';
import Image from 'next/image';
import BaseLayout from '../../components/BaseLayout';
import Link from 'next/link';
import { SuccessStyling } from './styling';
import LinkButtonNoBorder from '../../components/buttons/LinkButtonNoBorder';
import { useRouter } from 'next/router'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db, firestore } from '../../firebase';
import { UserAuth } from '../../providers/AuthenticatedUser';
import { FirebaseError } from 'firebase/app';

const Success = () => {
  const { query } = useRouter();
  const { user } = UserAuth();

  try {
    const queryPaymentStatus = JSON.parse(query.payment);
    const image = JSON.parse(localStorage.getItem('imageInfo')).image

    console.log(queryPaymentStatus)

    if (queryPaymentStatus) {
      addDoc(collection(firestore, "userPaidImages"), {
        uid: user.uid,
        image: image
      });
    }
  } catch (err) {
    console.log(err)
  }



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