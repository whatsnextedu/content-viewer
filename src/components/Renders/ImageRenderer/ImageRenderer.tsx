import React from 'react'

import DownloadIcon from '../../DownloadIcon/DownloadIcon'

import type { VFC } from 'react'

const ImageRenderer: VFC<{ source: string }> = ({ source }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <DownloadIcon source={source} />
      <img alt="img" src={source} />
    </div>
  )
}

export default React.memo(ImageRenderer)
