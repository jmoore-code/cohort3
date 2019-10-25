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

},

counterNumber: 2,

addCard: () => {
    let x = functions.counterNumber  
    let newCard = document.createElement('div');
    let cardField = document.getElementById('leftCardField');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('counter', x);
    newCard.textContent = `Card ${x}`;
    cardField.appendChild(newCard);
    functions.counterNumber = functions.counterNumber +1;


}



};

export default functions;
