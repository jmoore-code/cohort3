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
    
    return x
   
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
    liRemove.removeChild(liRemove.lastElementChild);
  },

// ---------Working with Cards fucntions-------------------

howManyCards: (node) => {
  let x = [];
  let obj = node.children
  for (let index = 0; index < (obj.length); index++) {
    x.push(obj[index].getAttribute("counter"));
  }
return x;
},

createCardButtons: (cardDiv) => {
  let br = document.createElement("BR")
  let addBefore = document.createElement('button');
  addBefore.textContent = "Add Before"
  addBefore.setAttribute('class', "addBeforeButton");
  cardDiv.appendChild(addBefore);
  cardDiv.insertBefore(br, cardDiv.childNodes[1])
  

  let addAfter = document.createElement('button');
  addAfter.textContent = "Add After"
  addAfter.setAttribute('class', "addAfterButton");
  cardDiv.appendChild(addAfter);

  let deleteBut = document.createElement('button');
  deleteBut.textContent = "Delete";
  deleteBut.setAttribute('class', "deleteButton");
  cardDiv.appendChild(deleteBut);
  

  
},

counterNumber: () => {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 2
      }
     return sessionStorage.clickcount; 
    }
  },    

addCard: () => {
    let x = functions.counterNumber()  
    let newCard = document.createElement('div');
    let cardField = document.getElementById('leftCardField');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('counter', x);
    newCard.textContent = `Card ${x}`;
    functions.createCardButtons(newCard);
    cardField.appendChild(newCard);


}

};

export default functions;
