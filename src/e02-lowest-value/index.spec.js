const getLowestItem = require('./');

describe('among all the items of an array', () => {
    test.each([
    [
        [78,56,232,12,8],
        8
    ],
    [
        [78,56,232,12,18],
        12
    ],
    [
        [78,56,232,412,228],
        56
    ],
    [
        [78,56,232,12,0],
        0
    ],
    [
        [1,56,232,12,8],
        1
    ],
    ])('should find the lowest value', (values, lowest) => {
        const result = getLowestItem(values);
        expect(result).toBe(lowest);
    });
});