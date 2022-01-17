import React, { useCallback } from 'react'

import DownloadIcon from '../../DownloadIcon/DownloadIcon'

import type { VFC, CSSProperties } from 'react'

const DocumentRenderer: VFC<{ source: string; styles?: CSSProperties; className?: string }> = ({
  source,
  styles,
  className
}) => {
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
    <div style={{ display: 'flex' }}>
      {!source.includes('docs.google.com') ? <DownloadIcon source={source} /> : null}
      <iframe className={className} src={renderSource(source)} style={styles} title="document" />
    </div>
  )
}

export default React.memo(DocumentRenderer)
