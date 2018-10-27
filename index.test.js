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