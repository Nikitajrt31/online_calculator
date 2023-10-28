'use strict';
// let display = document.getElementById('inputbox');
let display = document.getElementById('displaybox');
let buttons = document.querySelectorAll('.button');

let string = ' ';

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    if (e.target.value == '=') {
      string = eval(string);
      display.value = string;
    } else if (e.target.value == 'AC') {
      string = ' ';
      display.value = string;
    } else if (e.target.value == 'DEL') {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string += e.target.value;
      display.value = string;
    }
  });
});
