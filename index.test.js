import Calculator from './index';

test('Calculator class exists', () => {
  expect(Calculator).toBeDefined();
});

test('Calculator class has add method', () => {
  expect(Calculator.add).toBeDefined();
});