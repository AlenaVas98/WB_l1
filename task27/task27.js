let div = document.querySelector(".red");

div.addEventListener("click", () => {
  div.style.backgroundColor = "green";
  div.style.top = "50px";
  div.style.left = "50px";
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.transition = "all 2s";
});
