import React from 'react'
import Link from 'next/link'
import { StyledLinkButtonNoBorder } from './styles'

const LinkButtonNoBorder = ({ linkUrl, linkName }) => {
  return (
    <Link href={linkUrl}>
      <StyledLinkButtonNoBorder>
        {linkName}
      </StyledLinkButtonNoBorder>
    </Link>
  )
}

export default LinkButtonNoBorder