const stringLength = require('./index');

test('more than 10 characters', () => {
    expect(stringLength('kujirakwinja')).toThrow(Error);
});

test('string id good', () => {
    expect(stringLength('Hello')).toBe(9);
});