let i = 0;
const func = () => {
  i++;
  func();
};
try {
  func();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
  console.log(i);
}

// /// Chrome - 13940
// //Firefox - 26441
// // Opera -  13908

let b = 0;
const func2 = () => {
  // чем больше переменный тем меньше будет размер коллстэка
  let someVariable = b + 1;
  b++;
  func2();
};
try {
  func2();
} catch (e) {
  console.log(b);
}

/// Chrome - 12546
//Firefox - 244897
// Opera - 12342
