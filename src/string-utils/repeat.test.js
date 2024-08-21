import { describe, test, expect } from 'bun:test';
import { repeat } from './repeat.js';
import { complexText } from './common.js';

describe('repeatTests', () => {
  test('повторено несколько раз - простой текст', () => {
    expect(repeat('a', 3)).toBe('aaa');
    expect(repeat('abc', 2)).toBe('abcabc');
  });
  
  test('повторено несколько раз - сложный текст', () => {
    expect(repeat(complexText, 3)).toBe(complexText + complexText + complexText);
  });
  
  test('повторено несколько раз - пустой текст', () => {
    expect(repeat('', 3)).toBe('');
    expect(repeat('', 1)).toBe('');
  });
  
  test('повторено один раз - простой текст', () => {
    expect(repeat('a', 1)).toBe('a');
    expect(repeat('abc', 1)).toBe('abc');
  });
  
  test('повторено один раз - сложный текст', () => {
    expect(repeat(complexText, 1)).toBe("Hello world!!! It's terminator");
  });
  
  test('второй параметр не передан, возвращает ту же строку', () => {
    expect(repeat('a')).toBe('a');
    expect(repeat('abc')).toBe('abc');
  });
  
  test('повторено ни один раз - возвращается пустой текст', () => {
    expect(repeat('a', 0)).toBe('');
    expect(repeat(complexText, 0)).toBe('');
    expect(repeat('', 0)).toBe('');
  });
  
  test('количество должно быть только целым и положительным числом', () => {
    expect(() => repeat('abc', 3.85)).toThrow('invalid count');
    expect(() => repeat('abc', 0.25)).toThrow('invalid count');
    expect(() => repeat('abc', -1)).toThrow('invalid count');
  });
  
  test('второй параметр не числовой, вызывается исключение', () => {
    expect(() => repeat('abc', true)).toThrow('invalid count');
    expect(() => repeat('abc', false)).toThrow('invalid count');
    expect(() => repeat('abc', '2')).toThrow('invalid count');
    expect(() => repeat('abc', '3.1415 - pi')).toThrow('invalid count');
    expect(() => repeat('abc', [2, 5, 8])).toThrow('invalid count');
  });
  
  test('текст не строкового типа вызывает исключение', () => {
    expect(() => repeat()).toThrow('argument must be type of string');
    expect(() => repeat(1)).toThrow('argument must be type of string');
    expect(() => repeat(true)).toThrow('argument must be type of string');
  });
});
