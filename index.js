function romanToInt(s) {
  let sum = 0;
  let i = 0;

  while (i < s.length) {
    if (
      (s[i] === 'I' && s[i + 1] === 'V') ||
      (s[i] === 'I' && s[i + 1] === 'X')
    ) {
      if (s[i + 1] === 'V') {
        sum += 4;
      } else {
        sum += 9;
      }
      i += 2;
    } else if (
      (s[i] === 'X' && s[i + 1] === 'L') ||
      (s[i] === 'X' && s[i + 1] === 'C')
    ) {
      if (s[i + 1] === 'L') {
        sum += 40;
      } else {
        sum += 90;
      }
      i += 2;
    } else if (
      (s[i] === 'C' && s[i + 1] === 'D') ||
      (s[i] === 'C' && s[i + 1] === 'M')
    ) {
      if (s[i + 1] === 'D') {
        sum += 400;
      } else {
        sum += 900;
      }
      i += 2;
    } else {
      switch (s[i]) {
        case 'I':
          sum += 1;
          break;
        case 'V':
          sum += 5;
          break;
        case 'X':
          sum += 10;
          break;
        case 'L':
          sum += 50;
          break;
        case 'C':
          sum += 100;
          break;
        case 'D':
          sum += 500;
          break;
        case 'M':
          sum += 1000;
          break;
      }
      i++;
    }
  }

  return sum;
}

const handleSubmit = (e) => {
    e.preventDefault()
    const response = document.getElementsByClassName('response')
    const input = document.getElementById('input')
    const numberInteger = romanToInt(input.value)
    response[0].innerHTML= numberInteger
}
