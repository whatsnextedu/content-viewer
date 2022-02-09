import React from 'react'

import type { SVGProps } from 'react'

const SVGDownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    fill="white"
    height="1.5em"
    id="Layer_1"
    viewBox="0 0 24 24"
    width="1.5em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Download</title>
    <path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Z" />
    <path d="M11.29,15.71a1,1,0,0,0,1.42,0l5-5a1,1,0,0,0-1.41-1.41L13,12.59V3a1,1,0,0,0-2,0v9.59L7.71,9.29a1,1,0,0,0-1.41,1.41Z" />
  </svg>
)

export default React.memo(SVGDownloadIcon)
