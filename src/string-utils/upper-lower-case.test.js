import { describe, test, expect } from 'bun:test';
import { lowerCase, upperCase } from './upper-lower-case.js';

describe('textCaseTests', () => {
  describe('upperCaseTests', () => {
    test('простой текст', () => {
      expect(upperCase('h')).toBe('H');
      expect(upperCase('hello')).toBe('HELLO');
      expect(upperCase("hi terminator")).toBe("HI TERMINATOR");
    });
    //
    // test('текст со знаками пунктуации', () => {
    //   expect(upperCase("hi, i'm terminator")).toBe("HI, I'M TERMINATOR");
    //   expect(upperCase("+++--= terminator =--+++")).toBe("+++--= TERMINATOR =--+++");
    // });
    //
    // test('текст с цифрами и числами', () => {
    //   expect(upperCase("hi, i'm terminator3")).toBe("HI, I'M TERMINATOR3");
    //   expect(upperCase("Part: 243")).toBe("PART: 243");
    // });
    //
    // test('текст с пробелами, табуляцией и переводом строки', () => {
    //   expect(upperCase("  hi, i'm terminator3")).toBe("  HI, I'M TERMINATOR3");
    //   expect(upperCase("Part: 243\n")).toBe("PART: 243\n");
    //   expect(upperCase("\t to left")).toBe("\t TO LEFT");
    // });
    //
    // test('параметр обязателен и должен быть только строковым', () => {
    //   expect(() => upperCase()).toThrow('argument must be type of string');
    //   expect(() => upperCase(true)).toThrow('argument must be type of string');
    // });
  });

  describe('lowerCaseTests', () => {
    // test('простой текст', () => {
    //   expect(lowerCase('H')).toBe('h');
    //   expect(lowerCase('HELLO')).toBe('hello');
    //   expect(lowerCase("HI TERMINATOR")).toBe("hi terminator");
    // });
    //
    // test('текст со знаками пунктуации', () => {
    //   expect(lowerCase("HI I'M TERMINATOR")).toBe("hi i'm terminator");
    //   expect(lowerCase("+++--= TERMINATOR =--+++")).toBe("+++--= terminator =--+++");
    // });
    //
    // test('текст с цифрами и числами', () => {
    //   expect(lowerCase("HI I'M TERMINATOR3")).toBe("hi i'm terminator3");
    //   expect(lowerCase("PARt: 243")).toBe("part: 243");
    // });
    //
    // test('текст с пробелами, табуляцией и переводом строки', () => {
    //   expect(lowerCase("  HI I'M TERMINATOR3")).toBe("  hi i'm terminator3");
    //   expect(lowerCase("PARt: 243\n")).toBe("part: 243\n");
    //   expect(lowerCase("\t TO LEFT")).toBe("\t to left");
    // });
    //
    // test('параметр обязателен и должен быть только строковым', () => {
    //   expect(() => lowerCase()).toThrow('argument must be type of string');
    //   expect(() => lowerCase(true)).toThrow('argument must be type of string');
    // });
  });
});
