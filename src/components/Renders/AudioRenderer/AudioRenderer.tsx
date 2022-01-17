import React from 'react'

import type { VFC, CSSProperties } from 'react'

const AudioRenderer: VFC<{ source: string; styles?: CSSProperties; className?: string }> = ({
  source,
  styles,
  className
}) => {
  return <audio controls className={className} src={source} style={styles} />
}

export default React.memo(AudioRenderer)
