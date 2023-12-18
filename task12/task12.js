let book = {
  name: "The Master and Margarita",
  author: "Mikhail Bulgakov",
  year: 1967,
};
// Создаем функцию для изменения объекта
function changeBook(book, value, newValue) {
  // добавляем ключь который хотим изменить
  let key = value;
  // к объекту добавляем ключ данные которого хотим поменять и меняем данные этого ключа
  book[key] = newValue;
}

let newName = changeBook(book, "name", "Pinocchio");
let newAuthor = changeBook(book, "author", "Carlo Collodi");
let newYear = changeBook(book, "year", 1881);

console.log(book);
