class Calculator {
  static add(numberString, delimiters = [',']) {
    if (numberString === '') {
      return 0;
    }

    let argumentsString = delimiters.reduce((accumulator, currentVal) => {
      return accumulator.split(currentVal).join(',');
    }, numberString);


    return argumentsString.split(',').reduce((accumulator, currentVal) => accumulator + parseInt(currentVal), 0);
  }
}

export default Calculator;
