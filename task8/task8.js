let functionsArr = [
  function function1() {
    return 1;
  },
  function function2() {
    return 2;
  },
  function function3() {
    return 3;
  },
  function function4() {
    return 4;
  },
];

//создаем функцию для вызова массива с функциями
function callFunction(fun) {
  //создаем функцию для вызова каждой функции
  return function () {
    // создаем массим для добавления результата
    let arr = [];
    // проходим по массиву функций
    for (let i = 0; i < fun.length; i++) {
      // проверяем, точно ли в массиве функции
      if (typeof fun[i] === "function") {
        // добавляем их результат в массив
        arr.push(fun[i]());
      }
    }
    // возращаем новый массив
    return arr;
  };
}
// возращаем ананимную функцию
const funs = callFunction(functionsArr);
console.log(funs());
