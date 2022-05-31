import React from 'react'

import type { VFC } from 'react'

const YouTubeRenderer: VFC<{ source: string; size: { height: string; width: string } }> = ({
  source,
  size
}) => (
  <iframe
    src={`https://www.youtube.com/embed/${source}`}
    style={{ width: size.width, height: size.height, border: 'none' }}
    title={`youtube-video-${source}`}
  />
)

export default React.memo(YouTubeRenderer)
