import React from 'react'

import DownloadIcon from '../../DownloadIcon/DownloadIcon'

import type { VFC, CSSProperties } from 'react'

const VideoRenderer: VFC<{ source: string; styles?: CSSProperties; className?: string }> = ({
  source,
  styles,
  className
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <DownloadIcon source={source} />
      <video controls className={className} src={source} style={styles} />
    </div>
  )
}

export default React.memo(VideoRenderer)
