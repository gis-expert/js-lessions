import { describe, test, expect } from 'bun:test';
import { reverse } from './reverse.js';

describe('reverseTests', () => {
  test('возвращается перевернутая копия строки', () => {
    expect(reverse('Hmmm')).toBe('mmmH');
  });
  
  test('возвращается перевернутая версия со спецсимволами', () => {
    expect(reverse('\tHmmm\n')).toBe('\nmmmH\t');
  });
  
  test('возвращается перевернутая копия строки и пробелы с точкой не удаляются', () => {
    expect(reverse('  Hmmm.')).toBe('.mmmH  ');
  });
  
  test('пустая строка остается пустой', () => {
    expect(reverse('')).toBe('');
  });
  
  test('один символ остается одним символом', () => {
    expect(reverse(' ')).toBe(' ');
  });
  
  test('если не передать первый аргумент, то будет исключение', () => {
    expect(() => reverse()).toThrow('argument must be type of string');
  });
  
  test('если тип первого аргумента не строка, то будет исключение', () => {
    expect(() => reverse(true)).toThrow('argument must be type of string');
    expect(() => reverse(1)).toThrow('argument must be type of string');
    expect(() => reverse([])).toThrow('argument must be type of string');
    expect(() => reverse(null)).toThrow('argument must be type of string');
  });
});
