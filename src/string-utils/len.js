export function len(text) {
    if (typeof text !== 'string') {
        throw Error('argument must be type of string');
    }
    let a = 0;
    for (;text[a] !== undefined; a++){}   
    return a;
}