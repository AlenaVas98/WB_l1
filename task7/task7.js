let functionsArr = [
  function function1() {
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("first function");
        resolve();
      }, 1000)
    );
  },
  function function2() {
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("second function");
        resolve();
      }, 2000)
    );
  },
  function function3() {
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("third function");
        resolve();
      }, 3000)
    );
  },
  function function4() {
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("fourth function");
        resolve();
      }, 4000)
    );
  },
];

//создаем функцию для вызова массива с функциями
async function callFunctions(fun) {
  // проходим по массиву
  for (let i = 0; i < fun.length; i++) {
    // проверяем, точно ли в массиве функции
    if (typeof fun[i] === "function") {
      // если функция то запускаем её
      await fun[i]();
      // добавляем порядковый номер
      console.log(i);
    }
  }
}

console.log(callFunctions(functionsArr));
