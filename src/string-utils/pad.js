import { len } from "./len";

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = ' ') {
    if (typeof text !== 'string') {
        throw Error('argument text must be type of string');
    }
    const textLen = len(text);
    if (maxLength <= textLen && typeof maxLength !== 'boolean' || maxLength === undefined) {
        return text;
    }
    if (typeof fillString !== 'string') {
        throw Error('argument fillString must be type of string');
    }
    if (typeof maxLength !== 'number') {
        throw Error('invalid type of maxLength');
    }
    const fillStrLen = maxLength - textLen;
    let result = '';
    let b = 0;
    for (let a = 0; a < fillStrLen; a++) {
        if (fillString[b] === undefined) {
            b = 0;
        }
        result += fillString[b];
        b++;
    }
    return result = result + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {
    if (typeof text !== 'string') {
        throw Error('argument text must be type of string');
    }
    const textLen = len(text);
    if (maxLength <= textLen && typeof maxLength !== 'boolean' || maxLength === undefined) {
        return text;
    }
    if (typeof fillString !== 'string') {
        throw Error('argument fillString must be type of string');
    }
    if (typeof maxLength !== 'number') {
        throw Error('invalid type of maxLength');
    }
    const fillStrLen = maxLength - textLen;
    let b = 0;
    for (let a = 0; a < fillStrLen; a++) {
        if (fillString[b] === undefined) {
            b = 0;
        }
        text += fillString[b];
        b++;
    }
    return text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = ' ') {
}
