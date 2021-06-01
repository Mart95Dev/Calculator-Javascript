const buttons = document.querySelectorAll('.btn');
const screenResult = document.getElementById('result');
const equal = document.getElementById('equal');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // calculator key
    let key = e.target.id;
    if (screenResult.textContent === '0') {
      screenResult.textContent = key;
    } else {
      screenResult.textContent += key;
    }
    // clear key
    if (key === 'c') {
      screenResult.textContent = '0';
    }
  });
});

/// result calculator
equal.addEventListener('click', function () {
  const resultClean = screenResult.textContent
    .replaceAll(',', '.')
    .replaceAll('x', '*');
  const calcul = eval(resultClean);
  screenResult.textContent = calcul.toString().replace('.', ',');
});

// [1,2,3]
// [1,2,3].forEach(e => console.log(e*2));

// const variable = '';
// ['2','8','x','3'].forEach(e => {variable += e; console.log(variable)});
// eval('28*3')

// function deleteLastChar() {
//   var str = 'WayToLearnX';
//   var newStr = str.slice(0, str.length - 1);
//   document.getElementById('char').innerHTML = newStr;
// }
