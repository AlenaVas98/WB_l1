//вычисление N-го числа в ряду Фибоначчи

function fibonacciN(num) {
  // проверяем является ли num числом
  if (typeof num !== "number") {
    return false;
  }
  let num1 = 1;
  let num2 = 1;
  for (let i = 3; i < num; i++) {
    // num1 меняем с num2, num2 меняем с суммой num1 и num2
    [num1, num2] = [num2, num1 + num2];
  }
  return num2;
}

console.log(fibonacciN(9));

//вычисление всех чисел в ряду Фибоначчи до числа N
function fibonacciALL(num) {
  // проверяем, является ли num числом
  if (typeof num !== "number") {
    return false;
  }
  // исходный массив
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibonacciALL(9));

// вычисление N-го просто числа

function isPrime(num) {
  if (typeof num !== "number") {
    return false;
  }
  for (let i = 2; i < num; i++) {
    // проверяем остаток
    if (num % i === 0) {
      return false;
    }
  }
  return num;
}
console.log(isPrime(7));

//вычисление всех простых чисел до числа N

function getPrime(num) {
  if (typeof num !== "number") {
    return false;
  }

  let arr = [];
  for (let i = 2; i < num; i++) {
    // проверяем, действительно ли число простое
    if (isPrime(i)) {
      // если число простое добавляем в массив
      arr.push(i);
    }
  }
  return arr;
}

console.log(getPrime(10));
