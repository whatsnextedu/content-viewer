import React from 'react'

import SVGDownloadIcon from './SVGDownloadIcon'

import type { VFC } from 'react'

const DownloadIcon: VFC<{ source: string }> = ({ source }) => {
  return (
    <a
      download
      href={source}
      style={{
        position: 'relative',
        textDecoration: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        color: 'white',
        padding: 10,
        left: '3rem',
        height: '1rem',
        top: '0.9rem'
      }}
    >
      <SVGDownloadIcon />
    </a>
  )
}

export default React.memo(DownloadIcon)
