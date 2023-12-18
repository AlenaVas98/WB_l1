let password = document.querySelector("#input_password");
// функция для проверки введенных пользователем данных в input
function Check(password) {
  let i = 0;
  if (password.length > 6) {
    i++;
  }
  if (password.length >= 10) {
    i++;
  }
  if (/[a-z]/.test(password)) {
    i++;
  }
  if (/[A-Z]/.test(password)) {
    i++;
  }
  if (/[0-9]/.test(password)) {
    i++;
  }
  if (/[!,%,&,@,#,$,^,*,?,_,~]/.test(password)) {
    i++;
  }
  return i;
}

let form = document.querySelector(".passwordBox");
let passwordcheckText = document.querySelector(".passwordcheckText");
document.addEventListener("keyup", function () {
  // получаем данные из input
  let valueInput = password.value;
  // отправляем полученные данные для проверки
  let check = Check(valueInput);
  //  проверяем сложность введенного пароля
  if (check <= 2) {
    form.classList.add("easy");
    form.classList.remove("medium");
    form.classList.remove("strong");
    passwordcheckText.textContent = "Добавте: '!@#$%^&*(){}[]','0-9','A-Z'";
  } else if (check >= 2 && check <= 4) {
    form.classList.remove("easy");
    form.classList.add("medium");
    form.classList.remove("strong");
  } else {
    form.classList.remove("easy");
    form.classList.remove("medium");
    form.classList.add("strong");
    passwordcheckText.textContent = " ";
  }
});
