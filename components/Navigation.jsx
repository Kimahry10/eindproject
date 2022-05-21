import Link from 'next/link'
import React from 'react'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const signOut = () => {
    Auth.signOut()
      .then(
        router.push('/')
      )
      .catch(err => console.log(err));
  }

  return (
    <>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a>My account</a>
        </Link>
      </li>
      <button onClick={signOut} className="signOutButton">SignOut</button>
    </>
  )
}

export default Navigation