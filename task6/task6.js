const data = [
  {
    name: "Candie",
    age: "45",
  },
  {
    name: "Panchito",
    age: "12",
  },
  {
    name: "Lock",
    age: "32",
  },
  {
    name: "Ynez",
    age: "57",
  },
  {
    name: "Odall",
    age: "29",
  },
  {
    name: "Adall",
    age: "29",
  },
];

data.sort((a, b) => {
  // проверяем, есть ли совпадения по возрасту
  if (a.age === b.age) {
    // если есть то сортируем по алфавиту
    return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
  }
  //  сортируем по возрасту
  return a.age - b.age;
});

console.log(data);
