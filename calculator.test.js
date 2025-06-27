const Calculator = require('./calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('adds two numbers', () => {
    expect(calc.add(5, 3)).toBe(8);
  });

  test('subtracts two numbers', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(calc.multiply(5, 3)).toBe(15);
  });

  test('divides two numbers', () => {
    expect(calc.divide(6, 3)).toBe(2);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
