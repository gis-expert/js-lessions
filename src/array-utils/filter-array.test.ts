import { describe, test, expect } from 'bun:test';
import { filterArray } from './filter-array';

describe('filterArrayTests', () => {
  test('фильтрует массив чисел по чётности', () => {
    expect(filterArray([1, 2, 3, 4, 5], (x) => x % 2 === 0)).toEqual([2, 4]);
  });

  test('фильтрует массив строк по длине строки', () => {
    expect(filterArray(['cat', 'dog', 'elephant'], (x) => x.length > 3)).toEqual(['elephant']);
  });

  test('фильтрует массив объектов по значению свойства', () => {
    const data = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
    ];
    expect(filterArray(data, (x) => x.age > 30)).toEqual([{ name: 'Charlie', age: 35 }]);
  });

  test('фильтрует массив булевых значений', () => {
    expect(filterArray([true, false, true], (x) => x)).toEqual([true, true]);
  });

  test('фильтрует массив строк, где строки содержат подстроку', () => {
    expect(filterArray(['apple', 'banana', 'apricot'], (x) => x.includes('ap'))).toEqual(['apple', 'apricot']);
  });

  test('фильтрует массив чисел с использованием индекса', () => {
    expect(filterArray([10, 20, 30, 40], (x, index) => index % 2 === 0)).toEqual([10, 30]);
  });

  test('фильтрует массив объектов, проверяя длину массива', () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(filterArray(data, (_, __, array) => array.length === 3)).toEqual(data);
  });

  test('пустой массив с разными типами', () => {
    expect(filterArray([], (x) => !!x)).toEqual([]);
  });

  test('фильтрует массив с разными типами значений', () => {
    const mixed = [1, 'hello', true, null, undefined, {}, []];
    expect(filterArray(mixed, (x) => typeof x === 'string')).toEqual(['hello']);
  });

  test('фильтрует массив объектов по вложенному свойству', () => {
    const data = [
      { id: 1, nested: { active: false } },
      { id: 2, nested: { active: true } },
    ];
    expect(filterArray(data, (x) => x.nested.active)).toEqual([{ id: 2, nested: { active: true } }]);
  });

  test('фильтрует массив с символами', () => {
    const symbols = [Symbol('a'), Symbol('b'), Symbol('c')];
    const target = symbols[1];
    expect(filterArray(symbols, (x) => x === target)).toEqual([target]);
  });

  test('фильтрует массив undefined и null', () => {
    expect(filterArray([null, undefined, 0, false], (x) => x != null)).toEqual([0, false]);
  });

  test('первый аргумент не массив', () => {
    // @ts-expect-error: Проверка ошибки при неверном типе аргумента
    expect(() => filterArray('not an array', (x) => x > 0)).toThrow('First argument must be an array');
  });

  test('второй аргумент не функция', () => {
    // @ts-expect-error: Проверка ошибки при неверном типе аргумента
    expect(() => filterArray([1, 2, 3], 'not a function')).toThrow('Second argument must be a function');
  });
});
