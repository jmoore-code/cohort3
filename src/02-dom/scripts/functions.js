const functions = {
  showList: () => {
    let array = document.getElementById("myList").children;
    let i;
    for (i = 0; i < array.length; i++) {
      console.log(array[i].textContent);
    }
  },

  addItem: () => {
    let li = document.createElement("li");
    let ol = document.getElementById("myList");
    let listLengthPlusOne = (ol.children.length + 1).toString();
    li.setAttribute('id', listLengthPlusOne)
    li.appendChild(document.createTextNode(`Item ${listLengthPlusOne}`))
    ol.appendChild(li);
  },

  removeItem: () => {
    let liRemove = document.getElementById("myList");
    console.log(liRemove.childNodes)
    liRemove.removeChild(liRemove.lastElementChild);
  }
};

export default functions;
