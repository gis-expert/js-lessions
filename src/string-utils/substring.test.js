import { describe, test, expect } from 'bun:test';
import { substring } from './substring.js';
import { complexText } from './common.js';

describe('substringTests', () => {
  test('получить два первых символа', () => {
    expect(substring(complexText, 0, 2)).toBe('He');
  });
  
  test('получить с индекса 2 по 5 индекс', () => {
    expect(substring(complexText, 2, 5)).toBe('llo');
  });
  
  test('получить один символ', () => {
    expect(substring(complexText, 1, 2)).toBe('e');
  });
  
  test('получить строку включая последний символ, передаем последний индекс + 1', () => {
    expect(substring('hello', 1, 5)).toBe('ello');
  });
  
  test('последний индекс + 2, выкидывает исключение', () => {
    expect(() => substring('hello', 1, 6)).toThrow('invalid end index');
  });
  
  test('если передать одинаковый индекс, то возвращается пустая строка', () => {
    expect(substring(complexText, 5, 5)).toBe('');
  });
  
  test('если не передавать второй индекс, то возвращается до конца текста', () => {
    expect(substring(complexText, 20)).toBe('terminator');
  });
  
  test('если не передавать индексы, то возвращается копия строки', () => {
    expect(substring(complexText)).toBe(complexText);
  });
  
  test('индексы должны быть числовыми типами', () => {
    expect(() => substring(complexText, true, 5)).toThrow('invalid start index');
    expect(() => substring(complexText, '1', 5)).toThrow('invalid start index');
    expect(() => substring(complexText, 0, true)).toThrow('invalid end index');
    expect(() => substring(complexText, 5, '11')).toThrow('invalid end index');
  });
  
  test('если второй индекс больше первого, то выкидывается исключение', () => {
    expect(() => substring(complexText, 5, 2)).toThrow('invalid start and end index');
  });
  
  test('если первый индекс отрицательный, то он равен 0', () => {
    expect(() => substring(complexText, -5, 2)).toThrow('invalid start index');
    expect(() => substring(complexText, 2, -7)).toThrow('invalid end index');
    expect(() => substring(complexText, -5, -2)).toThrow('invalid start index');
  });
  
  test('вызов с дробным индексом приводит к исключению', () => {
    expect(() => substring(complexText, 1.7, 3)).toThrow('invalid start index');
    expect(() => substring(complexText, 1, 3.1415)).toThrow('invalid end index');
  });
  
  test('если тип первого аргумента не строка, то будет исключение', () => {
    expect(() => substring()).toThrow('argument must be type of string');
    expect(() => substring(true, 2)).toThrow('argument must be type of string');
  });
});
