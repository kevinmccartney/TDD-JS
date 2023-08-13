class Calculator {
  static add(numberString) {
    // if the number string is empty, return 0
    if (numberString === '') {
      return 0;
    } else if (!numberString.startsWith('//')) {
      return parseInt(numberString);
    }

    // we need to split the string to find the index of the first number
    const numberStringSplit = numberString.split('');

    // this is a weird reduce, but we need to return the index of the first number & I want to do it functionally
    let firstNumberIndex = numberStringSplit.reduce((accumulator, currentVal, currentIndex) => {
      const parsedValue = parseInt(currentVal);
      const parsedType = typeof parsedValue;
      
      // we have to check that the accumulator is not defined, the parsedValue is not NaN, but that it is a number
      // (NaN is technically a number - Number.NaN)
      if (!accumulator && !!parsedValue && parsedType === 'number') {
        accumulator = currentIndex;
      }

      return accumulator;
    }, undefined);

    // grab the string of numbers to parse
    const numbers = numberString.substring(firstNumberIndex);
    // get the delimitors (skip the first two //)
    const delimitors = numberString.slice(2, firstNumberIndex).split('');
    // pop the last one off (the newline)
    // TODO: I would love to do this functionally
    delimitors.pop();

    // this function will split the number string on the delimitor & normalize it with a comma
    const normalizedString = delimitors.reduce((accumulator, currentVal) => {
      return accumulator.split(currentVal).join(',');
    }, numbers);

    // return the final number
    return normalizedString.split(',').reduce((accumulator, currentVal) => accumulator + parseInt(currentVal), 0);
  }
}

export default Calculator;
