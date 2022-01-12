import React from 'react'

import { ImageRenderer, VideoRenderer, AudioRenderer, DocumentRenderer } from '../Renders'

import type { VFC, CSSProperties } from 'react'

const FileRender: VFC<{
  fileType: string
  source: string
  styles?: CSSProperties
  className?: string
}> = ({ fileType, source, styles, className }) => {
  return (
    <div>
      {(() => {
        switch (fileType) {
          case 'image/gif':
          case 'image/png':
          case 'image/jpeg':
          case 'image/jpg':
          case 'image/svg':
          case 'image/svg+xml':
          case 'image/webp':
          case 'image/tiff':
            return <ImageRenderer className={className} source={source} styles={styles} />
          case 'video/mp4':
          case 'video/webm':
          case 'video/ogg':
          case 'video/quicktime':
            return <VideoRenderer className={className} source={source} styles={styles} />
          case 'audio/mp3':
          case 'audio/wav':
          case 'audio/ogg':
          case 'audio/m4a':
            return <AudioRenderer className={className} source={source} styles={styles} />
          case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
          case 'application/vnd.ms-excel':
          case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          case 'application/msword':
          case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
          case 'application/vnd.ms-powerpoint':
          case 'application/rtf':
          case 'application/pdf':
          case 'text/csv':
          case 'text/tab-separated-values':
            return <DocumentRenderer className={className} source={source} styles={styles} />
          default:
            return <h1>Unsupported file type</h1>
        }
      })()}
    </div>
  )
}

export default React.memo(FileRender)
