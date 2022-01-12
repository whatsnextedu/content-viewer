# content-viewer

---

## Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
  - [CSS Class](#css-class)
  - [React Inline](#react-inline)
  - [Styled Component](#styled-component)
- [Current Renderable File Types](#current-renderable-file-types)
  - [Document](#document)
  - [Image](#image)
  - [Video](#video)
  - [Audio](#audio)
- [API](#api)
- [License](#license)

---

## About

A package that provides a react component to render standard files and media types for the users to view.

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
import { FileViewer } from "content-viewer";

const App = () => {
  return <FileViewer fileType={fileType} source={source} />;
}

export default App
```
---

## Styling

### CSS Class

```tsx
<FileViewer fileType={fileType} source={source} className="awesome-class"/>
```

### React Inline

```tsx
<FileViewer fileType={fileType} source={source} styles={{width: '100%', height: 600}}/>
```

### Styled Component

```tsx
import { FileViewer } from "content-viewer";
import styled from "styled-components";

const StyledFileViewer = styled(FileViewer)`
  border: 1px solid red;
`;

<StyledFileViewer fileType={fileType} source={source} />;
```

---

## Current Renderable File Types

### Document

| Extension | MIME Type                                                                          |
| --------- | ---------------------------------------------------------------------------------- |
| doc       | application/msword                                                                 |
| docx      | application/vnd.openxmlformats-officedocument.wordprocessingml.document            |
| ppt       | application/vnd.ms-powerpoint                                                      |
| pptx      | applicatiapplication/vnd.openxmlformats-officedocument.presentationml.presentation |
| xls       | application/vnd.ms-excel                                                           |
| xlsx      | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet                  |
| pdf       | application/pdf                                                                    |
| rtf       | application/rtf                                                                    |
| csv       | text/csv                                                                           |
| tsv       | text/tab-separated-values                                                          |

### Image

| Extension | MIME Type     |
| --------- | ------------- |
| gif       | image/gif     |
| png       | image/png     |
| jpeg      | image/jpeg    |
| jpg       | image/jpg     |
| svg       | image/svg+xml |
| webp      | image/webp    |


### Video

| Extension | MIME Type       |
| --------- | --------------- |
| mp4       | video/mp4       |
| webm      | video/webm      |
| ogg       | video/ogg       |
| mov       | video/quicktime |

### Audio

| Extension | MIME Type |
| --------- | --------- |
| mp3       | audio/mp3 |
| wav       | audio/wav |
| ogg       | audio/ogg |
| m4a       | audio/m4a |

---

## API

### FileViewer props

| name             | type                  |
| ---------------- | --------------------- |
| fileType         | `string`              |
| source           | `string`              |
| className?       | `string`              |
| styles?          | `React.CSSProperties` |

---

## License

Licensed under the MIT License.

See [LICENSE](LICENSE) for more information.