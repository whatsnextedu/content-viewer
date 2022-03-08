import React, { useCallback } from 'react'

import DownloadIcon from '../../DownloadIcon/DownloadIcon'

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

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      {!source.includes('docs.google.com') ? <DownloadIcon single source={source} /> : null}
      <iframe src={renderSource(source)} title="document" />
    </div>
  )
}

export default React.memo(DocumentRenderer)
