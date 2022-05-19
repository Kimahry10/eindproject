import React from 'react'
import Link from 'next/link'
import { StyledLinkButtonWithBorder } from './styles'

const LinkButtonWithBorder = ({ linkUrl, linkName }) => {
  return (
    <Link href={linkUrl}>
      <StyledLinkButtonWithBorder>
        {linkName}
      </StyledLinkButtonWithBorder>
    </Link>
  )
}

export default LinkButtonWithBorder