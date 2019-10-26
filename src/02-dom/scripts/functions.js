const functions = {
  // ---------------The Basic Dom functions---------------
  showList: () => {
    let x = [];
    let array = document.getElementById("myList").children;
    let i;
    for (i = 0; i < array.length; i++) {
      x.push(array[i].textContent);
    }
    // console.log(x)

    return x;
  },

  addItem: () => {
    let li = document.createElement("li");
    let ol = document.getElementById("myList");
    let listLengthPlusOne = (ol.children.length + 1).toString();
    li.setAttribute("id", listLengthPlusOne);
    li.appendChild(document.createTextNode(`Item ${listLengthPlusOne}`));
    ol.appendChild(li);
  },

  removeItem: () => {
    let liRemove = document.getElementById("myList");
    liRemove.removeChild(liRemove.lastElementChild);
  },

  // ---------Working with Cards fucntions-------------------

  counterNumber: 1,

  addCard: cardField => {
    cardField.appendChild(functions.createCard());
  },

  //  refactored code by making a createCard function to take our repeating code
  createCard: () => {
    let count = functions.counterNumber;
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("counter", count);
    newCard.textContent = `Card ${count}`;
    functions.createCardButtons(newCard);
    functions.counterNumber = functions.counterNumber + 1;
    return newCard;
  },

  createCardButtons: cardDiv => {
    let addBefore = document.createElement("button");
    addBefore.textContent = "Add Before";
    addBefore.setAttribute("class", "addBeforeButton");
    cardDiv.appendChild(addBefore);

    let addAfter = document.createElement("button");
    addAfter.textContent = "Add After";
    addAfter.setAttribute("class", "addAfterButton");
    cardDiv.appendChild(addAfter);

    let deleteBut = document.createElement("button");
    deleteBut.textContent = "Delete";
    deleteBut.setAttribute("class", "deleteButton");
    cardDiv.appendChild(deleteBut);
  },

  addCardBefore: (cardField, target) => {
    cardField.insertBefore(functions.createCard(), target);
  },

  addCardAfter: (cardField, target) => {
    cardField.insertBefore(functions.createCard(), target.nextSibling);
  },

  deleteCard: (target) => {
    target.remove(target.this)
  }
};

export default functions;
