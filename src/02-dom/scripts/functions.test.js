import functions from "./functions.js"

test("test show list", () => {
  document.body.innerHTML = 
  '<div>' +
     '<ol class="list" id="myList">' +
        '<li id="1">Item 1</li>' +
        '<li id="2">Item 2</li>' +
        // '<li id="3">Item 3</li>' +
   '</div>'     
    expect(functions.showList()).toEqual(['Item 1', 'Item 2'])
    document.body.innerHTML = 
    '<div>' +
       '<ol class="list" id="myList">' +
          '<li id="1">Item 1</li>' +
          '<li id="2">Item 2</li>' +
          '<li id="3">Item 3</li>' +
     '</div>'
     expect(functions.showList()).toEqual(['Item 1', 'Item 2', 'Item 3']) 
});

test('test add list item', () => {
    document.body.innerHTML = 
    '<div>' +
       '<ol class="list" id="myList">' +
          '<li id="1">Item 1</li>' +
          '<li id="2">Item 2</li>' +
          '<li id="3">Item 3</li>' +
     '</div>'
     functions.addItem();
     expect(functions.showList()).toEqual(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
     functions.addItem();
     expect(functions.showList()).toEqual(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'])
})

test('test remove list item', () => {
    document.body.innerHTML = 
    '<div>' +
       '<ol class="list" id="myList">' +
          '<li id="1">Item 1</li>' +
          '<li id="2">Item 2</li>' +
          '<li id="3">Item 3</li>' +
     '</div>'
     functions.removeItem();
     expect(functions.showList()).toEqual(['Item 1', 'Item 2'])
     functions.removeItem();
     expect(functions.showList()).toEqual(['Item 1'])
})


// -------------Working with Cards tests-----------------------------

test('test how many cards', () => {
    document.body.innerHTML = 
    '<div id="leftCardField">' +
        '<div class="card" id="idCard1">Card 1</div>' +
        '<div class="card" id="idCard2">Card 2</div>' +
        '<div class="card" id="idCard3">Card 3</div>' +
    '</div>'
    let cardField = document.getElementById("leftCardField");
    expect(functions.howManyCards(cardField)).toEqual(["idCard1", "idCard2", "idCard3"])
 
});

test('test add card function', () => {
    document.body.innerHTML = 
    '<div id="leftCardField">' +
        '<div class="card" id="idCard1">Card 1</div>' +
    '</div>'
    functions.addCard()
    let cardField = document.getElementById("leftCardField");
    expect(functions.howManyCards(cardField)).toEqual(["idCard1", "idCard2"]);
    functions.addCard()
    expect(functions.howManyCards(cardField)).toEqual(["idCard1", "idCard2","idCard3"]);

})