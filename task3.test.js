const Calculator = require('./task3');

const calculator = new Calculator();

describe('calculator', () => {
    describe('add', () => {
        test('a plus b', () => {
            expect(calculator.add(5, 3)).toBe(8);
        });

        test('a plus b', () => {
            expect(calculator.add(1, 3)).toBe(4);
        });
    })

    describe('substract', () => {
        test('a minus b', () => {
            expect(calculator.substract(5, 1)).toBe(4);
        });

        test('a minus b', () => {
            expect(calculator.substract(3, 2)).toBe(1);
        });
    })

    describe('devide', () => {
        test('a devided by b', () => {
            expect(calculator.devide(6, 2)).toBe(3);
        });

        test('a devided by b', () => {
            expect(calculator.devide(2, 2)).toBe(1);
        });
    })

    describe('multiply', () => {
        test('a myltiplied by b', () => {
            expect(calculator.multiply(5, 3)).toBe(15);
        });

        test('a myltiplied by b', () => {
            expect(calculator.multiply(5, 1)).toBe(5);
        });
    })
})