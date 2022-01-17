import React from 'react'

import type { SVGProps } from 'react'

const SVGDownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title />
    <path d="M14 6.5h-4v-6H4v6H0l7 7 7-7Zm-14 9v2h14v-2H0Z" fill="white" fillRule="evenodd" />
  </svg>
)

export default React.memo(SVGDownloadIcon)
