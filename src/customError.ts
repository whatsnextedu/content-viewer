class CustomError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }
}

export class ContentViewerError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  public static mimeTypeError(mimeType: string) {
    return new ContentViewerError(`The ${mimeType} format is not supported by the package.`)
  }
}
