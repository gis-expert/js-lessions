export function len(text) {
    if (typeof text !== 'string') {
        throw Error('argument must be type of string');
    }
    let a = 0;
    while (text[a] !== undefined){a++}   
    return a;
}