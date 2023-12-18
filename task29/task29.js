const form = document.getElementById("form");

function formSubmitValue(event) {
  event.preventDefault();
  // получаем  данные из input
  const name = form.querySelector('[name="name"]');
  const surname = form.querySelector('[name="surname"]');
  const email = form.querySelector('[name="email"]');
  // добавляем полученные данные из input в новый объект
  let values = {
    name: name.value,
    surname: surname.value,
    email: email.value,
  };
  // переобразовываем объект в строку
  var str = "";
  for (var p in values) {
    if (Object.prototype.hasOwnProperty.call(values, p)) {
      str += p + ": " + values[p] + "\n";
    }
  }

  alert(JSON.stringify(values));
  alert(str);
}
form.addEventListener("submit", formSubmitValue);

////////////////////////////////////////////////////////////////////////////

function formSubmitValue2(event) {
  event.preventDefault();
  // получаем  данные из input
  const allInputs = document.querySelectorAll("input");
  // добавляем полученные данные из input в новый объект
  let values = {};

  allInputs.forEach((input) => {
    const { name, value } = input;
    values[name] = value;
  });

  // переобразовываем объект в строку
  var str = "";
  for (var p in values) {
    if (Object.prototype.hasOwnProperty.call(values, p)) {
      str += p + ": " + values[p] + "\n";
    }
  }

  alert(JSON.stringify(values));
  alert(str);
}
form.addEventListener("submit", formSubmitValue2);
