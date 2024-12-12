export function mapArray<T, U>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => U
  // @ts-expect-error Удали эту строку как начнешь писать реализацию функции
): U[] {
}
