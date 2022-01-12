import React, { useCallback } from 'react'

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
    } else if (
      source.endsWith('.pdf') ||
      source.endsWith('.csv') ||
      source.endsWith('.tsv') ||
      source.endsWith('.doc') ||
      source.endsWith('.docx')
    ) {
      finalSource = 'https://docs.google.com/viewer?url=' + source + '&embedded=true'
    } else {
      finalSource = 'https://view.officeapps.live.com/op/embed.aspx?src=' + source
    }

    return finalSource
  }, [])

  return <iframe className={className} src={renderSource(source)} style={styles} title="document" />
}

export default React.memo(DocumentRenderer)
