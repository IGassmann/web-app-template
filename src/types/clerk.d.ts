declare global {
  interface UserPublicMetadata {
    [key: string]: unknown;
    isAdmin?: boolean;
  }

  interface UserUnsafeMetadata {
    [key: string]: unknown;
  }
}
