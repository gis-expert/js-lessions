import { expect, test, describe } from 'bun:test';
import { len } from './len.js';

export const complexText = "Hello world!!! It's terminator";
export const ZERO_CODE_CHAR = String.fromCharCode(0);

describe('lenTests', () => {
  // Тест на пустую строку
  test('пустая строка возвращает 0', () => {
    expect(len('')).toBe(0);
  });

  // Тесты на одиночные символы
  test('одиночные символы возвращают 1', () => {
    expect(len('a')).toBe(1);
    expect(len(ZERO_CODE_CHAR)).toBe(1);
    expect(len('\n')).toBe(1);
  });

  // Тесты на сложные строки
  test('сложные строки возвращают истинную длину', () => {
    expect(len(complexText)).toBe(complexText.length);
  });
  
  // Тест на строку с кириллическими символами
  test('строка с кириллическими символами', () => {
    const testString = 'Это 1 строка с кириллическими символами вместе с символом перевода строки \n';
    expect(len(testString)).toBe(testString.length);
  });
  
  // Тесты на вызовы без передачи аргумента и с неправильными типами аргументов
  test('вызов без передачи аргумента выдает ошибку исполнения', () => {
    const errStr = 'argument must be type of string';
    expect(() => len()).toThrow(errStr);
  });
  
  test('другие типы выдают ошибку исполнения', () => {
    const errStr = 'argument must be type of string';
    expect(() => len(1)).toThrow(errStr);
    expect(() => len(true)).toThrow(errStr);
    expect(() => len([])).toThrow(errStr);
    expect(() => len(null)).toThrow(errStr);
  });
});
