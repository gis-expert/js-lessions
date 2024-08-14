import { describe, test, expect } from 'bun:test';
import { endsWith, startsWith } from './starts-ends-with.js';

describe('startsEndsWithTests', () => {
  describe('startsWithTests', () => {
    const text = 'hello my friend';

    test('строка начинается с искомого текста', () => {
      expect(startsWith(text, 'hello')).toBe(true);
      expect(startsWith(text, 'he')).toBe(true);
      expect(startsWith(text, 'h')).toBe(true);
    });
    //
    // test('строка не начинается с искомого текста', () => {
    //   expect(startsWith(text, 'tello')).toBe(false);
    //   expect(startsWith(text, 'te')).toBe(false);
    //   expect(startsWith(text, 't')).toBe(false);
    //   expect(startsWith(text, ' ')).toBe(false);
    //   expect(startsWith(text, '\t')).toBe(false);
    // });
    //
    // test('пустая строка как искомая, возвращает истину', () => {
    //   expect(startsWith(text, '')).toBe(true);
    // });
    //
    // test('переданная позиция равна нулю', () => {
    //   expect(startsWith(text, 'h', 0)).toBe(true);
    // });
    //
    // test('начальная позиция и длина поисковой строки выводит конечный индекс за длину текста', () => {
    //   expect(() => startsWith(text, 'd', text.length)).toThrow('invalid start position or search length');
    //   expect(() => startsWith('hello', 'hel', 4)).toThrow('invalid start position or search length');
    // });
    //
    // test('позиция больше длины текста вызывает исключение', () => {
    //   expect(() => startsWith(text, 'd', text.length + 1)).toThrow('invalid position');
    // });
    //
    // test('отрицательное значение позиции вызывает исключение', () => {
    //   expect(() => startsWith(text, 'hello', -1)).toThrow('invalid position');
    // });
    //
    // test('передаем позицию для первого символа, положительный сценарий', () => {
    //   expect(startsWith(text, 'ello', 1)).toBe(true);
    //   expect(startsWith(text, 'my', 6)).toBe(true);
    // });
    //
    // test('передаем позицию для первого символа, отрицательный сценарий', () => {
    //   expect(startsWith(text, 'hello', 1)).toBe(false);
    //   expect(startsWith(text, 'llo', 1)).toBe(false);
    //   expect(startsWith(text, 'my', 5)).toBe(false);
    //   expect(startsWith(text, 'my', 7)).toBe(false);
    // });
    //
    // test('параметр позиции должен быть только числом', () => {
    //   expect(() => startsWith(text, 'friend', true)).toThrow('invalid position type');
    //   expect(() => startsWith(text, ' f', '9')).toThrow('invalid position type');
    // });
    //
    // test('второй параметр со строкой поиска должен быть только строковым типом', () => {
    //   expect(() => startsWith(text, true)).toThrow('argument search must be type of string');
    //   expect(() => startsWith(text, 5)).toThrow('argument search must be type of string');
    // });
    //
    // test('третий параметр с текстом должен быть только строковым типом', () => {
    //   expect(() => startsWith(true, 'f')).toThrow('argument text must be type of string');
    //   expect(() => startsWith(5, '5')).toThrow('argument text must be type of string');
    // });
  });

  describe('endsWithTests', () => {
    // const text = 'hello my friend';
    //
    // test('строка заканчивается на искомый текст', () => {
    //   expect(endsWith(text, 'friend')).toBe(true);
    //   expect(endsWith(text, 'nd')).toBe(true);
    //   expect(endsWith(text, 'd')).toBe(true);
    // });
    //
    // test('строка не заканчивается на искомый текст', () => {
    //   expect(endsWith(text, 'briend')).toBe(false);
    //   expect(endsWith(text, 'nt')).toBe(false);
    //   expect(endsWith(text, 'r')).toBe(false);
    //   expect(endsWith(text, ' ')).toBe(false);
    //   expect(endsWith(text, '\n')).toBe(false);
    // });
    //
    // test('пустая строка как искомая, возвращает истину', () => {
    //   expect(endsWith(text, '')).toBe(true);
    // });
    //
    // test('переданная позиция равна последней', () => {
    //   expect(endsWith(text, 'friend', text.length)).toBe(true);
    // });
    //
    // test('позиция больше длины текста вызывает исключение', () => {
    //   expect(() => endsWith(text, 'friend', text.length + 1)).toThrow('invalid position');
    // });
    //
    // test('отрицательное значение позиции вызывает исключение', () => {
    //   expect(() => endsWith(text, 'friend', -1)).toThrow('invalid position');
    // });
    //
    // test('передаем позицию для последнего символа, положительный сценарий', () => {
    //   expect(endsWith(text, 'frien', text.length - 1)).toBe(true);
    //   expect(endsWith(text, ' f', 10)).toBe(true);
    // });
    //
    // test('конечная позиция и длина поисковой строки выводит стартовый индекс в минус', () => {
    //   expect(() => endsWith(text, 'h', 0)).toThrow('invalid end position or search length');
    //   expect(() => endsWith('hello', 'hel', 2)).toThrow('invalid end position or search length');
    // });
    //
    // test('передаем позицию для последнего символа, отрицательный сценарий', () => {
    //   expect(endsWith(text, 'friend', text.length - 1)).toBe(false);
    //   expect(endsWith(text, ' f', 9)).toBe(false);
    //   expect(endsWith(text, ' f', 11)).toBe(false);
    // });
    //
    // test('параметр позиции должен быть только числом', () => {
    //   expect(() => endsWith(text, 'friend', true)).toThrow('invalid position type');
    //   expect(() => endsWith(text, ' f', '9')).toThrow('invalid position type');
    // });
    //
    // test('второй параметр со строкой поиска должен быть только строковым типом', () => {
    //   expect(() => endsWith(text, true)).toThrow('argument search must be type of string');
    //   expect(() => endsWith(text, 5)).toThrow('argument search must be type of string');
    // });
    //
    // test('третий параметр с текстом должен быть только строковым типом', () => {
    //   expect(() => endsWith(true, 'f')).toThrow('argument text must be type of string');
    //   expect(() => endsWith(5, '5')).toThrow('argument text must be type of string');
    // });
  });
});
