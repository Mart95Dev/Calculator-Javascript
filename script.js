const numbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const screen = document.querySelector('.screen');
const operatorAdd = document.querySelector('.add');
const operatorLess = document.querySelector('.less');
const operatorMultiply = document.querySelector('.multiply');
const operatorDivision = document.querySelector('.division');
const operatorEqual = document.querySelector('.equal');
const operatorPoint = document.querySelector('.point');
const reset = document.querySelector('.reset');
let values = [];
let nbr1 = 0;
let nbr2 = 0;
let signOperator1 = '';
let signOperator2 = '';
let signSymbol = '';
let total = 0;
screen.innerText = 0;

//function reset
reset.addEventListener('click', function () {
  screen.innerText = 0;
  total = 0;
  nbr1 = 0;
  nbr2 = 0;
  values = [];
  signOperator1 = '';
});

//function touches nombres
numbers.forEach(function (number) {
  if (isNaN(number)) {
    number.addEventListener('click', function () {
      values.push(number.innerText);
      screen.innerText = values.join('');
      nbr1 += number.innerText;
      signSymbol = number.innerText;
      console.log(signSymbol);
      console.log(nbr1);
    });
  } else {
    number.addEventListener('click', function () {
      values.push(parseInt(number.innerText));
      screen.innerText = values.join('');
      nbr1 += screen.innerText;
    });
  }
});

// choice operator
operatorAdd.addEventListener('click', function () {
  if (total !== 0) {
    nbr2 = total;
    values = [];
    values.push(total);
    values.push('+');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '+';
  } else {
    nbr2 = parseInt(nbr1);
    values.push('+');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '+';
    console.log(nbr2);
    console.log(nbr1);
  }
});

operatorLess.addEventListener('click', function () {
  if (total !== 0) {
    nbr2 = total;
    values = [];
    values.push(total);
    values.push('-');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '-';
  } else {
    nbr2 = parseInt(nbr1);
    values.push('-');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '-';
    // console.log(nbr2);
    // console.log(nbr1);
  }
});

operatorMultiply.addEventListener('click', function () {
  if (total !== 0) {
    nbr2 = total;
    values = [];
    values.push(total);
    values.push('x');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '*';
  } else {
    nbr2 = parseInt(nbr1);
    values.push('x');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '*';
    // console.log(nbr2);
    // console.log(nbr1);
  }
});

operatorDivision.addEventListener('click', function () {
  if (total !== 0) {
    nbr2 = total;
    values = [];
    values.push(total);
    values.push('/');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '/';
  } else {
    nbr2 = parseInt(nbr1);
    values.push('/');
    screen.innerText = values.join('');
    nbr1 = 0;
    signOperator1 = '/';
    // console.log(nbr2);
    // console.log(nbr1);
  }
});

//total calcul
operatorEqual.addEventListener('click', function () {
  switch (signOperator1) {
    case '+':
      total = nbr2 + parseInt(nbr1);
      screen.innerText = total;
      nbr1 = 0;
      nbr2 = 0;
      signOperator1 = '';
      value = [];
      // console.log(total);
      break;
    case '-':
      total = nbr2 - parseInt(nbr1);
      screen.innerText = total;
      nbr1 = 0;
      nbr2 = 0;
      signOperator1 = '';
      value = [];
      break;
    case '/':
      total = nbr2 / parseInt(nbr1);
      screen.innerText = total;
      nbr1 = 0;
      nbr2 = 0;
      signOperator1 = '';
      value = [];
      break;
    case '*':
      total = nbr2 * parseInt(nbr1);
      screen.innerText = total;
      nbr1 = 0;
      nbr2 = 0;
      signOperator1 = '';
      value = [];
      break;
    default:
      alert('Veuillez choisir un opérateur pour réaliser un calcul !');
  }
});

// faire une fonction addlistener
// sur symbol pour déterminer la parenthèse et les variables

// créer une fonction calcul avec parenthèse
