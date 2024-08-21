import { len } from './len.js';

export function indexOf(text, searchString, index=0) {
    if (typeof text !== 'string') {
        throw Error('argument must be type of string');
    }
    if (typeof searchString !== 'string') {
        throw Error('invalid searchString string');
    }
    if (len(searchString) === 0) {
        return -1;
    }
    if (typeof index !== 'number' || index < 0 || index > len(text) || index % 1 !== 0) {
        throw Error('invalid index');
    }
    const textLen = len(text);
    const searchStrLength = len(searchString);
    for (let a = index; a <= textLen - searchStrLength; a++) {
    let match = true;
    for (let b = 0; b < searchStrLength; b++) {
        if (text[a + b] !== searchString[b]) {
            match = false;
            break;
        }
    }
        if (match) {
            return a;
        }
    }
    return -1;
}

