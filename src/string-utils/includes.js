import { indexOf } from './index-of.js';

/** Возвращает булево значение, включен ли searchString в text.
 startIndex, позволяет указать с какого индекса начать поиск. */
export function includes(text, searchString, startIndex = 0) {
    if (typeof searchString !== 'string') {
        throw Error('invalid searchString');
    }
    if (indexOf(text, searchString, startIndex) !== -1) {
        return true;
    }
    return false;
}
