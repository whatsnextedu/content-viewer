import React from 'react'

import type { VFC } from 'react'

const DocumentRenderer: VFC<{ source: string; size: { height: string; width: string } }> = ({
  source,
  size
}) => {
  const renderSource = (source: string): string => {
    let finalSource: string

    if (source.includes('docs.google.com')) {
      finalSource = source
    } else {
      finalSource = `https://docs.google.com/viewer?url=${source}&embedded=true`
    }

    return finalSource
  }

  return (
    <iframe
      src={renderSource(source)}
      style={{ width: size.width, height: size.height, border: 'none' }}
      title="document"
    />
  )
}

export default React.memo(DocumentRenderer)
