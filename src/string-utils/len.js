// export function len(text) {
//     let a = 0;
//     for (a; text[a] !== undefined; a++){}
//     return a;
// }

export function len(text) {
    let a = 0;
    while (text[a] !== undefined) {a++}
    return a;
}

