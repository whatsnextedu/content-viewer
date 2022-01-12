import React from 'react'

import type { VFC, CSSProperties } from 'react'

const ImageRenderer: VFC<{ source: string; styles?: CSSProperties; className?: string }> = ({
  source,
  styles,
  className
}) => {
  return <img alt="img" className={className} src={source} style={styles} />
}

export default React.memo(ImageRenderer)
