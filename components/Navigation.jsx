import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav>
      <ul>
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
          <Link href="/profile">
            <a>My account</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation