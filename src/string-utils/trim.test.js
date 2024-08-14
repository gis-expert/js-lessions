import { describe, test, expect } from 'bun:test';
import { trim, trimStart, trimEnd } from './trim.js';

describe('trimLeftTests', () => {
  test('удалить пробелы спереди', () => {
    expect(trimStart('  Hi')).toBe('Hi');
  });
  //
  // test('удалить перевод строки и пробел спереди', () => {
  //   expect(trimStart('\n Hi')).toBe('Hi');
  // });
  //
  // test('удалить табуляцию и пробел спереди', () => {
  //   expect(trimStart('\t Hi')).toBe('Hi');
  // });
  //
  // test('удалить верт. табуляцию и пробел спереди', () => {
  //   expect(trimStart('\v Hi')).toBe('Hi');
  // });
  //
  // test('символы сзади не трогаются', () => {
  //   expect(trimStart('  Hi ')).toBe('Hi ');
  // });
  //
  // test('перевод строки сзади не трогаются', () => {
  //   expect(trimStart('  Hi \n')).toBe('Hi \n');
  // });
  //
  // test('табуляция сзади не трогаются', () => {
  //   expect(trimStart('  Hi \t')).toBe('Hi \t');
  // });
  //
  // test('верт. табуляция сзади не трогаются', () => {
  //   expect(trimStart('  Hi \v')).toBe('Hi \v');
  // });
  //
  // test('без символов к удалению, возвращается копия строки', () => {
  //   expect(trimStart('Hi')).toBe('Hi');
  // });
  //
  // test('пробелы после символа не трогаются', () => {
  //   expect(trimStart(', Hi')).toBe(', Hi');
  // });
  //
  // test('строка полностью из удаляемых символов', () => {
  //   expect(trimStart(' \v \n \t\t')).toBe('');
  // });
  //
  // test('передан второй параметр, первый аргумент обрезается', () => {
  //   expect(trimStart('hello world', 'eohd')).toBe('llo world');
  // });
  //
  // test('передан второй параметр, первый аргумент не обрезается', () => {
  //   expect(trimStart('hello world', 'woe')).toBe('hello world');
  // });
  //
  // test('второй параметр должен быть только строковым', () => {
  //   expect(() => trimStart('hello', true)).toThrow('argument trimSymbols must be type of string');
  // });
  //
  // test('первый параметр должен быть только строковым', () => {
  //   expect(() => trimStart()).toThrow('argument text must be type of string');
  //   expect(() => trimStart(true)).toThrow('argument text must be type of string');
  // });
});

describe('trimRightTests', () => {
  // test('удалить пробелы сзади', () => {
  //   expect(trimEnd('Hi  ')).toBe('Hi');
  // });
  //
  // test('удалить перевод строки и пробел сзади', () => {
  //   expect(trimEnd('Hi\n ')).toBe('Hi');
  // });
  //
  // test('удалить табуляцию и пробел сзади', () => {
  //   expect(trimEnd('Hi\t ')).toBe('Hi');
  // });
  //
  // test('удалить верт. табуляцию и пробел сзади', () => {
  //   expect(trimEnd('Hi\v ')).toBe('Hi');
  // });
  //
  // test('символы спереди не трогаются', () => {
  //   expect(trimEnd('  Hi ')).toBe('  Hi');
  // });
  //
  // test('перевод строки спереди не трогаются', () => {
  //   expect(trimEnd(' \nHi ')).toBe(' \nHi');
  // });
  //
  // test('табуляция спереди не трогаются', () => {
  //   expect(trimEnd(' \tHi ')).toBe(' \tHi');
  // });
  //
  // test('верт. табуляция спереди не трогаются', () => {
  //   expect(trimEnd(' \vHi ')).toBe(' \vHi');
  // });
  //
  // test('без символов к удалению, возвращается копия строки', () => {
  //   expect(trimEnd('Hi')).toBe('Hi');
  // });
  //
  // test('пробелы после символа не трогаются', () => {
  //   expect(trimEnd('. Hi ,')).toBe('. Hi ,');
  // });
  //
  // test('строка полностью из удаляемых символов', () => {
  //   expect(trimEnd(' \v \n \t\t')).toBe('');
  // });
  //
  // test('передан второй параметр, первый аргумент обрезается', () => {
  //   expect(trimEnd('hello world', 'eohd')).toBe('hello worl');
  // });
  //
  // test('передан второй параметр, первый аргумент не обрезается', () => {
  //   expect(trimEnd('hello world', 'woe')).toBe('hello world');
  // });
  //
  // test('второй параметр должен быть только строковым', () => {
  //   expect(() => trimEnd('hello', true)).toThrow('argument trimSymbols must be type of string');
  // });
  //
  // test('первый параметр должен быть только строковым', () => {
  //   expect(() => trimEnd()).toThrow('argument text must be type of string');
  //   expect(() => trimEnd(true)).toThrow('argument text must be type of string');
  // });
});

describe('trimTests', () => {
  // test('удалить пробелы спереди и сзади', () => {
  //   expect(trim('  Hi ')).toBe('Hi');
  // });
  //
  // test('удалить перевод строки и пробелы спереди и сзади', () => {
  //   expect(trim(' \nHi ')).toBe('Hi');
  // });
  //
  // test('удалить табуляцию и пробелы спереди и сзади', () => {
  //   expect(trim(' \tHi ')).toBe('Hi');
  // });
  //
  // test('удалить верт. табуляцию и пробелы спереди и сзади', () => {
  //   expect(trim(' \vHi ')).toBe('Hi');
  // });
  //
  // test('без символов к удалению, возвращается копия строки', () => {
  //   expect(trim('Hi')).toBe('Hi');
  // });
  //
  // test('пробелы внутри строки не трогаются', () => {
  //   expect(trim(',  Hi .')).toBe(',  Hi .');
  // });
  //
  // test('строка полностью из удаляемых символов', () => {
  //   expect(trim(' \v \n \t\t')).toBe('');
  // });
  //
  // test('второй параметр должен быть только строковым', () => {
  //   expect(() => trim('hello', true)).toThrow('argument trimSymbols must be type of string');
  // });
  //
  // test('первый параметр должен быть только строковым', () => {
  //   expect(() => trim()).toThrow('argument text must be type of string');
  //   expect(() => trim(true)).toThrow('argument text must be type of string');
  // });
});
