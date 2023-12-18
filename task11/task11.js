function sum() {
  let a = 5;
  return function () {
    let b = 10;
    return a + b;
  };
}
let newFun = sum();
console.log(newFun());

function sum2(a) {
  return function (b) {
    return a + b;
  };
}
let newFun2 = sum2(20);
console.log(newFun2(69));
