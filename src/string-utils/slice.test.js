import { describe, it as test, expect } from 'bun:test';
import { complexText } from './common.js';
import { len } from './len.js';
import { slice } from './slice.js';

describe('sliceTests', () => {
  test('получить два первых символа', () => {
    expect(slice(complexText, 0, 2)).toBe('He');
  });
  //
  // test('получить с индекса 2 по 5 индекс', () => {
  //   expect(slice(complexText, 2, 5)).toBe('llo');
  // });
  //
  // test('получить один символ', () => {
  //   expect(slice(complexText, 1, 2)).toBe('e');
  // });
  //
  // test('получить строку, включая последний символ, передаем последний индекс + 1', () => {
  //   expect(slice('hello', 1, 5)).toBe('ello');
  // });
  //
  // test('последний индекс + 2, выбрасывается исключение', () => {
  //   expect(() => slice('hello', 1, 6)).toThrow('invalid end index');
  // });
  //
  // test('если передать одинаковый индекс, то возвращается пустая строка', () => {
  //   expect(slice(complexText, 5, 5)).toBe('');
  // });
  //
  // test('если не передавать второй индекс, то возвращается до конца текста', () => {
  //   expect(slice(complexText, 20)).toBe('terminator');
  // });
  //
  // test('если не передавать индексы, то возвращается копия строки', () => {
  //   expect(slice(complexText)).toBe(complexText);
  // });
  //
  // test('первый индекс равен нулю и рассматривается как положительный', () => {
  //   expect(slice(complexText, 0)).toBe(complexText);
  // });
  //
  // test('отрицательные индексы отсчитываются с конца строки', () => {
  //   expect(slice(complexText, -5, -2)).toBe('nat');
  //   expect(slice(complexText, -10, -2)).toBe('terminat');
  // });
  //
  // test('первый индекс отрицательный, второй не передан', () => {
  //   expect(slice(complexText, -5)).toBe('nator');
  //   expect(slice(complexText, -10)).toBe('terminator');
  // });
  //
  // test('первый индекс равен отрицательной длине, второй пропущен', () => {
  //   expect(slice('hello', -5)).toBe('hello');
  //   expect(slice(complexText, len(complexText) * -1)).toBe(complexText);
  // });
  //
  // test('первый индекс отрицательный, но больше длины', () => {
  //   expect(() => slice('hello', -6)).toThrow('invalid start index');
  // });
  //
  // test('нельзя передавать одновременно отрицательные и положительные индексы', () => {
  //   expect(() => slice('hello', -4, 1)).toThrow('indexes must be only positive or negative');
  //   expect(() => slice('hello', 1, -4)).toThrow('indexes must be only positive or negative');
  //   expect(() => slice('hello', -4, 0)).toThrow('indexes must be only positive or negative');
  //   expect(() => slice('hello', 0, -4)).toThrow('indexes must be only positive or negative');
  // });
  //
  // test('индексы должны быть числовыми типами', () => {
  //   expect(() => slice(complexText, true, 5)).toThrow('invalid start index');
  //   expect(() => slice(complexText, '1', 5)).toThrow('invalid start index');
  //   expect(() => slice(complexText, 0, true)).toThrow('invalid end index');
  //   expect(() => slice(complexText, 5, '11')).toThrow('invalid end index');
  // });
  //
  // test('если второй индекс меньше первого, то выбрасывается исключение', () => {
  //   expect(() => slice(complexText, 5, 2)).toThrow('invalid start and end index');
  //   expect(() => slice(complexText, -2, -5)).toThrow('invalid start and end index');
  // });
  //
  // test('вызов с дробным индексом приводит к исключению', () => {
  //   expect(() => slice(complexText, 1.7, 3)).toThrow('invalid start index');
  //   expect(() => slice(complexText, 1, 3.1415)).toThrow('invalid end index');
  // });
  //
  // test('если тип первого аргумента не строка, то выбрасывается исключение', () => {
  //   expect(() => slice()).toThrow('argument must be type of string');
  //   expect(() => slice(true, 2)).toThrow('argument must be type of string');
  // });
});
