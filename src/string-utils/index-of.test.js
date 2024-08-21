import { describe, test, expect } from 'bun:test';
import { indexOf } from './index-of.js';
import { complexText } from './common.js';
import { len } from './len.js';

describe('indexOfTests', () => {
  test('найти текст с середины текста', () => {
    expect(indexOf(complexText, 'terminator')).toBe(20);
  });
  
  test('найти текст с начала текста', () => {
    expect(indexOf(complexText, 'Hello')).toBe(0);
  });
  
  test('найти текст с начала текста с одиночным символом', () => {
    expect(indexOf(complexText, 'H')).toBe(0);
  });
  
  test('текст не найден', () => {
    expect(indexOf(complexText, 'Help')).toBe(-1);
  });
  
  test('регистр имеет значение', () => {
    expect(indexOf(complexText, 'hello')).toBe(-1);
  });
  
  test('слово есть, но длина больше', () => {
    expect(indexOf(complexText, 'terminator.')).toBe(-1);
  });
  
  test('поиск первого совпадения', () => {
    expect(indexOf(complexText, 't')).toBe(16);
  });
  
  test('поиск первого совпадения с тем же индексом', () => {
    expect(indexOf(complexText, 't', 16)).toBe(16);
  });
  
  test('поиск второго совпадения', () => {
    expect(indexOf(complexText, 't', 17)).toBe(20);
  });
  
  test('поиск третьего совпадения', () => {
    expect(indexOf(complexText, 't', 21)).toBe(27);
  });
  
  test('после 27 символа нет символа t', () => {
    expect(indexOf(complexText, 't', 28)).toBe(-1);
  });
  
  test('искомый текст встречается после начального индекса и находится нормально', () => {
    expect(indexOf('I am: he hello brother. Answer: hello!', 'hello')).toBe(9);
  });
  
  test('второй параметр как пустая строка возвращает -1', () => {
    expect(indexOf(complexText, '')).toBe(-1);
    expect(indexOf(complexText, '', 5)).toBe(-1);
  });
  
  test('пустой первый параметр возвращает -1', () => {
    expect(indexOf('', 'q')).toBe(-1);
  });
  
  test('отрицательный начальный индекс приводит к исключению', () => {
    expect(() => indexOf(complexText, 't', -17)).toThrow('invalid index');
  });
  
  test('начальный индекс больше длины приводит к исключению', () => {
    expect(() => indexOf(complexText, 't', len(complexText) + 1)).toThrow('invalid index');
  });
  
  test('дробные числа в индексе приводят к исключению', () => {
    expect(() => indexOf(complexText, 't', 2.2)).toThrow('invalid index');
  });
  
  test('индекс должен быть только числовым типом', () => {
    expect(() => indexOf(complexText, 't', true)).toThrow('invalid index');
    expect(() => indexOf(complexText, 't', '2')).toThrow('invalid index');
  });
  
  test('второй параметр обязателен', () => {
    expect(() => indexOf('trusted true')).toThrow('invalid searchString string');
  });
  
  test('тип второго параметра должен быть string', () => {
    expect(() => indexOf('trusted true', true)).toThrow('invalid searchString string');
    expect(() => indexOf('only 33', 3)).toThrow('invalid searchString string');
  });
  
  test('если тип первого аргумента не строка, то будет исключение', () => {
    expect(() => indexOf()).toThrow('argument must be type of string');
    expect(() => indexOf(true)).toThrow('argument must be type of string');
  });
});
