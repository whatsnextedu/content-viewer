import React from 'react'

import type { VFC } from 'react'

const VideoRenderer: VFC<{ source: string; size: { height: string; width: string } }> = ({
  source,
  size
}) => (
  <video
    controls
    controlsList="nodownload"
    src={source}
    style={{ width: size.width, height: size.height }}
  />
)

export default React.memo(VideoRenderer)
