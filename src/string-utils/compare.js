import {len} from './len.js';

function argumTypeMismatch(firstText, secondText) {
    if (typeof firstText !== 'string' || typeof secondText !== 'string') {
        throw Error('argument must be type of string');
    }
    return true;
}

function isMoreOrLess(firstText, secondText) {
    const textLength = Math.max(len(firstText), len(secondText));
    for (let a = 0; a !== textLength; a++) {
        if (firstText.charCodeAt(a) > secondText.charCodeAt(a)) {
            return true;
        } 
        if (firstText.charCodeAt(a) < secondText.charCodeAt(a)) {
            return false;
        }
        if (isNaN(firstText.charCodeAt(a))) {
                return false;
        }
        if (isNaN(secondText.charCodeAt(a))) {
                return true;
        }
    }
}

/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);
    const textLength = Math.max(len(firstText), len(secondText));
    for (let a = 0; a !== textLength; a++) {
        if (firstText.charCodeAt(a) !== secondText.charCodeAt(a)) {
            return false;
        }
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !isEqual(firstText, secondText);
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);
    if (isEqual(firstText, secondText)) {
    return false;
    }
    return isMoreOrLess(firstText, secondText);
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);
    if (isEqual(firstText, secondText)) {
        return false;
    }
        return !isMoreOrLess(firstText, secondText);
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);
    if (isEqual(firstText, secondText)) {
        return true;
    }
        return isMoreOrLess(firstText, secondText);
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);
    if (isEqual(firstText, secondText)) {
        return true;
    }
        return !isMoreOrLess(firstText, secondText);
}
