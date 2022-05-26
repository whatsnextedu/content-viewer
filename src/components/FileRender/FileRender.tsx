import React from 'react'

import {
  ImageRenderer,
  VideoRenderer,
  AudioRenderer,
  DocumentRenderer,
  YouTubeRenderer
} from '../Renders'
import { ContentViewerError } from '../../customError'

import type { VFC } from 'react'

const FileRender: VFC<{
  fileType: string
  source: string
}> = ({ fileType, source }) => {
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
            return <ImageRenderer source={source} />
          case 'video/mp4':
          case 'video/webm':
          case 'video/ogg':
          case 'video/quicktime':
            return <VideoRenderer source={source} />
          case 'audio/mp3':
          case 'audio/wav':
          case 'audio/ogg':
          case 'audio/m4a':
            return <AudioRenderer source={source} />
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
            return <DocumentRenderer source={source} />
          case 'custom/youtube':
            return <YouTubeRenderer source={source} />
          default:
            throw ContentViewerError.mimeTypeError(fileType)
        }
      })()}
    </div>
  )
}

export default React.memo(FileRender)
