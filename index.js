class Calculator {
  static add(numberString) {
    if (numberString === '') {
      return 0;
    }
    return parseInt(numberString);
  }
}

export default Calculator;
