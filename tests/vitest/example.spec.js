import { describe, expect, test } from 'vitest';

const sum = (value1, value2) => {
    if (typeof value1 !== 'number') {
        throw Error('First parameter is not an integer');
    } else if (typeof value2 !== 'number') {
        throw Error('Second parameter is not an integer');
    }

    return value1 + value2;
};

describe('sum()', () => {
    it('exists', () => {
        expect(sum).toBeDefined();
    });

    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('throws error for invalid first parameter', () => {
        expect(() => sum('1a', 2)).toThrowError();
    });
});
