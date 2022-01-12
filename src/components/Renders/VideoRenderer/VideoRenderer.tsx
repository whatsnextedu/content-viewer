import React from 'react'

import type { VFC, CSSProperties } from 'react'

const VideoRenderer: VFC<{ source: string; styles?: CSSProperties; className?: string }> = ({
  source,
  styles,
  className
}) => {
  return (
    <video controls className={className} controlsList="nodownload" src={source} style={styles} />
  )
}

export default React.memo(VideoRenderer)
