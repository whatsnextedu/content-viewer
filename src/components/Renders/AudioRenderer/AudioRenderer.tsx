import React from 'react'

import AudioDownloadIcon from '../../AudioDownloadIcon/AudioDownloadIcon'

import type { VFC } from 'react'

const AudioRenderer: VFC<{ source: string }> = ({ source }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <AudioDownloadIcon source={source} />
      <audio controls src={source} />
    </div>
  )
}

export default React.memo(AudioRenderer)
