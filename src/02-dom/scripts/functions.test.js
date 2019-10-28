import functions from "./functions.js";

test("test show list", () => {
  document.body.innerHTML =
    "<div>" +
    '<ol class="list" id="myList">' +
    '<li id="1">Item 1</li>' +
    '<li id="2">Item 2</li>' +
    // '<li id="3">Item 3</li>' +
    "</div>";
  expect(functions.showList()).toEqual(["Item 1", "Item 2"]);
  document.body.innerHTML =
    "<div>" +
    '<ol class="list" id="myList">' +
    '<li id="1">Item 1</li>' +
    '<li id="2">Item 2</li>' +
    '<li id="3">Item 3</li>' +
    "</div>";
  expect(functions.showList()).toEqual(["Item 1", "Item 2", "Item 3"]);
});

test("test add list item", () => {
  document.body.innerHTML =
    "<div>" +
    '<ol class="list" id="myList">' +
    '<li id="1">Item 1</li>' +
    '<li id="2">Item 2</li>' +
    '<li id="3">Item 3</li>' +
    "</div>";
  functions.addItem();
  expect(functions.showList()).toEqual([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
  ]);
  functions.addItem();
  expect(functions.showList()).toEqual([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ]);
});

test("test remove list item", () => {
  document.body.innerHTML =
    "<div>" +
    '<ol class="list" id="myList">' +
    '<li id="1">Item 1</li>' +
    '<li id="2">Item 2</li>' +
    '<li id="3">Item 3</li>' +
    "</div>";
  functions.removeItem();
  expect(functions.showList()).toEqual(["Item 1", "Item 2"]);
  functions.removeItem();
  expect(functions.showList()).toEqual(["Item 1"]);
});

// -------------Working with Cards tests-----------------------------

const howManyCards = node => {
  let x = [];
  let obj = node.children;
  for (let index = 0; index < obj.length; index++) {
    x.push(obj[index].getAttribute("counter"));
  }
  return x;
};

test("test how many cards", () => {
  document.body.innerHTML =
    '<div id="leftCardField">' +
    '<div class="card" counter="1">Card 1</div>' +
    '<div class="card" counter="2">Card 2</div>' +
    '<div class="card" counter="3">Card 3</div>' +
    "</div>";
  let cardField = document.getElementById("leftCardField");
  expect(howManyCards(cardField)).toEqual(["1", "2", "3"]);
});

test("test add card function", () => {
  let cardField = document.createElement("div");
  functions.addCard(cardField);
  functions.addCard(cardField);
  expect(howManyCards(cardField)).toEqual(["1", "2"]);
  functions.addCard(cardField);
  expect(howManyCards(cardField)).toEqual(["1", "2", "3"]);
});

test("test create card buttons function", () => {
  let cardDiv = document.createElement("div");
  functions.createCardButtons(cardDiv);
});

let checkButtonText = node => {
  let x = [];
  let obj = node.children;
  for (let index = 0; index < obj.length; index++) {
    if (obj[index].textContent !== "") {
    x.push(obj[index].textContent);
    }
  }
  return x;
};

test("check button text function", () => {
  let cardField = document.createElement("div");
  functions.createCardButtons(cardField);
  expect(checkButtonText(cardField)).toEqual([
    "Add Before",
    "Add After",
    "Delete"
  ]);
});

test("test add card before", () => {
  document.body.innerHTML =
    '<div id="leftCardField">' +
    '<div id="card1" counter="1">Card 1</div>' +
    "</div>";
  functions.addCardBefore(document.getElementById("leftCardField"),document.getElementById("card1"));
  let cardField = document.getElementById("leftCardField");
  expect(howManyCards(cardField)).toEqual(["4", "1"]);
});

test("does add card after", () => {
  document.body.innerHTML =
    '<div id="leftCardField">' +
    '<div id="card1" counter="1">Card 1</div>' +
    '<div id="card2" counter="2">Card 2</div>' +
    "</div>";
  let cardField = document.getElementById("leftCardField"); 
  functions.addCardAfter(cardField, document.getElementById("card1"));
  expect(howManyCards(cardField)).toEqual(["1", "5", "2"]);
  functions.addCardAfter(cardField, document.getElementById("card2"));
  expect(howManyCards(cardField)).toEqual(["1", "5", "2", "6"]);
});

test("test delete card", () => {
  document.body.innerHTML =
  '<div id="leftCardField">' +
  '<div id="card1" counter="1">Card 1</div>' +
  '<div id="card2" counter="2">Card 2</div>' +
  "</div>";
  let cardField = document.getElementById("leftCardField"); 
  functions.deleteCard(document.getElementById("card2"));
  expect(howManyCards(cardField)).toEqual(["1"]);
  functions.deleteCard(document.getElementById("card1"));
  expect(howManyCards(cardField)).toEqual([]);
})


