import React from 'react'

import type { VFC } from 'react'

const ImageRenderer: VFC<{ source: string }> = ({ source }) => <img alt="img" src={source} />

export default React.memo(ImageRenderer)
