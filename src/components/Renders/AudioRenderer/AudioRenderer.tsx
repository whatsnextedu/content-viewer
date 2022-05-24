import React from 'react'

import type { VFC } from 'react'

const AudioRenderer: VFC<{ source: string }> = ({ source }) => <audio controls src={source} />

export default React.memo(AudioRenderer)
