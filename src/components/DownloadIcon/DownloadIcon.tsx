import React, { useState } from 'react'

import SVGDownloadIcon from './SVGDownloadIcon'

import type { VFC } from 'react'

const DownloadIcon: VFC<{ source: string; single?: boolean }> = ({ source, single = false }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <a
      download
      href={source}
      style={{
        position: 'relative',
        textDecoration: 'none',
        backgroundColor: isHover ? 'rgba(115, 115, 115, 0.75)' : 'rgba(0, 0, 0, 0.75)',
        color: 'white',
        padding: 8,
        height: '1.5em',
        width: '1.5em',
        top: '15px',
        right: single ? '95px' : '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <SVGDownloadIcon />
    </a>
  )
}

export default React.memo(DownloadIcon)
