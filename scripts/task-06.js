"use strict";

let input;
const numbers = [];
let total = 0;

for (; input !== null; ) {
  input = prompt("Введите число");

  numbers.push(Number(input));
  console.log(numbers);
}
for (const number of numbers) {
  total += number;
}

if (input === null) {
  console.log(`Общая сумма чисел равна [${total}]`);
}
