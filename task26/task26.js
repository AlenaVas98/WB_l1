function traversal(tree) {
  const allEl = tree.childNodes;
  console.log(allEl);
  for (let i = 0; i <= allEl.length; i++) {
    console.log(+allEl[1].children[i].innerHTML + 1);
  }
}
const body = document.body;
console.log(traversal(body));
