const jsonData = JSON.stringify([
  {
    id: 1,
    first_name: "Candie",
    last_name: "Kerkham",
  },
  {
    id: 2,
    first_name: "Panchito",
    last_name: "Gotliffe",
  },
  {
    id: 3,
    first_name: "Lock",
    last_name: "Dodgson",
  },
  {
    id: 4,
    first_name: "Ynez",
    last_name: "Battleson",
  },
  {
    id: 5,
    first_name: "Udall",
    last_name: "Brockwell",
  },
]);
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function jsonToLinkedList(json) {
  // Проверяем, является ли приходщие дынный JSON
  if (!json) {
    return null;
  }

  // Преобразуем JSON в массив объектов
  const objectsArr = JSON.parse(json);

  // Создаем первый узел
  const head = {
    data: objectsArr[0],
    next: null,
  };
  let current = head;

  // Создаем остальные узлы
  for (let i = 1; i < objectsArr.length; i++) {
    const newNode = {
      data: objectsArr[i],
      next: null,
    };
    current.next = newNode;
    current = newNode;
  }

  return head;
}
console.log(jsonToLinkedList(jsonData));
