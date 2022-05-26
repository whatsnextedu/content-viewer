import React from 'react'

import type { VFC } from 'react'

const YouTubeRenderer: VFC<{ source: string }> = ({ source }) => (
  <iframe src={`https://www.youtube.com/embed/${source}`} title={`youtube-video-${source}`} />
)

export default React.memo(YouTubeRenderer)
