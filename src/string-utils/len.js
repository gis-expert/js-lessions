export function len(text) {
    for (let a = 0; a !== 20; a += 1) {
        if (text[a] === undefined) {
            return a;
        }
    }
}

