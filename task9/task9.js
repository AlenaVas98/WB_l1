const data = [
  {
    name: "Candie",
    age: "45",
    isAdmin: true,
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    name: "Panchito",
    age: "12",
    isAdmin: true,
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    name: "Lock",
    age: "32",
    isAdmin: true,
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    name: "Ynez",
    age: "57",
    isAdmin: true,
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    name: "Odall",
    age: "29",
    isAdmin: true,
    languages: ["JavaScript", "Python", "Java"],
  },
  {
    name: "Adall",
    age: "29",
    isAdmin: true,
    languages: ["JavaScript", "Python", "Java"],
  },
];
function jsonStringify(value) {
  // проверяем тип приходящего значения
  if (typeof value === "object" && value !== null) {
    if (Array.isArray(value)) {
      // если это объект или массив проходим по их значениям и объединяем результаты в строку JSON
      const arrayString = value.map((item) => jsonStringify(item)).join(",");
      return "[" + arrayString + "]";
    } else {
      const objectString = Object.keys(value)
        .map((key) => `"${key}":${jsonStringify(value[key])}`)
        .join(",");
      return "{" + objectString + "}";
    }
    //если приходящие значение строка, мы оборачиваем её в двойные кавычки
  } else if (typeof value === "string") {
    return `"${value}"`;
  } else {
    return String(value);
  }
}

console.log(jsonStringify(data));
