const buttons = document.querySelectorAll('.btn');
const screenResult = document.getElementById('result');
const equal = document.getElementById('equal');
const image = document.querySelector('.danger-off');
const alertTitle = document.querySelector('.alert-title');
const textAlert = document.querySelector('.alert-text');
let error = [];
let symbols = [0];

buttons.forEach(function (button) {
  // calculator key
  button.addEventListener('click', function (e) {
    let key = e.target.id;
    // choice push value 'c' , '(' , ')'
    switch (key) {
      case 'c':
        symbols.push(0);
        break;
      case '(':
        symbols.push(1);
        break;
      case ')':
        symbols.push(1);
        break;
      default:
        error.push(parseInt(key));
    }
    // console.log(symbols);
    // console.log(error);

    //start calculator
    if (screenResult.textContent === '0') {
      screenResult.textContent = key;
    } else {
      screenResult.textContent += key;
    }
    // clear key
    if (key === 'c') {
      screenResult.textContent = '0';
      image.classList.remove('danger-on');
      textAlert.classList.remove('danger-on');
      alertTitle.classList.remove('danger-on');
      error = [];
      symbols = [0];
      symbol = '';
    }
  });
});

// display result or display error
equal.addEventListener('click', () => {
  // test error operator result
  for (let i = 0; i < error.length; i++) {
    let numberNan = error.slice(-1);
    if (isNaN(numberNan)) {
      image.classList.add('danger-on');
      textAlert.classList.add('danger-on');
      alertTitle.classList.add('danger-on');
    }
    // check error symbols calculator
    const add = (accumulator, value) => accumulator + value;
    let symbol = symbols.reduce(add);
    if (symbol % 2 > 0) {
      image.classList.add('danger-on');
      textAlert.classList.add('danger-on');
      alertTitle.classList.add('danger-on');
    }
    //result
    const resultClean = screenResult.textContent
      // replace symbols
      .replaceAll(',', '.')
      .replaceAll('x', '*');
    //calculate
    const calcul = eval(resultClean);
    // display calculator
    screenResult.textContent = calcul.toString().replace('.', ',');
    error = [];
    symbols = [0];
    symbol = '';
  }
});
