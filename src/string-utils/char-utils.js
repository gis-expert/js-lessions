import { DIGIT_FINISH, DIGIT_START, ENG_CHAR_SHIFT, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_CHAR_SHIFT, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from "./common.js";
import { len } from './len.js';

function parameterExceptions(char) {
    if (typeof char !== 'string') {
        throw Error('parameter is required and must be string type');
    }
    if (len(char) > 1) {
        throw Error('char must be only one symbol char');
    }
}
/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {
    parameterExceptions(char);
    for (let a = ENG_LOWER_START; a <= ENG_LOWER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return true;
        }
    }
    for (let a = RUS_LOWER_START; a <= RUS_LOWER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return true;
        }
    }
    return false;
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
    parameterExceptions(char);
    for (let a = ENG_UPPER_START; a <= ENG_UPPER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return true;
        }
    }
    for (let a = RUS_UPPER_START; a <= RUS_UPPER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return true;
        }
    }
    return false;
}

/** переводит в символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
    parameterExceptions(char);
    for (let a = ENG_UPPER_START; a <= ENG_UPPER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return String.fromCharCode(a - ENG_UPPER_START + ENG_LOWER_START);
        }
    }
    for (let a = RUS_UPPER_START; a <= RUS_UPPER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return String.fromCharCode(a - RUS_UPPER_START + RUS_LOWER_START);
        }
    }
    return char;
}

/** переводит в символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение. 'a' --> 'A'*/
export function toUpper(char) {
    parameterExceptions(char);
    for (let a = ENG_LOWER_START; a <= ENG_LOWER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return String.fromCharCode(a - ENG_LOWER_START + ENG_UPPER_START);
        }
    }
    for (let a = RUS_LOWER_START; a <= RUS_LOWER_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return String.fromCharCode(a - RUS_LOWER_START + RUS_UPPER_START);
        }
    }
    return char;
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
    parameterExceptions(char);
    for (let a = DIGIT_START; a <= DIGIT_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return true;
        }
    }
    return false;
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
    parameterExceptions(char);
    for (let a = DIGIT_START; a <= DIGIT_FINISH; a++) {
        if (char.charCodeAt() === a) {
            return a - DIGIT_START; 
        }
    } 
    throw Error("invalid char");
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
    if (digit < 0) {
        throw Error("invalid digit");
    }
    if (typeof digit !== 'number') {
        throw Error('parameter is required and must be number type');
    }
    for (let a = DIGIT_START; a <= DIGIT_FINISH; a++) {
        if (digit === a - DIGIT_START) {
            return String.fromCharCode(a); 
        }
    } 
    throw Error("invalid digit");
}
