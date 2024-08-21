import {len} from './len.js';

/** Возвращает "развернутую" копию text */
export function reverse(text) {
    if (typeof text !== 'string') {
        throw Error('argument must be type of string');
    }
    let result = '';
    for (let a = len(text); a !== 0;) {
        a--;
        result += text[a];
    }
    return result;
}
