import React from 'react'

import type { VFC } from 'react'

const VideoRenderer: VFC<{ source: string }> = ({ source }) => <video controls src={source} />

export default React.memo(VideoRenderer)
