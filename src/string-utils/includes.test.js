import { expect, test, describe} from 'bun:test';
import { includes } from './includes.js';

describe('includesTests', () => {
    test('1', () => {
        expect(includes('Hello world', 'world')).toBe(true);
        expect(includes('word', 'world')).toBe(false);
        expect(includes('Hello world', 'hi')).toBe(false);
        expect(includes('', 'hi')).toBe(false);
    });
    test('2', () => {
        expect(() => includes('Hello world', true)).toThrow('invalid searchString');
    });
})