import Calculator from './index';

expect.extend({
  toBeNumber(received) {
    const pass = typeof received === 'number';

    if(pass) {
      return {
        message: () => 'expected a number to be returned',
        pass: true,
      };
    } else {
      return {
        message: () => `expected a number to be returned, instead received ${typeof received}`,
        pass: false,
      };
    }
  }
})

test('Calculator class exists', () => {
  expect(Calculator).toBeDefined();
});

test('Calculator class has add method', () => {
  expect(Calculator.add).toBeDefined();
});

test('Calculator returns a number', () => {
  expect(Calculator.add('1')).toBeNumber();
});

test('Calculator returns 0 for an empty string parameter', () => {
  expect(Calculator.add('')).toBe(0);
});

test('Calculator returns the sum of one number correctly', () => {
  expect(Calculator.add('19')).toBe(19);
});

test('Calculator returns the sum of two numbers correctly', () => {
  expect(Calculator.add('2,9')).toBe(11);
});

test('Calculator returns the sum of an unknown amount of numbers correctly', () => {
  expect(Calculator.add('1,5,8,14')).toBe(28);
  expect(Calculator.add('1,5,8,14,3,5')).toBe(36);
});

test('Calculator can handle newlines or commas as delimiters', () => {
  expect(Calculator.add('3,8,9')).toBe(20);
  expect(Calculator.add('3\n8\n9', ['\n'])).toBe(20);
});

test('Calculator can handle mixed newlines or commas as delimiters', () => {
  expect(Calculator.add('3,1\n12', [',', '\n'])).toBe(16);
});

test('Calculator can handle mixed newlines or commas as delimiters', () => {
  expect(Calculator.add('8,5\n12&4+18', [',', '\n', '&', '+'])).toBe(47);
});