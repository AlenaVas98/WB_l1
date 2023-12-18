function checkPalindrom(str) {
  //убираем пробелы  и переводим в нижний регистр
  const newStr = str.replace(/\s/g, "").toLowerCase();
  // создаем полиндром: разбивая строку на массив, затем переворачиваем и снова соединяем
  const palindrom = newStr.split("").reverse().join("");
  //сравниваем строки
  return newStr == palindrom;
}

console.log(checkPalindrom("аргентина мАнит негра"));

function checkPalindrome(str) {
  //убираем пробелы  и переводим в нижний регистр
  const newStr = str.replace(/\s/g, "").toLowerCase();
  //проходим по всей строке
  for (let i = 0; i < newStr.length / 2; i++) {
    //сравниваем строки
    if (newStr.charAt(i) !== newStr.charAt(newStr.length - 1 - i)) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome("аргентина манит негра"));
