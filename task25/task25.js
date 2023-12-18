const newObj = document.querySelector(".newObj");

function createNewObj() {
  // создаем новый элемент
  let newH1 = document.createElement("p");
  // добавляем класс
  newH1.classList.add("p");
  // добавляем текс
  newH1.innerText = "Hello World!";
  newObj.appendChild(newH1);
}
createNewObj();
