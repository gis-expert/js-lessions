import { len } from './len.js'
import { includes } from './includes.js'
import { reverse } from './reverse.js'; 
const TRIM_SYMBOLS = ' \n\t\v'; 

/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
    if (typeof trimSymbols !== 'string') {
        throw Error('argument trimSymbols must be type of string');
    }
    if (typeof text !== 'string') {
        throw Error('argument text must be type of string');
    }
    const textLen = len(text);
    let result = '', startIndex = 0;
    while (startIndex < textLen && includes(trimSymbols, text[startIndex])){startIndex++;}
    for (let a = startIndex; a < textLen; a++) {
        result += text[a];
    }
    return result;
}


/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {
    if (typeof text !== 'string') {
        throw Error('argument text must be type of string');
    }
    return reverse(trimStart(reverse(text), trimSymbols));
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {
    return trimEnd(trimStart(text, trimSymbols), trimSymbols);
}
