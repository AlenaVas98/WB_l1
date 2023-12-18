const data = '{ name: "Adall", age: 29, phone:3254669875  }';
const convertStringToJson = (str) => {
  // удаляем пробелы в начале и конце строки
  str = str.trim();
  // Проверяем, является ли строка объектом и является ли строка пустой
  if (typeof str === "object" && str !== null) {
    console.log("error");
  }
  // Удаляем фигурные скобки в начале и конце строки
  str = str.slice(1, -1);
  // Разделяем строку на ключи и значения путем разбиения по запятым
  let keyValuePairs = str.split(",");
  // Создаем пустой объект JSON
  let json = {};
  // Обходим все пары ключ-значение
  for (let i = 0; i < keyValuePairs.length; i++) {
    let pair = keyValuePairs[i].split(":"); // Разделяем пару на ключ и значение

    let key = pair[0].trim(); // Удаляем пробелы в начале и конце ключа
    let value = pair[1].trim(); // Удаляем пробелы в начале и конце значения

    // Проверяем, является ли ключ пустой строкой
    if (key === "") {
      console.log("error");
    }

    // Проверяем, является ли значение числом
    if (!isNaN(value)) {
      json[key] = parseFloat(value);
    }
    // Проверяем, является ли значение строкой
    else if (
      typeof value[0] === "string" &&
      typeof value[value.length - 1] === "string"
    ) {
      json[key] = value.slice(1, -1); // Удаляем кавычки в начале и конце строки
    }
    // Проверяем, является ли значение объектом
    else if (
      typeof value[0] === "object" &&
      typeof value[value.length - 1] === "object"
    ) {
      json[key] = convertStringToJson(value);
    }
    // Если значение не является числом, строкой или объектом, выводим ошибку
    else {
      console.log("error");
    }
  }
  return json;
};

console.log(convertStringToJson(data));
