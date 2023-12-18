function weirdNumber(num) {
  let sum = 0;

  for (let i = 1; i < num - 1; i++) {
    //проверяем число на остаток
    if (num % i === 0) {
      // складываем
      sum += i;
    }
  }
  // проверяем на сходство
  if (num === sum) return true;
  else return false;
}
console.log(weirdNumber(6));
console.log(weirdNumber(8));
console.log(weirdNumber(28));
