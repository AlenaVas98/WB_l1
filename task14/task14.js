const loadImage = (url) =>
  new Promise((resolve, reject) => {
    // создаем новый HTML img element
    const img = new Image();
    // ждем пока загрузиться img
    img.addEventListener("load", () => resolve(img));
    // если загрузка не удаётся отправляем ошибку
    img.addEventListener("error", (err) => reject(err));
    //добавляем url
    img.src = url;
  });
loadImage(
  "https://i.artfile.me/wallpaper/22-11-2014/5000x4000/prazdnichnye-3d-grafika--novyj-god-snowm-884644.jpg"
)
  .then(() => console.log("success")) // загрузка успешна
  .catch((err) => console.error(err)); // произошла ошибка
