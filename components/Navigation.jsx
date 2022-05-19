import Link from 'next/link'
import React from 'react'

const Navigation = () => {
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
    </>
  )
}

export default Navigation