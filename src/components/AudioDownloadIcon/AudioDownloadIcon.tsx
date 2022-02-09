import React from 'react'

import SVGAudioDownloadIcon from './SVGAudioDownloadIcon'

import type { VFC } from 'react'

const AudioDownloadIcon: VFC<{ source: string }> = ({ source }) => {
  return (
    <a
      download
      href={source}
      style={{
        position: 'relative',
        textDecoration: 'none',
        backgroundColor: 'rgba(241, 243, 244, 1)',
        color: 'white',
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        left: '-25px'
      }}
    >
      <SVGAudioDownloadIcon />
    </a>
  )
}

export default React.memo(AudioDownloadIcon)
