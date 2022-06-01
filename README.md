# content-viewer
---

## Contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
  - [Styled Component](#styled-component)
- [Current Renderer File Types](#current-renderer-file-types)
  - [Document](#document)
  - [Image](#image)
  - [Video](#video)
  - [Audio](#audio)
  - [Custom](#custom)
- [API](#api)
- [License](#license)

---

## About
A package that provides a React component to render standard files and media types for the users to view.

---

## Installation
```bash
 npm install https://github.com/whatsnextedu/content-viewer
 # or
 yarn add https://github.com/whatsnextedu/content-viewer
```

---

## Usage
```tsx
import { FileRender } from "content-viewer";

const App = () => {
  return <FileRender fileType={fileType} source={source} onError={() => setError()} />;
}

export default App
```

---

## Styling

### Styled Component
```tsx
import { FileRender } from "content-viewer";
import styled from "styled-components";

const StyledFileRender = styled(FileRender)`
  border: 1px solid red;
`;

const App = () => {
  return <StyledFileRender fileType={fileType} source={source} onError={() => setError()} />;
}

export default App
```

---

## Current Renderer File Types

### Document
| Extension | MIME Type                                                                 |
|-----------|---------------------------------------------------------------------------|
| doc       | application/msword                                                        |
| docx      | application/vnd.openxmlformats-officedocument.wordprocessingml.document   |
| ppt       | application/vnd.ms-powerpoint                                             |
| pptx      | application/vnd.openxmlformats-officedocument.presentationml.presentation |
| xls       | application/vnd.ms-excel                                                  |
| xlsx      | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet         |
| pdf       | application/pdf                                                           |
| rtf       | application/rtf                                                           |
| csv       | text/csv                                                                  |
| tsv       | text/tab-separated-values                                                 |

### Image
| Extension | MIME Type     |
|-----------|---------------|
| gif       | image/gif     |
| png       | image/png     |
| jpeg      | image/jpeg    |
| jpg       | image/jpg     |
| svg       | image/svg+xml |
| webp      | image/webp    |

### Video
| Extension | MIME Type       |
|-----------|-----------------|
| mp4       | video/mp4       |
| webm      | video/webm      |
| ogg       | video/ogg       |
| mov       | video/quicktime |

### Audio
| Extension | MIME Type |
|-----------|-----------|
| mp3       | audio/mp3 |
| wav       | audio/wav |
| ogg       | audio/ogg |
| m4a       | audio/m4a |

### Custom
| Extension | MIME Type      |
|-----------|----------------|
| YouTube   | custom/youtube |

---

## API

### FileRender props
| name     | type                                 |
|----------|--------------------------------------|
| fileType | `string`                             |
| source   | `string`                             |
 | onError  | `() => void`                         |
| size     | `{ height: string, width: string } ` |
---

## License

Licensed under the MIT License.

See [LICENSE](LICENSE) for more information.
