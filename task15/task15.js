async function inform(id) {
  // отправляем запрос на получение данных
  const response = await fetch(`https://swapi.dev/api/films/${id}/`);
  // после того как получем данные выводим в консоль
  console.log("ответ получен", response);

  return response.json();
}
// запрашиваем данные из запроса
const movies = inform(3).then((movie) => {
  console.log(movie.title);
});

console.log("результат вызова функции", movies);
