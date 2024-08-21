import { len } from './len.js';

export function substring(text, start = 0, end = len(text)) {
    if (typeof text !== 'string') {
        throw Error('argument must be type of string');
    }
    if (typeof start !== 'number' || start < 0 || start % 1 !== 0) {
        throw Error('invalid start index');
    } 
    if (end > len(text) || typeof end !== 'number' || end < 0 || end % 1 !== 0) {
        throw Error('invalid end index');
    }
    if (start > end) {
        throw Error('invalid start and end index');
    }
    if (isNaN(end)) {
        end = len(text);
    } 
    let result = '';
    for (let a = start; a !== end; a++) {
        result += text[a];
    }
    return result;
}
