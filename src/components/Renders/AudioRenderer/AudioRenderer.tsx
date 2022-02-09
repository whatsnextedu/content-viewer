import React from 'react'

import AudioDownloadIcon from '../../AudioDownloadIcon/AudioDownloadIcon'

import type { VFC, CSSProperties } from 'react'

const AudioRenderer: VFC<{ source: string; styles?: CSSProperties; className?: string }> = ({
  source,
  styles,
  className
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <AudioDownloadIcon source={source} />
      <audio controls className={className} src={source} style={styles} />
    </div>
  )
}

export default React.memo(AudioRenderer)
