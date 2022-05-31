import React from 'react'

import type { VFC } from 'react'

const AudioRenderer: VFC<{ source: string; size: { height: string; width: string } }> = ({
  source,
  size
}) => (
  <audio
    controls
    controlsList="nodownload"
    src={source}
    style={{ maxWidth: size.width, maxHeight: size.height }}
  />
)

export default React.memo(AudioRenderer)
