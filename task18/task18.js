// window.localStorage.clear();
try {
  const key = "task";
  const value = "189".repeat(1024); // Создаем строку, размер которой превышает максимальный размер local storage
  localStorage.setItem(key, value);
  console.log("Data saved successfully");
} catch (error) {
  console.log("Failed to save data:", error);
}

const usedSpace = JSON.stringify(localStorage).length;
console.log("Used space:", usedSpace);

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`Key: ${key}, Value: ${value}`);
}

let storage = JSON.stringify(localStorage);
console.log(storage.length);
