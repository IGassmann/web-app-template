declare global {
  interface UserPublicMetadata {
    [key: string]: unknown;
  }

  interface UserUnsafeMetadata {
    [key: string]: unknown;
  }
}
