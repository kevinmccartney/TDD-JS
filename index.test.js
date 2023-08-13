import calc from './index';

describe('calculator', function() {
  test('should return an 0 when an empty string is passed', function() {
    const value = "";

    const addEmpty = calc(value);
    
    expect(addEmpty).toBe(0);
  });

  test('should return the same number as was passed in if there\'s 1 number', function() {
    const value = "96";

    const addOneNumber = calc(value);

    expect(addOneNumber).toBe(96);
  });

  test('should return the sum of comma delimited two numbers', function() {
    const value = "16,4";

    const addTwoNumbers = calc(value);

    expect(addTwoNumbers).toBe(20);
  });

  test('should return an error message if any other characters besides numbers & delimitors are passed', function () {
    const value = "ab";

    const addLetters = calc(value);

    expect(addLetters).toBe('Invalid characters entered');
  });
});

// show shared test state issues teardown/set-up