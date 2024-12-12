import { describe, test, expect } from 'bun:test';
import { mapArray } from './map-array';

describe('mapArrayTests', () => {
  test('возвращает массив с увеличенными числами', () => {
    expect(mapArray([1, 2, 3], (x) => x + 1)).toEqual([2, 3, 4]);
  });

  test('преобразует строки в их длину', () => {
    expect(mapArray(['cat', 'dog', 'elephant'], (x) => x.length)).toEqual([3, 3, 8]);
  });

  test('преобразует массив объектов в значения их свойства', () => {
    const data = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
    ];
    expect(mapArray(data, (x) => x.name)).toEqual(['Alice', 'Bob']);
  });

  test('преобразует булевые значения в строки', () => {
    expect(mapArray([true, false, true], (x) => x.toString())).toEqual(['true', 'false', 'true']);
  });

  test('преобразует массив строк в заглавные буквы', () => {
    expect(mapArray(['apple', 'banana'], (x) => x.toUpperCase())).toEqual(['APPLE', 'BANANA']);
  });

  test('преобразует массив чисел с использованием индекса', () => {
    expect(mapArray([10, 20, 30], (_, index) => index)).toEqual([0, 1, 2]);
  });

  test('преобразует массив объектов, добавляя новое свойство', () => {
    const data = [{ id: 1 }, { id: 2 }];
    expect(mapArray(data, (x) => ({ ...x, active: true }))).toEqual([
      { id: 1, active: true },
      { id: 2, active: true },
    ]);
  });

  test('преобразует пустой массив', () => {
    expect(mapArray<number, string>([], (x) => x.toString())).toEqual([]);
  });

  test('преобразует смешанный массив в строки', () => {
    const mixed = [1, 'hello', true, null];
    expect(mapArray(mixed, (x) => String(x))).toEqual(['1', 'hello', 'true', 'null']);
  });

  test('преобразует массив символов в их описания', () => {
    const symbols = [Symbol('a'), Symbol('b')];
    expect(mapArray(symbols, (x) => x.toString())).toEqual(['Symbol(a)', 'Symbol(b)']);
  });

  test('преобразует массив с null и undefined в "empty"', () => {
    expect(mapArray([null, undefined], () => 'empty')).toEqual(['empty', 'empty']);
  });

  test('первый аргумент не массив', () => {
    // @ts-expect-error: Проверка ошибки при неверном типе аргумента
    expect(() => mapArray('not an array', (x) => x)).toThrow('First argument must be an array');
  });

  test('второй аргумент не функция', () => {
    // @ts-expect-error: Проверка ошибки при неверном типе аргумента
    expect(() => mapArray([1, 2, 3], 'not a function')).toThrow('Second argument must be a function');
  });

  test('колбэк использует индекс и массив', () => {
    const result = mapArray([10, 20, 30], (value, index, array) => value + index + array.length);
    expect(result).toEqual([13, 24, 35]);
  });
});
