const widget = document.getElementById("postBox");
const postList = document.getElementById("postList");
const VK_API_VERSION = "5.131";
const access_token = "";

let offset = 0;
const count = 10; // количество прогружаемых постов
const idGroup = "-58509583";

let loading = false;

// Функция для определения размера данных в мегабайтах в localStorage
function sizeofAllStorageInMB() {
  let sizeInBytes = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    sizeInBytes += lengthInUtf8Bytes(localStorage.getItem(key));
  }
  let sizeInKB = sizeInBytes / 1024;
  let sizeInMB = sizeInKB / 1024;
  return sizeInMB;
}

// Функция для определения размера строки в байтах
function lengthInUtf8Bytes(str) {
  let m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

// Функция для сохранения данных в localStorage с проверкой и удалением старых данных
function saveToLocalStorage(key, value) {
  const maxLocalStorageSizeInMB = sizeofAllStorageInMB();

  if (maxLocalStorageSizeInMB === null) {
    console.error("Не удалось определить максимальный объем localStorage.");
    return;
  }

  const currentSizeInMB = sizeofAllStorageInMB();

  if (currentSizeInMB >= maxLocalStorageSizeInMB) {
    // Если текущий размер превышает максимальный размер, удаляем старые данные
    const localStorageData = JSON.parse(localStorage.getItem(key) || "[]");
    let totalSize = 0;

    for (let i = 0; i < localStorageData.length; i++) {
      const item = localStorageData[i];
      totalSize += lengthInUtf8Bytes(JSON.stringify(item));

      if (totalSize >= currentSizeInMB - maxLocalStorageSizeInMB) {
        localStorageData.splice(0, i + 1);
        break;
      }
    }

    localStorage.setItem(key, JSON.stringify(localStorageData));
  }

  // Сохраняем данные в localStorage
  const dataToSave = { value, timestamp: new Date().getTime() };
  const localStorageData = JSON.parse(localStorage.getItem(key) || "[]");
  localStorageData.push(dataToSave);
  localStorage.setItem(key, JSON.stringify(localStorageData));
}

function loadFromLocalStorage(key) {
  const cachedData = localStorage.getItem(key);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  return null;
}

function updateCache(data) {
  const cachedData = loadFromLocalStorage("cachedPosts") || [];
  const mergedData = cachedData.concat(data);
  saveToLocalStorage("cachedPosts", mergedData);
}
// Функция для загрузки постов
function loadPosts() {
  if (!loading) {
    loading = true;
    const cachedData = loadFromLocalStorage("cachedPosts") || [];
    if (cachedData.length > offset) {
      const itemsToRender = cachedData.slice(offset, offset + count);
      renderPosts(itemsToRender);
      offset += itemsToRender.length;
      loading = false;
    } else {
      const callbackName = `jsonpCallback_${Date.now()}`;
      const script = document.createElement("script");
      script.src = `https://api.vk.com/method/wall.get?owner_id=${idGroup}&count=${count}&offset=${offset}&v=${VK_API_VERSION}&access_token=${access_token}&callback=${callbackName}`;
      window[callbackName] = function (data) {
        handleResponse(data);
        document.body.removeChild(script);
        delete window[callbackName];
      };
      document.body.appendChild(script);
    }
  }
}

// При загрузке страницы восстановим данные из localStorage
const cachedData = loadFromLocalStorage("cachedPosts");
if (cachedData) {
  // Если есть кэшированные данные, отобразим их
  renderPosts(cachedData);
  offset = cachedData.length;
} else {
  // Если данных нет в кэше, начнем загрузку постов
  loadPosts();
}

function handleResponse(data) {
  if (data.error) {
    console.error(data.error);
    return;
  }

  const items = data.response.items || [];
  renderPosts(items);
  offset += items.length;
  loading = false;

  updateCache(items);
}

function renderPosts(posts) {
  for (const post of posts) {
    const listItem = document.createElement("li");
    listItem.textContent = post.text;
    postList.appendChild(listItem);

    if (post.attachments && post.attachments.length > 0) {
      for (const attachment of post.attachments) {
        if (attachment.type === "photo") {
          const photo =
            attachment.photo.sizes.find((size) => size.type === "x") ||
            attachment.photo.sizes.pop();
          const img = document.createElement("img");
          img.src = photo.url;
          listItem.appendChild(img);
        }
      }
    }
  }
}

widget.addEventListener("scroll", () => {
  if (widget.scrollTop + widget.clientHeight >= postList.clientHeight - 100) {
    loadPosts();
  }
});

loadPosts();
