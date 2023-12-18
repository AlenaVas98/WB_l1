// let num = document.getElementById("#num");
// let surname = document.getElementById("#surname");
// let name = document.getElementById("#name");
// let phone = document.getElementById("#phone");
// let address = document.getElementById("#address");
// let city = document.getElementById("#city");
// let state = document.getElementById("#state");
// let zip = document.getElementById("#zip");

// функция для получения данных
const GetData = async () => {
  try {
    let url = await fetch(
      "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
    );
    if (url.ok) {
      // полученные данные конвертируем в json
      const data = await url.json();
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    return { error };
  }
};

async function Main() {
  let tableBody = document.querySelector(".tableBody");
  let data = await GetData();
  let rows = 50;
  let currentPage = 1;
  // функция для отображения данных
  const GetTable = (data, rowPages, page) => {
    // обнуляем  html для показа новых данный
    tableBody.innerHTML = "";
    page--;
    // создаём диапазон для данных которые хотим вывести
    let start = rowPages * page;
    let end = start + rowPages;
    //сортируем и выставляем диапазон для данных
    let paginateData = data
      .sort(
        (a, b) =>
          a.fname.localeCompare(b.fname) ||
          a.lname.localeCompare(b.lname) ||
          a.tel - b.tel ||
          a.address.localeCompare(b.address) ||
          a.city.localeCompare(b.city) ||
          a.state.localeCompare(b.state) ||
          a.zip - b.zip
      )
      .slice(start, end);
    // отрисовываем данные
    paginateData.forEach((element) => {
      tableBody.innerHTML += `
    <tr class='tableBody_tr' >
 <td class="tableBody_tb" id="surname">${element.fname}</td>
<td class="tableBody_tb" id="name">${element.lname}</td>
<td class="tableBody_tb" id="phone">${element.tel}</td>
<td class="tableBody_tb" id="address">${element.address}</td>
<td class="tableBody_tb" id="city">${element.city}</td>
<td class="tableBody_tb" id="state">${element.state}</td>
<td class="tableBody_tb" id="zip">${element.zip}</td>
 </tr>
 `;
    });
  };

  function pagination(data, rowPag) {
    const paginationEl = document.querySelector(".pagination");
    // рассчитываем количество кнопок и округляем это число
    let pagesCount = Math.ceil(data.length / rowPag);
    let ulEl = document.createElement("ul");
    ulEl.classList.add("ul");
    // отрисовывам кнопки
    for (let i = 0; i < pagesCount; i++) {
      const liEl = paginationButton(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }
  // функция для создания кнопок
  function paginationButton(page) {
    let liEl = document.createElement("li");
    liEl.classList.add("li");
    liEl.innerText = page;
    if (currentPage == page) liEl.classList.add("active");
    // вешаем на кнопки клик и вызываем функцию, которая будет отрисовывать приходящие данные каждый раз при клике
    liEl.addEventListener("click", () => {
      currentPage = page;
      GetTable(data, rows, currentPage);

      let currentItemLi = document.querySelector("li.active");
      currentItemLi.classList.remove("active");

      liEl.classList.add("active");
    });
    return liEl;
  }

  GetTable(data, rows, currentPage);
  pagination(data, rows);
}
Main();
