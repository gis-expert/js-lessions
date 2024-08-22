/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    if (typeof text !== 'string') {
        throw Error('argument must be type of string');
    }
    if (count % 1 !== 0 || count < 0 || typeof count !== 'number') { 
        throw Error('invalid count');
    }
    let result = '';
    for (let a = 0; a !== count; a++) {
        result += text;
    }
    return result;  
}
    