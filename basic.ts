function add(num1: number, num2: number, checkN: boolean, sumR: string) {
  let result = num1 + num2;

  if (checkN) {
    return sumR + result;
  } else {
    return "Error";
  }
}

// js dynamic type
// ts static type

const number1 = 5;
const number2 = 3.8;
const sumString = "Result : ";
const checkNumbers = true;

console.log(add(number1, number2, checkNumbers, sumString));
