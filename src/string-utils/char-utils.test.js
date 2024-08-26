import { describe, test, expect } from 'bun:test';
import { fromDigit, isDigit, isLower, isUpper, toDigit, toLower, toUpper } from './char-utils.js';
import { DIGIT_FINISH, DIGIT_START, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from './common.js';

describe('charUtilsTests', () => {
  describe('isLowerTests', () => {
    describe('isEngLowerTests', () => {
      test('символ является строчной латиницей', () => {
        expect(isLower('a')).toBe(true);
        expect(isLower('b')).toBe(true);
        expect(isLower('n')).toBe(true);
        expect(isLower('y')).toBe(true);
        expect(isLower('z')).toBe(true);
        expect(isLower(String.fromCharCode(ENG_LOWER_START))).toBe(true);
        expect(isLower(String.fromCharCode(ENG_LOWER_FINISH))).toBe(true);
      });

      test('символ является строчной кириллицей', () => {
        expect(isLower('а')).toBe(true);
        expect(isLower('б')).toBe(true);
        expect(isLower('р')).toBe(true);
        expect(isLower('ю')).toBe(true);
        expect(isLower('я')).toBe(true);
        expect(isLower(String.fromCharCode(RUS_LOWER_START))).toBe(true);
        expect(isLower(String.fromCharCode(RUS_LOWER_FINISH))).toBe(true);
      });

      test('символ не является строчной латиницей', () => {
        expect(isLower(' ')).toBe(false);
        expect(isLower('/')).toBe(false);
        expect(isLower('\n')).toBe(false);
        expect(isLower('.')).toBe(false);
        expect(isLower('A')).toBe(false);
        expect(isLower('Z')).toBe(false);
        expect(isLower('1')).toBe(false);
        expect(isLower('А')).toBe(false);
        expect(isLower('Я')).toBe(false);
        expect(isLower(String.fromCharCode(RUS_LOWER_START - 1))).toBe(false);
        expect(isLower(String.fromCharCode(RUS_LOWER_FINISH + 1))).toBe(false);
        expect(isLower(String.fromCharCode(ENG_LOWER_START - 1))).toBe(false);
        expect(isLower(String.fromCharCode(ENG_LOWER_FINISH + 1))).toBe(false);
      });

      test('строка должна быть только односимвольной', () => {
        expect(() => isLower('aa')).toThrow('char must be only one symbol char');
        expect(() => isLower('abc')).toThrow('char must be only one symbol char');
      });

      test('принимаются только строки, и параметр обязателен', () => {
        expect(() => isLower()).toThrow('parameter is required and must be string type');
        expect(() => isLower(1)).toThrow('parameter is required and must be string type');
        expect(() => isLower(true)).toThrow('parameter is required and must be string type');
      });
    });
  });

  describe('isUpperTests', () => {
    describe('isEngUpperTests', () => {
      test('символ является прописной латиницей', () => {
        expect(isUpper('A')).toBe(true);
        expect(isUpper('B')).toBe(true);
        expect(isUpper('N')).toBe(true);
        expect(isUpper('Y')).toBe(true);
        expect(isUpper('Z')).toBe(true);
        expect(isUpper(String.fromCharCode(ENG_UPPER_START))).toBe(true);
        expect(isUpper(String.fromCharCode(ENG_UPPER_FINISH))).toBe(true);
      });

      test('символ является прописной кириллицей', () => {
        expect(isUpper('А')).toBe(true);
        expect(isUpper('Б')).toBe(true);
        expect(isUpper('Р')).toBe(true);
        expect(isUpper('Ю')).toBe(true);
        expect(isUpper('Я')).toBe(true);
        expect(isUpper(String.fromCharCode(RUS_UPPER_START))).toBe(true);
        expect(isUpper(String.fromCharCode(RUS_UPPER_FINISH))).toBe(true);
      });

      test('символ не является прописной латиницей', () => {
        expect(isUpper(' ')).toBe(false);
        expect(isUpper('/')).toBe(false);
        expect(isUpper('\n')).toBe(false);
        expect(isUpper('.')).toBe(false);
        expect(isUpper('a')).toBe(false);
        expect(isUpper('z')).toBe(false);
        expect(isUpper('1')).toBe(false);
        expect(isUpper('а')).toBe(false);
        expect(isUpper('я')).toBe(false);
        expect(isUpper(String.fromCharCode(RUS_UPPER_START - 1))).toBe(false);
        expect(isUpper(String.fromCharCode(RUS_UPPER_FINISH + 1))).toBe(false);
        expect(isUpper(String.fromCharCode(ENG_UPPER_START - 1))).toBe(false);
        expect(isUpper(String.fromCharCode(ENG_UPPER_FINISH + 1))).toBe(false);
      });

      test('строка должна быть только односимвольной', () => {
        expect(() => isUpper('AA')).toThrow('char must be only one symbol char');
        expect(() => isUpper('ABC')).toThrow('char must be only one symbol char');
      });

      test('принимаются только строки, и параметр обязателен', () => {
        expect(() => isUpper()).toThrow('parameter is required and must be string type');
        expect(() => isUpper(1)).toThrow('parameter is required and must be string type');
        expect(() => isUpper(true)).toThrow('parameter is required and must be string type');
      });
    });
  });

  describe('toLowerUpperTests', () => {
    describe('toLowerTests', () => {
      test('переводим латинские символы в нижний регистр', () => {
        expect(toLower('A')).toBe('a');
        expect(toLower('B')).toBe('b');
        expect(toLower('H')).toBe('h');
        expect(toLower('Y')).toBe('y');
        expect(toLower('Z')).toBe('z');
        expect(toLower(String.fromCharCode(ENG_UPPER_START))).toBe('a');
        expect(toLower(String.fromCharCode(ENG_UPPER_FINISH))).toBe('z');
      });

      test('переводим символы кириллицы в нижний регистр', () => {
        expect(toLower('А')).toBe('а');
        expect(toLower('Б')).toBe('б');
        expect(toLower('Р')).toBe('р');
        expect(toLower('Ю')).toBe('ю');
        expect(toLower('Я')).toBe('я');
        expect(toLower(String.fromCharCode(RUS_UPPER_START))).toBe('а');
        expect(toLower(String.fromCharCode(RUS_UPPER_FINISH))).toBe('я');
      });

      test('символ не является прописной', () => {
        expect(toLower(' ')).toBe(' ');
        expect(toLower('/')).toBe('/');
        expect(toLower('\n')).toBe('\n');
        expect(toLower('.')).toBe('.');
        expect(toLower('а')).toBe('а');
        expect(toLower('я')).toBe('я');
        expect(toLower('1')).toBe('1');
        expect(toLower('a')).toBe('a');
        expect(toLower('z')).toBe('z');
        expect(toLower(String.fromCharCode(ENG_LOWER_START))).toBe('a');
        expect(toLower(String.fromCharCode(ENG_LOWER_FINISH))).toBe('z');
        expect(toLower(String.fromCharCode(RUS_LOWER_START))).toBe('а');
        expect(toLower(String.fromCharCode(RUS_LOWER_FINISH))).toBe('я');
      });

      test('строка должна быть только односимвольной', () => {
        expect(() => toLower('FF')).toThrow('char must be only one symbol char');
        expect(() => toLower('АБВ')).toThrow('char must be only one symbol char');
      });

      test('принимаются только строки, и параметр обязателен', () => {
        expect(() => toLower()).toThrow('parameter is required and must be string type');
        expect(() => toLower(1)).toThrow('parameter is required and must be string type');
        expect(() => toLower(true)).toThrow('parameter is required and must be string type');
      });
    });

    describe('toUpperTests', () => {
      test('переводим латинские символы в верхний регистр', () => {
        expect(toUpper('a')).toBe('A');
        expect(toUpper('b')).toBe('B');
        expect(toUpper('h')).toBe('H');
        expect(toUpper('y')).toBe('Y');
        expect(toUpper('z')).toBe('Z');
        expect(toUpper(String.fromCharCode(ENG_LOWER_START))).toBe('A');
        expect(toUpper(String.fromCharCode(ENG_LOWER_FINISH))).toBe('Z');
      });

      test('переводим символы кириллицы в верхний регистр', () => {
        expect(toUpper('а')).toBe('А');
        expect(toUpper('б')).toBe('Б');
        expect(toUpper('р')).toBe('Р');
        expect(toUpper('ю')).toBe('Ю');
        expect(toUpper('я')).toBe('Я');
        expect(toUpper(String.fromCharCode(RUS_LOWER_START))).toBe('А');
        expect(toUpper(String.fromCharCode(RUS_LOWER_FINISH))).toBe('Я');
      });

      test('символ не является строчной', () => {
        expect(toUpper(' ')).toBe(' ');
        expect(toUpper('/')).toBe('/');
        expect(toUpper('\n')).toBe('\n');
        expect(toUpper('.')).toBe('.');
        expect(toUpper('А')).toBe('А');
        expect(toUpper('Я')).toBe('Я');
        expect(toUpper('1')).toBe('1');
        expect(toUpper('A')).toBe('A');
        expect(toUpper('Z')).toBe('Z');
        expect(toUpper(String.fromCharCode(ENG_UPPER_START))).toBe('A');
        expect(toUpper(String.fromCharCode(ENG_UPPER_FINISH))).toBe('Z');
        expect(toUpper(String.fromCharCode(RUS_UPPER_START))).toBe('А');
        expect(toUpper(String.fromCharCode(RUS_UPPER_FINISH))).toBe('Я');
      });

      test('строка должна быть только односимвольной', () => {
        expect(() => toUpper('ff')).toThrow('char must be only one symbol char');
        expect(() => toUpper('абв')).toThrow('char must be only one symbol char');
      });

      test('принимаются только строки, и параметр обязателен', () => {
        expect(() => toUpper()).toThrow('parameter is required and must be string type');
        expect(() => toUpper(1)).toThrow('parameter is required and must be string type');
        expect(() => toUpper(true)).toThrow('parameter is required and must be string type');
      });
    });
  });

  describe('isDigitTests', () => {
    test('символ является числом', () => {
      for (let i = DIGIT_START; i <= DIGIT_FINISH; i++) {
        const char = String.fromCharCode(i);
        expect(isDigit(char)).toBe(true);
      }
    });

    test('символ не является числом', () => {
      expect(isDigit(String.fromCharCode(DIGIT_START - 1))).toBe(false);
      expect(isDigit(String.fromCharCode(DIGIT_FINISH + 1))).toBe(false);
      expect(isDigit(' ')).toBe(false);
      expect(isDigit('/')).toBe(false);
      expect(isDigit('\n')).toBe(false);
      expect(isDigit('.')).toBe(false);
      expect(isDigit('А')).toBe(false);
      expect(isDigit('я')).toBe(false);
      expect(isDigit('A')).toBe(false);
      expect(isDigit('z')).toBe(false);
      expect(isDigit(String.fromCharCode(ENG_UPPER_START))).toBe(false);
      expect(isDigit(String.fromCharCode(ENG_LOWER_FINISH))).toBe(false);
      expect(isDigit(String.fromCharCode(RUS_LOWER_START))).toBe(false);
      expect(isDigit(String.fromCharCode(RUS_UPPER_FINISH))).toBe(false);
    });

    test('строка должна быть только односимвольной', () => {
      expect(() => isDigit('ff')).toThrow('char must be only one symbol char');
      expect(() => isDigit('абв')).toThrow('char must be only one symbol char');
    });

    test('принимаются только строки, и параметр обязателен', () => {
      expect(() => isDigit()).toThrow('parameter is required and must be string type');
      expect(() => isDigit(1)).toThrow('parameter is required and must be string type');
      expect(() => isDigit(true)).toThrow('parameter is required and must be string type');
    });
  });

  describe('toDigitTests', () => {
    test('символы корректно переводятся в цифры', () => {
      for (let i = 0; i + DIGIT_START < DIGIT_FINISH; i++) {
        const char = String.fromCharCode(i + DIGIT_START);
        expect(toDigit(char)).toBe(i);
      }
    });

    test('символ не является числом', () => {
      const errMsg = 'invalid char';
      expect(() => toDigit(String.fromCharCode(DIGIT_START - 1))).toThrow(errMsg);
      expect(() => toDigit(String.fromCharCode(DIGIT_FINISH + 1))).toThrow(errMsg);
      expect(() => toDigit(' ')).toThrow(errMsg);
      expect(() => toDigit('/')).toThrow(errMsg);
      expect(() => toDigit('\n')).toThrow(errMsg);
      expect(() => toDigit('.')).toThrow(errMsg);
      expect(() => toDigit('А')).toThrow(errMsg);
      expect(() => toDigit('я')).toThrow(errMsg);
      expect(() => toDigit('A')).toThrow(errMsg);
      expect(() => toDigit('z')).toThrow(errMsg);
      expect(() => toDigit(String.fromCharCode(ENG_UPPER_START))).toThrow(errMsg);
      expect(() => toDigit(String.fromCharCode(ENG_LOWER_FINISH))).toThrow(errMsg);
      expect(() => toDigit(String.fromCharCode(RUS_LOWER_START))).toThrow(errMsg);
      expect(() => toDigit(String.fromCharCode(RUS_UPPER_FINISH))).toThrow(errMsg);
    });

    test('строка должна быть только односимвольной', () => {
      expect(() => isDigit('12')).toThrow('char must be only one symbol char');
      expect(() => isDigit('01')).toThrow('char must be only one symbol char');
    });

    test('принимаются только строки, и параметр обязателен', () => {
      expect(() => isDigit()).toThrow('parameter is required and must be string type');
      expect(() => isDigit(1)).toThrow('parameter is required and must be string type');
      expect(() => isDigit(true)).toThrow('parameter is required and must be string type');
    });
  });

  describe('fromDigitTests', () => {
    test('цифры корректно переводятся в символы', () => {
      for (let i = 0; i < 9; i++) {
        const char = String.fromCharCode(i + DIGIT_START);
        expect(fromDigit(i)).toBe(char);
      }
    });

    test('отрицательные цифры вызывают исключение', () => {
      expect(() => fromDigit(-1)).toThrow('invalid digit');
      expect(() => fromDigit(-5)).toThrow('invalid digit');
    });

    test('строка должна быть только односимвольной', () => {
      expect(() => fromDigit(12)).toThrow('invalid digit');
      expect(() => fromDigit(256)).toThrow('invalid digit');
    });

    test('передается нечисловой тип', () => {
      const errMsg = 'parameter is required and must be number type';
      expect(() => fromDigit()).toThrow('parameter is required and must be number type');
      expect(() => fromDigit('1')).toThrow(errMsg);
      expect(() => fromDigit(' ')).toThrow(errMsg);
      expect(() => fromDigit(String.fromCharCode(DIGIT_START))).toThrow(errMsg);
      expect(() => fromDigit(true)).toThrow(errMsg);
    });
  });
});
