import {len} from './len.js';


function argumTypeMismatch(firstText, secondText) {
    if (typeof firstText !== 'string' || typeof secondText !== 'string') {
        throw Error('argument must be type of string');
    }

    return true;
}


/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);

    if (firstText !== secondText || len(firstText) !== len(secondText)) {
        return false;
    }

    return true;
}


/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);

    if (firstText !== secondText || len(firstText) !== len(secondText)) {
        return true;
    }

    return false;
}


/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);

    if (firstText > secondText) {
        return true;
    }

    if (firstText <= secondText) {
        return false;
    }

    if (len(firstText) < len(secondText)) {
        return false;
    }
}


/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);

    if (firstText < secondText) {
        return true;
    }

    if (firstText >= secondText) {
        return false;
    }

    if (len(firstText) > len(secondText)) {
        return false;
    }
}


/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);

    if (firstText >= secondText) {
        return true;
    }

    if (firstText <= secondText) {
        return false;
    }

    if (len(firstText) < len(secondText)) {
        return false;
    }
}


/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    argumTypeMismatch(firstText, secondText);

    if (firstText <= secondText) {
        return true;
    }

    if (firstText >= secondText) {
        return false;
    }

    if (len(firstText) > len(secondText)) {
        return false;
    }
}
