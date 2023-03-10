const capitalize = require('./task4');

describe('capitalise', () => {
    test('string capitalized', () => {
        expect(capitalize('sir')).toBe('Sir')
    })
})