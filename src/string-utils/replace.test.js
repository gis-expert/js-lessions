import { describe, test, expect } from 'bun:test';
import { replace, replaceAll } from './replace.js';
import { complexText } from './common.js';

describe('replaceTests', () => {
  test('поменять вхождение текста', () => {
    expect(replace('abc', 'a', 'b')).toBe('bbc');
    expect(replace('abc', 'b', 'a')).toBe('aac');
    expect(replace('JS is great language', 'JS', 'Ts')).toBe('Ts is great language');
    expect(replace('JS is great language', 'great', 'funny')).toBe('JS is funny language');
    expect(replace(complexText, "It's", "It is not")).toBe('Hello world!!! It is not terminator');
  });

  // test('не найденное вхождение, текст остался', () => {
  //   expect(replace('abc', 'd', 'b')).toBe('abc');
  //   expect(replace('JS is great language', 'greet', 'funny')).toBe('JS is great language');
  //   expect(replace(complexText, "It`s", "It is")).toBe(complexText);
  // });
  //
  // test('меняется только первое вхождение в начале строки', () => {
  //   expect(replace('bbc', 'a', 'b')).toBe('bbc');
  //   expect(replace('he he ho he', 'he', 'uh')).toBe('uh he ho he');
  // });
  //
  // test('меняется только первое вхождение в середине строки', () => {
  //   expect(replace('abb', 'bb', 'um')).toBe('aum');
  //   expect(replace('ha he ho he', 'he', 'uh')).toBe('ha uh ho he');
  // });
  //
  // test('удалить вхождение текста (передав пустую строку)', () => {
  //   expect(replace('abc', 'b', '')).toBe('ac');
  //   expect(replace('Hi is guy, my name is Jon', ' is', '')).toBe('Hi guy, my name is Jon');
  // });
  //
  // test('случай, когда заменяемое слово включает слово поиска', () => {
  //   expect(replace('Happy', 'app', ' app ')).toBe('H app y');
  // });
  //
  // test('третий параметр должен быть только строкового типа', () => {
  //   expect(() => replace('he ha', 'ha')).toThrow('argument target must be type of string');
  //   expect(() => replace('he ha', 'ha', 2)).toThrow('argument target must be type of string');
  //   expect(() => replace('he ha', 'ha', ['hm'])).toThrow('argument target must be type of string');
  // });
  //
  // test('второй параметр должен быть только строкового типа', () => {
  //   expect(() => replace('he ha')).toThrow('argument search must be type of string');
  //   expect(() => replace('he ha', undefined, 'ha')).toThrow('argument search must be type of string');
  //   expect(() => replace('he ha', 2, 'ha')).toThrow('argument search must be type of string');
  // });
  //
  // test('первый параметр должен быть только строкового типа', () => {
  //   expect(() => replace()).toThrow('argument text must be type of string');
  //   expect(() => replace(undefined, 'u', 'a')).toThrow('argument text must be type of string');
  //   expect(() => replace(25, '2', '5')).toThrow('argument text must be type of string');
  //   expect(() => replace(true, 'r', 't')).toThrow('argument text must be type of string');
  // });
});

describe('replaceAllTests', () => {
  // test('поменять одно вхождение текста', () => {
  //   expect(replaceAll('abc', 'a', 'b')).toBe('bbc');
  //   expect(replaceAll('JS is great language', 'JS', 'Ts')).toBe('Ts is great language');
  //   expect(replaceAll('JS is great language', 'great', 'funny')).toBe('JS is funny language');
  //   expect(replaceAll(complexText, "It's", 'It is not')).toBe('Hello world!!! It is not terminator');
  // });
  //
  // test('поменять несколько вхождений текста', () => {
  //   expect(replaceAll('bbc', 'b', 'a')).toBe('aac');
  //   expect(replaceAll('who is who?', 'who', 'WHO')).toBe('WHO is WHO?');
  //   expect(replaceAll(complexText, "It's", 'It is not')).toBe('Hello world!!! It is not terminator');
  // });
  //
  // test('не найденное вхождение, текст остался', () => {
  //   expect(replaceAll('bbc', 'a', 'c')).toBe('bbc');
  //   expect(replaceAll(complexText, "It`s", "It is")).toBe(complexText);
  // });
  //
  // test('меняется все вхождения в начале и конце строки', () => {
  //   expect(replaceAll('cbbc', 'c', 'a')).toBe('abba');
  //   expect(replaceAll('who is who?', 'who', 'WHO')).toBe('WHO is WHO?');
  //   expect(replaceAll('he he ho he', 'he', 'uh')).toBe('uh uh ho uh');
  // });
  //
  // test('меняется все вхождения в середине строки', () => {
  //   expect(replaceAll('1. who is who?', 'who', 'WHO')).toBe('1. WHO is WHO?');
  //   expect(replaceAll('hh he ho he hm', 'he', 'uh')).toBe('hh uh ho uh hm');
  // });
  //
  // test('удалить вхождение текста (передав пустую строку)', () => {
  //   expect(replaceAll('1. who is who?', 'who', '')).toBe('1.  is ?');
  //   expect(replaceAll('1. who is who?', 'who ', '')).toBe('1. is who?');
  //   expect(replaceAll('Hi is gui, my name is Jon', ' is', '')).toBe('Hi gui, my name Jon');
  // });
  //
  // test('случай, когда заменяемое слово включает слово поиска', () => {
  //   expect(replaceAll('Happy', 'app', ' app ')).toBe('H app y');
  // });
  //
  // test('третий параметр должен быть только строкового типа', () => {
  //   expect(() => replaceAll('he ha', 'ha')).toThrow('argument target must be type of string');
  //   expect(() => replaceAll('he ha', 'ha', 2)).toThrow('argument target must be type of string');
  //   expect(() => replaceAll('he ha', 'ha', ['hm'])).toThrow('argument target must be type of string');
  // });
  //
  // test('второй параметр должен быть только строкового типа', () => {
  //   expect(() => replaceAll('he ha')).toThrow('argument search must be type of string');
  //   expect(() => replaceAll('he ha', undefined, 'ha')).toThrow('argument search must be type of string');
  //   expect(() => replaceAll('he ha', 2, 'ha')).toThrow('argument search must be type of string');
  // });
  //
  // test('первый параметр должен быть только строкового типа', () => {
  //   expect(() => replaceAll()).toThrow('argument text must be type of string');
  //   expect(() => replaceAll(undefined, 'u', 'a')).toThrow('argument text must be type of string');
  //   expect(() => replaceAll(25, '2', '5')).toThrow('argument text must be type of string');
  //   expect(() => replaceAll(true, 'r', 't')).toThrow('argument text must be type of string');
  // });
});
