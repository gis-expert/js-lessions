import { describe, test, expect } from 'bun:test';
import { padStart, padEnd, pad } from './pad.js';

describe('pad Tests', () => {
  describe('padStartTests', () => {
    test('увеличить до необходимой длины', () => {
      expect(padStart('he', 4)).toBe('  he');
      expect(padStart('heh', 6)).toBe('   heh');
      expect(padStart('right align', 50)).toBe(' '.repeat(39) + 'right align');
    });
    //
    // test('если длина совпадает, то вернется то же значение', () => {
    //   expect(padStart('hehe', 4)).toBe('hehe');
    // });
    //
    // test('если макс. длина меньше, то вернется то же значение', () => {
    //   expect(padStart('hehe', 0)).toBe('hehe');
    //   expect(padStart('hehe', 3)).toBe('hehe');
    //   expect(padStart('hehe', -7)).toBe('hehe');
    // });
    //
    // test('если макс. длина отсутствует, то вернется то же значение', () => {
    //   expect(padStart('hehe')).toBe('hehe');
    //   expect(padStart('hehe', null)).toBe('hehe');
    // });
    //
    // test('несоответствие типа второго параметра (строка), то вернется то же значение', () => {
    //   expect(() => padStart('hehe', 's')).toThrow('invalid type of maxLength');
    //   expect(() => padStart('hehe', true)).toThrow('invalid type of maxLength');
    // });
    //
    // test('другая строка заполнения', () => {
    //   expect(padStart('he', 4, '*')).toBe('**he');
    // });
    //
    // test('случай с длинной строкой заполнения', () => {
    //   expect(padStart('he', 6, 'Abcd')).toBe('Abcdhe');
    // });
    //
    // test('строка заполнения не кратен вставке (неполная)', () => {
    //   expect(padStart('he', 5, 'Abcd')).toBe('Abche');
    // });
    //
    // test('строка заполнения не кратен вставке (полная + неполная)', () => {
    //   expect(padStart('he', 8, 'Abcd')).toBe('AbcdAbhe');
    // });
    //
    // test('строка заполнения не строковая, приводит к приведению типа', () => {
    //   expect(() => padStart('he', 8, true)).toThrow('argument fillString must be type of string');
    // });
    //
    // test('проверка типов первого аргумента', () => {
    //   expect(() => padStart()).toThrow('argument text must be type of string');
    //   expect(() => padStart(true)).toThrow('argument text must be type of string');
    // });
  });

  describe('padEndTests', () => {
    // test('увеличить до необходимой длины', () => {
    //   expect(padEnd('he', 4)).toBe('he  ');
    //   expect(padEnd('heh', 6)).toBe('heh   ');
    //   expect(padEnd('left align', 50)).toBe('left align' + ' '.repeat(40));
    // });
    //
    // test('если длина совпадает, то вернется то же значение', () => {
    //   expect(padEnd('hehe', 4)).toBe('hehe');
    // });
    //
    // test('если макс. длина меньше, то вернется то же значение', () => {
    //   expect(padEnd('hehe', 0)).toBe('hehe');
    //   expect(padEnd('hehe', 3)).toBe('hehe');
    //   expect(padEnd('hehe', -7)).toBe('hehe');
    // });
    //
    // test('если макс. длина отсутствует, то вернется то же значение', () => {
    //   expect(padEnd('hehe')).toBe('hehe');
    //   expect(padEnd('hehe', null)).toBe('hehe');
    // });
    //
    // test('несоответствие типа второго параметра (строка), то вернется то же значение', () => {
    //   expect(() => padEnd('hehe', 's')).toThrow('invalid type of maxLength');
    //   expect(() => padEnd('hehe', true)).toThrow('invalid type of maxLength');
    // });
    //
    // test('другая строка заполнения', () => {
    //   expect(padEnd('he', 4, '*')).toBe('he**');
    // });
    //
    // test('случай с длинной строкой заполнения', () => {
    //   expect(padEnd('he', 6, 'Abcd')).toBe('heAbcd');
    // });
    //
    // test('строка заполнения не кратен вставке (неполная)', () => {
    //   expect(padEnd('he', 5, 'Abcd')).toBe('heAbc');
    // });
    //
    // test('строка заполнения не кратен вставке (полная + неполная)', () => {
    //   expect(padEnd('he', 8, 'Abcd')).toBe('heAbcdAb');
    // });
    //
    // test('строка заполнения не строковая, приводит к приведению типа', () => {
    //   expect(() => padEnd('he', 8, true)).toThrow('argument fillString must be type of string');
    // });
    //
    // test('проверка типов первого аргумента', () => {
    //   expect(() => padEnd()).toThrow('argument text must be type of string');
    //   expect(() => padEnd(true)).toThrow('argument text must be type of string');
    // });
  });

  describe('padTests', () => {
    // test('увеличить до необходимой длины', () => {
    //   expect(pad('he', 4)).toBe(' he ');
    //   expect(pad('he', 5)).toBe('  he ');
    //   expect(pad('he', 6)).toBe('  he  ');
    //   expect(pad('center align', 50)).toBe(' '.repeat(19) + 'center align' + ' '.repeat(19));
    // });
    //
    // test('если длина совпадает, то вернется то же значение', () => {
    //   expect(pad('hehe', 4)).toBe('hehe');
    // });
    //
    // test('если макс. длина меньше, то вернется то же значение', () => {
    //   expect(pad('hehe', 3)).toBe('hehe');
    //   expect(pad('hehe', 0)).toBe('hehe');
    //   expect(pad('hehe', -7)).toBe('hehe');
    // });
    //
    // test('если макс. длина отсутствует, то вернется то же значение', () => {
    //   expect(pad('hehe')).toBe('hehe');
    // });
    //
    // test('другая строка заполнения', () => {
    //   expect(pad('he', 4, '*')).toBe('*he*');
    //   expect(pad('he', 5, '*')).toBe('**he*');
    //   expect(pad('he', 6, '*')).toBe('**he**');
    // });
    //
    // test('случай с длинной строкой заполнения', () => {
    //   expect(pad(' hi my friend ', 26, '+-')).toBe('+-+-+- hi my friend +-+-+-');
    //   expect(pad(' he ', 8, 'Abcd')).toBe('Ab he Ab');
    //   expect(pad(' he ', 10, 'Abcd')).toBe('Abc he Abc');
    // });
    //
    // test('строка заполнения не кратен вставке (неполная)', () => {
    //   expect(pad(' hi my friend ', 25, '+-')).toBe('+-+-+- hi my friend +-+-+');
    //   expect(pad(' hi my friend ', 24, '+-')).toBe('+-+-+ hi my friend +-+-+');
    //   expect(pad(' hi my friend ', 23, '+-')).toBe('+-+-+ hi my friend +-+-');
    //   expect(pad(' he ', 9, 'Abcd')).toBe('Abc he Ab');
    // });
    //
    // test('третий параметр должен быть только строкой', () => {
    //   expect(() => pad('hehe', 6, 2)).toThrow('argument fillString must be type of string');
    //   expect(() => pad('hehe', 6, true)).toThrow('argument fillString must be type of string');
    // });
    //
    // test('второй параметр должен быть только числом', () => {
    //   expect(() => pad('hehe', '6')).toThrow('invalid type of maxLength');
    //   expect(() => pad('hehe', true)).toThrow('invalid type of maxLength');
    // });
    //
    // test('первый параметр должен быть только строкой', () => {
    //   expect(() => pad()).toThrow('argument text must be type of string');
    //   expect(() => pad(true)).toThrow('argument text must be type of string');
    // });
  });
});
