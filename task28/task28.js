const ul = document.querySelector("ul");
//получаем фрагмент
const template = document.querySelector("#tem");
//получем span внутри фрагмента
const span = template.content.querySelector("span");

function teml(text) {
  //добаляем текст в span
  span.textContent = text;

  //делаем дубликат фрагмента
  let li = template.content.cloneNode(true);
  // добавляем
  ul.append(li);
}
teml(" Rouse");
teml(" Marius");
