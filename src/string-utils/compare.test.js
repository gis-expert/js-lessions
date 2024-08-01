import { expect, test, describe } from 'bun:test';
import {
  isEqual, isNotEqual, isMore, isLess, isMoreOrEqual, isLessOrEqual,
} from './compare.js';
import { complexText, ZERO_CODE_CHAR } from './common.js';

describe('isEqualTests', () => {
  test('одиночные одинаковые символы', () => {
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual('a', 'b')).toBe(false);
  });

  test('количество символов одинаково, но не равны', () => {
    expect(isEqual('abc', 'abc')).toBe(true);
    expect(isEqual('abc', 'abb')).toBe(false);
  });
  
  test('символы совпадают, но у первого больше символов', () => {
    expect(isEqual('abbb', 'abb')).toBe(false);
  });
  
  test('символы совпадают, но у второго больше символов', () => {
    expect(isEqual('abb', 'abbb')).toBe(false);
  });
  
  test('пустые строки', () => {
    expect(isEqual('', '')).toBe(true);
  });
  
  test('пустые и непустая строка', () => {
    expect(isEqual('', 'a')).toBe(false);
    expect(isEqual('a', '')).toBe(false);
    expect(isEqual('', 'abc')).toBe(false);
  });
  
  test('сложные одинаковые строки', () => {
    expect(isEqual(complexText, complexText)).toBe(true);
  });
  
  test('сложные строки различной длины', () => {
    expect(isEqual(complexText + 'a', complexText)).toBe(false);
    expect(isEqual(complexText + '\n', complexText)).toBe(false);
    expect(isEqual(complexText, complexText + ZERO_CODE_CHAR)).toBe(false);
  });
  
  test('несоответствие типа второго аргумента приводит к исключению', () => {
    expect(() => isEqual('2', 2)).toThrow('argument must be type of string');
    expect(() => isEqual('2', true)).toThrow('argument must be type of string');
    expect(() => isEqual('2', [])).toThrow('argument must be type of string');
    expect(() => isEqual('2', null)).toThrow('argument must be type of string');
    expect(() => isEqual('2')).toThrow('argument must be type of string');
  });
  
  test('несоответствие типа первого аргумента приводит к исключению', () => {
    expect(() => isEqual(2, '2')).toThrow('argument must be type of string');
    expect(() => isEqual(true, '1')).toThrow('argument must be type of string');
    expect(() => isEqual([], '1')).toThrow('argument must be type of string');
    expect(() => isEqual(null, '1')).toThrow('argument must be type of string');
    expect(() => isEqual(undefined, '1')).toThrow('argument must be type of string');
  });
});

describe('isNotEqualTests', () => {
  test('одиночные одинаковые символы', () => {
    expect(isNotEqual('a', 'a')).toBe(false);
    expect(isNotEqual('a', 'b')).toBe(true);
  });

  test('количество символов одинаково, но не равны', () => {
    expect(isNotEqual('abc', 'abb')).toBe(true);
    expect(isNotEqual('abb', 'abc')).toBe(true);
  });

  test('символы совпадают, но у первого больше символов', () => {
    expect(isNotEqual('abbb', 'abb')).toBe(true);
  });

  test('символы совпадают, но у второго больше символов', () => {
    expect(isNotEqual('abb', 'abbb')).toBe(true);
  });

  test('пустые строки', () => {
    expect(isNotEqual('', '')).toBe(false);
  });

  test('пустые и непустая строка', () => {
    expect(isNotEqual('', 'a')).toBe(true);
    expect(isNotEqual('a', '')).toBe(true);
  });

  test('сложные одинаковые строки', () => {
    expect(isNotEqual(complexText, complexText)).toBe(false);
  });

  test('сложные строки различной длины', () => {
    expect(isNotEqual(complexText + 'a', complexText)).toBe(true);
    expect(isNotEqual(complexText + '\n', complexText)).toBe(true);
    expect(isNotEqual(complexText + ZERO_CODE_CHAR, complexText)).toBe(true);
  });

  test('несоответствие типа второго аргумента приводит к исключению', () => {
    expect(() => isNotEqual('2', 2)).toThrow('argument must be type of string');
    expect(() => isNotEqual('2', true)).toThrow('argument must be type of string');
    expect(() => isNotEqual('2', [])).toThrow('argument must be type of string');
    expect(() => isNotEqual('2', null)).toThrow('argument must be type of string');
    expect(() => isNotEqual('2')).toThrow('argument must be type of string');
  });

  test('несоответствие типа первого аргумента приводит к исключению', () => {
    expect(() => isNotEqual(2, '2')).toThrow('argument must be type of string');
    expect(() => isNotEqual(true, '1')).toThrow('argument must be type of string');
    expect(() => isNotEqual([], '1')).toThrow('argument must be type of string');
    expect(() => isNotEqual(null, '1')).toThrow('argument must be type of string');
    expect(() => isNotEqual(undefined, '1')).toThrow('argument must be type of string');
  });
});

describe('isMoreTests', () => {
  test('первая строка больше второй по первым символам', () => {
    expect(isMore('ca', 'ba')).toBe(true);
    expect(isMore('cca', 'cba')).toBe(true);
  });

  test('первая строка не больше второй по первым символам', () => {
    expect(isMore('ab', 'ac')).toBe(false);
    expect(isMore('cba', 'cca')).toBe(false);
  });

  test('первая строка больше второй по последнему символу', () => {
    expect(isMore('abc', 'abb')).toBe(true);
  });

  test('первая строка не больше второй по последнему символу', () => {
    expect(isMore('abb', 'abc')).toBe(false);
  });

  test('первая и вторая равны', () => {
    expect(isMore('abb', 'abb')).toBe(false);
  });

  test('первая больше по длине и по содержанию', () => {
    expect(isMore('abca', 'abb')).toBe(true);
  });

  test('первая больше по длине, но меньше по содержанию', () => {
    expect(isMore('abaa', 'abb')).toBe(false);
  });

  test('первая и вторая равны по содержанию, но первая больше по длине', () => {
    expect(isMore('abba', 'abb')).toBe(true);
  });

  test('первая и вторая равны по содержанию, но вторая больше по длине', () => {
    expect(isMore('abb', 'abba')).toBe(false);
  });

  test('первая меньше по длине и но больше по содержанию', () => {
    expect(isMore('abc', 'abba')).toBe(true);
  });

  test('первая меньше по длине и по содержанию', () => {
    expect(isMore('abb', 'abca')).toBe(false);
  });

  test('пустые строки не больше чем пустая строка', () => {
    expect(isMore('', '')).toBe(false);
  });

  test('пустая строка не больше чем непустая строка', () => {
    expect(isMore('', ZERO_CODE_CHAR)).toBe(false);
  });

  test('не пустая строка больше чем пустая', () => {
    expect(isMore(ZERO_CODE_CHAR, '')).toBe(true);
  });

  test('несоответствие типа второго аргумента приводит к исключению', () => {
    expect(() => isMore('2', 2)).toThrow('argument must be type of string');
    expect(() => isMore('2', true)).toThrow('argument must be type of string');
    expect(() => isMore('2', [])).toThrow('argument must be type of string');
    expect(() => isMore('2', null)).toThrow('argument must be type of string');
    expect(() => isMore('2')).toThrow('argument must be type of string');
  });

  test('несоответствие типа первого аргумента приводит к исключению', () => {
    expect(() => isMore(2, '2')).toThrow('argument must be type of string');
    expect(() => isMore(true, '2')).toThrow('argument must be type of string');
    expect(() => isMore([], '2')).toThrow('argument must be type of string');
    expect(() => isMore(undefined, '2')).toThrow('argument must be type of string');
    expect(() => isMore(null, '2')).toThrow('argument must be type of string');
  });
});

describe('isLessTests', () => {
  test('первая строка меньше второй по первым символам', () => {
    expect(isLess('ba', 'ca')).toBe(true);
    expect(isLess('cba', 'cca')).toBe(true);
  });

  test('первая строка не меньше второй по первым символам', () => {
    expect(isLess('ac', 'ab')).toBe(false);
    expect(isLess('cca', 'cba')).toBe(false);
  });

  test('первая строка меньше второй по последнему символу', () => {
    expect(isLess('abb', 'abc')).toBe(true);
  });

  test('первая строка не меньше второй по последнему символу', () => {
    expect(isLess('abc', 'abb')).toBe(false);
  });

  test('первая и вторая равны', () => {
    expect(isLess('abb', 'abb')).toBe(false);
  });

  test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
    expect(isLess('abb', 'abb' + ZERO_CODE_CHAR)).toBe(true);
  });

  test('первая и вторая равны по содержанию, но первая не меньше по длине', () => {
    expect(isLess('abb' + ZERO_CODE_CHAR, 'abb')).toBe(false);
  });

  test('пустые строки', () => {
    expect(isLess('', '')).toBe(false);
  });

  test('пустая строка меньше чем непустая строка', () => {
    expect(isLess('', ZERO_CODE_CHAR)).toBe(true);
  });

  test('не пустая строка больше чем пустая', () => {
    expect(isLess(ZERO_CODE_CHAR, '')).toBe(false);
  });

  test('несоответствие типа второго аргумента приводит к исключению', () => {
    expect(() => isLess('2', 2)).toThrow('argument must be type of string');
    expect(() => isLess('2', true)).toThrow('argument must be type of string');
    expect(() => isLess('2', [])).toThrow('argument must be type of string');
    expect(() => isLess('2', null)).toThrow('argument must be type of string');
    expect(() => isLess('2')).toThrow('argument must be type of string');
  });

  test('несоответствие типа первого аргумента приводит к исключению', () => {
    expect(() => isLess(2, '2')).toThrow('argument must be type of string');
    expect(() => isLess(true, '2')).toThrow('argument must be type of string');
    expect(() => isLess([], '2')).toThrow('argument must be type of string');
    expect(() => isLess(undefined, '2')).toThrow('argument must be type of string');
    expect(() => isLess(null, '2')).toThrow('argument must be type of string');
  });
});

describe('isMoreOrEqualTests', () => {
  test('первая строка больше второй по первому символу', () => {
    expect(isMoreOrEqual('ca', 'ba')).toBe(true);
    expect(isMoreOrEqual('cca', 'cba')).toBe(true);
  });

  test('первая строка не больше второй по первому символу', () => {
    expect(isMoreOrEqual('ab', 'ac')).toBe(false);
    expect(isMoreOrEqual('cba', 'cca')).toBe(false);
  });

  test('первая строка больше второй по последнему символу', () => {
    expect(isMoreOrEqual('abc', 'abb')).toBe(true);
  });

  test('первая и вторая равны', () => {
    expect(isMoreOrEqual('abb', 'abb')).toBe(true);
  });

  test('первая строка не больше второй по последнему символу', () => {
    expect(isMoreOrEqual('abb', 'abc')).toBe(false);
  });

  test('первая и вторая равны по содержанию, но первая больше по длине', () => {
    expect(isMoreOrEqual('abb' + ZERO_CODE_CHAR, 'abb')).toBe(true);
  });

  test('первая и вторая равны по содержанию, но первая не больше по длине', () => {
    expect(isMoreOrEqual('abb', 'abb' + ZERO_CODE_CHAR)).toBe(false);
  });

  test('пустые строки', () => {
    expect(isMoreOrEqual('', '')).toBe(true);
  });

  test('пустая строка не больше чем непустая строка', () => {
    expect(isMoreOrEqual('', ZERO_CODE_CHAR)).toBe(false);
  });

  test('не пустая строка больше чем пустая', () => {
    expect(isMoreOrEqual(ZERO_CODE_CHAR, '')).toBe(true);
  });

  test('несоответствие типа второго аргумента приводит к исключению', () => {
    expect(() => isMoreOrEqual('2', 2)).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual('2', true)).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual('2', [])).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual('2', null)).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual('2')).toThrow('argument must be type of string');
  });

  test('несоответствие типа первого аргумента приводит к исключению', () => {
    expect(() => isMoreOrEqual(2, '2')).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual(true, '2')).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual([], '2')).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual(undefined, '2')).toThrow('argument must be type of string');
    expect(() => isMoreOrEqual(null, '2')).toThrow('argument must be type of string');
  });
});

describe('isLessOrEqualTests', () => {
  test('первая строка меньше второй по первому символу', () => {
    expect(isLessOrEqual('ba', 'ca')).toBe(true);
    expect(isLessOrEqual('aba', 'aca')).toBe(true);
  });

  test('первая строка не меньше второй по первому символу', () => {
    expect(isLessOrEqual('ac', 'ab')).toBe(false);
    expect(isLessOrEqual('aca', 'aba')).toBe(false);
  });

  test('первая строка меньше второй по последнему символу', () => {
    expect(isLessOrEqual('abb', 'abc')).toBe(true);
  });

  test('первая и вторая равны', () => {
    expect(isLessOrEqual('abb', 'abb')).toBe(true);
  });

  test('вторая строка больше первой по последнему символу', () => {
    expect(isLessOrEqual('abc', 'abb')).toBe(false);
  });

  test('первая и вторая равны по содержанию, но первая меньше по длине', () => {
    expect(isLessOrEqual('abb', 'abb' + ZERO_CODE_CHAR)).toBe(true);
  });

  test('первая и вторая равны по содержанию, но первая не меньше по длине', () => {
    expect(isLessOrEqual('abb' + ZERO_CODE_CHAR, 'abb')).toBe(false);
  });

  test('пустые строки', () => {
    expect(isLessOrEqual('', '')).toBe(true);
  });

  test('пустая строка меньше чем непустая строка', () => {
    expect(isLessOrEqual('', ZERO_CODE_CHAR)).toBe(true);
  });

  test('не пустая строка больше чем пустая', () => {
    expect(isLessOrEqual(ZERO_CODE_CHAR, '')).toBe(false);
  });

  test('несоответствие типа второго аргумента приводит к исключению', () => {
    expect(() => isLessOrEqual('2', 2)).toThrow('argument must be type of string');
    expect(() => isLessOrEqual('2', true)).toThrow('argument must be type of string');
    expect(() => isLessOrEqual('2', [])).toThrow('argument must be type of string');
    expect(() => isLessOrEqual('2', null)).toThrow('argument must be type of string');
    expect(() => isLessOrEqual('2')).toThrow('argument must be type of string');
  });

  test('несоответствие типа первого аргумента приводит к исключению', () => {
    expect(() => isLessOrEqual(2, '2')).toThrow('argument must be type of string');
    expect(() => isLessOrEqual(true, '2')).toThrow('argument must be type of string');
    expect(() => isLessOrEqual([], '2')).toThrow('argument must be type of string');
    expect(() => isLessOrEqual(undefined, '2')).toThrow('argument must be type of string');
    expect(() => isLessOrEqual(null, '2')).toThrow('argument must be type of string');
  });
});