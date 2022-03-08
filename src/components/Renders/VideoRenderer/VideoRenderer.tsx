import React from 'react'

import DownloadIcon from '../../DownloadIcon/DownloadIcon'

import type { VFC } from 'react'

const VideoRenderer: VFC<{ source: string }> = ({ source }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <DownloadIcon source={source} />
      <video controls src={source} />
    </div>
  )
}

export default React.memo(VideoRenderer)
