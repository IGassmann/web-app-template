declare global {
  type ArrayOfTwoOrMore<T> = [T, T, ...T[]];
}
