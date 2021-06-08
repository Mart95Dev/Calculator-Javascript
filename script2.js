const buttons = document.querySelectorAll('.btn');
const screenResult = document.getElementById('result');
const equal = document.getElementById('equal');
const image = document.querySelector('.danger-off');
const alertTitle = document.querySelector('.alert-title');
const textAlert = document.querySelector('.alert-text');
let touchs = [];
let symbols = [0];
let deleteCharacter = '';
let previousScreenResult = '';

buttons.forEach(function (button) {
  // calculator key
  button.addEventListener('click', function (e) {
    let key = e.target.id;

    // choice push value 'c' , '(' , ')'
    switch (key) {
      case 'c':
        symbols.push(0);
        screenResult.textContent = '0';
        image.classList.remove('danger-on');
        textAlert.classList.remove('danger-on');
        alertTitle.classList.remove('danger-on');
        reset();
        return;
      case '(':
        symbols.push(1);
        break;
      case ')':
        symbols.push(1);
        break;
      case 'ce':
        key = '';
        touchs.pop();
        previousScreenResult = screenResult.textContent;
        deleteCharacter = previousScreenResult.slice(0, -1);
        screenResult.textContent = deleteCharacter;
        break;
      default:
        touchs.push(parseInt(key));
    }

    //start calculator
    if (screenResult.textContent === '0') {
      screenResult.textContent = key;
    } else {
      screenResult.textContent += key;
    }
  });
});

// display result or display error
equal.addEventListener('click', () => {
  // test error operator result
  if (touchs.length === 0) {
    danger();
    return;
  }

  for (let i = 0; i < touchs.length; i++) {
    let character = touchs.slice(-1);
    if (isNaN(character)) {
      danger();
      break;
    }

    // check error symbols calculator
    const add = (accumulator, value) => accumulator + value;
    const symbol = symbols.reduce(add);
    if (symbol % 2 > 0) {
      danger();
      break;
    }

    // replace symbols and return result
    const resultClean = screenResult.textContent
      .replaceAll(',', '.')
      .replaceAll('x', '*');

    // calculate
    let calcul;
    try {
      calcul = eval(resultClean);
    } catch (e) {
      danger();
      break;
    }

    // display calculator
    screenResult.textContent = calcul.toString().replace('.', ',');
    reset();
  }
});

const danger = () => {
  image.classList.add('danger-on');
  textAlert.classList.add('danger-on');
  alertTitle.classList.add('danger-on');
};

const reset = () => {
  image.classList.remove('danger-on');
  textAlert.classList.remove('danger-on');
  alertTitle.classList.remove('danger-on');
  touchs = [];
  symbols = [0];
  symbol = '';
};
