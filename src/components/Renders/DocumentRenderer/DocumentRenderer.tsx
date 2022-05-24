import React, { useCallback } from 'react'

import type { VFC } from 'react'

const DocumentRenderer: VFC<{ source: string }> = ({ source }) => {
  const renderSource = useCallback((source: string): string => {
    let finalSource: string

    if (source.includes('docs.google.com')) {
      finalSource = source
    } else {
      finalSource = `https://docs.google.com/viewer?url=${source}&embedded=true`
    }

    return finalSource
  }, [])

  return <iframe src={renderSource(source)} title="document" />
}

export default React.memo(DocumentRenderer)
