function calc(string) {
  if(string === '') {
    return 0;
  }

  const splitString = string.split(','); 

  function isValid(value) {
    if(!isNaN(value)) {
      return value;
    } else {
      return 'Invalid characters entered';
    }
  }

  if (splitString.length === 1) {
    const sum = parseInt(splitString[0]);
    
    return isValid(sum);
  } else if (splitString.length === 2) {
    const sum = parseInt(splitString[0]) + parseInt(splitString[1]);

    return isValid(sum);
  }
}

export default calc;
