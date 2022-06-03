import Link from 'next/link'
import React from 'react'
// import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { getAuth, signOut } from "firebase/auth";
import { Auth } from '../firebase';
import { UserAuth } from '../providers/AuthenticatedUser';



const Navigation = () => {
  const router = useRouter();
  const { user, logout } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      router.push('/')
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/search">
          <a>Search</a>
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
      <button onClick={handleSignOut} className="signOutButton">SignOut</button>
    </>
  )
}

export default Navigation