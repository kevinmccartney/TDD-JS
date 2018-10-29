class Calculator {
  static add(numberString) {
    if (numberString === '') {
      return 0;
    }

    let argumentsArray;

    if (numberString.indexOf(',') > 0) {
      argumentsArray = numberString.split(',');
    } else {
      argumentsArray = numberString.split('\n');
    }

    return argumentsArray.reduce((accumulator, currentVal) => accumulator + parseInt(currentVal), 0);
  }
}

export default Calculator;
