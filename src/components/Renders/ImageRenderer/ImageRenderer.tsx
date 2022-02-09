import React from 'react'

import DownloadIcon from '../../DownloadIcon/DownloadIcon'

import type { VFC, CSSProperties } from 'react'

const ImageRenderer: VFC<{ source: string; styles?: CSSProperties; className?: string }> = ({
  source,
  styles,
  className
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <DownloadIcon source={source} />
      <img alt="img" className={className} src={source} style={styles} />
    </div>
  )
}

export default React.memo(ImageRenderer)
