import React from 'react'

import type { VFC } from 'react'

const ImageRenderer: VFC<{ source: string; size: { height: string; width: string } }> = ({
  source,
  size
}) => <img alt="img" src={source} style={{ maxWidth: size.width, maxHeight: size.height }} />

export default React.memo(ImageRenderer)
