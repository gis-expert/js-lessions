export function filterArray<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean
  // @ts-expect-error Удали эту строку как начнешь писать реализацию функции
): T[] {
}
