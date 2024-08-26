import { len } from "./len";
import { toUpper, toLower } from "./char-utils";

/** возвращает копию строки text в верхнем регистре */
export function upperCase(text) {
    const textLen = len(text);
    let result = '';
    for (let a = 0; a < textLen; a++) {
        result += toUpper(text[a]);
    }
    return result;
}

/** возвращает копию строки text в верхнем регистре */
export function lowerCase(text) {
    const textLen = len(text);
    let result = '';
    for (let a = 0; a < textLen; a++) {
        result += toLower(text[a]);
    }
    return result;
}
