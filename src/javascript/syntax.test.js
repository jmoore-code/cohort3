// define attributes / variables
import functions from "./syntax";

// number

test("Is this a number?", () => {
  expect(functions.num1).toBe(5);
});

// string

test("Is this a string?", () => {
  expect(functions.string1).toBe("Hello World");
});

// boolean
test("test less than boolean", () => {
  expect(functions.lessBoolean(3, 5)).toBe(true);
  expect(functions.lessBoolean(5,3)).toBe(false);
});

test("test greater boolean", () => {
  expect(functions.greaterBoolean(5, 3)).toBe(true);
  expect(functions.greaterBoolean(3,5)).toBe(false);
});

test("test equals boolean", () => {
  expect(functions.equalsBoolean(5, 5)).toBe(true);
  expect(functions.equalsBoolean(5, 4)).toBe(false);
});
// array

test("test array", () => {
  expect(functions.array1[1]).toBe("test1");
});

// dictionary / objects

test("test object", () => {
  expect(functions.object1.firstName).toBe("Jason");
});
// undefined

test("test undefined", () => {
  expect(functions.undefined1()).toBe(undefined);
});
// sample if / else--------------------------------------------

test("test if/else", () => {
  expect(functions.conditional1(9)).toBe("Good morning");
  expect(functions.conditional1(13)).toBe("Good afternoon");
  expect(functions.conditional1(19)).toBe("Good evening");
});

// functions ------------------------------------------

// parameters
// returns

test("test multiple function", () => {
  expect(functions.multiple1(2, 2)).toBe(4);
  expect(functions.multiple1(3, 3)).toBe(9);
});

// arrays ---------------------------------------------

// add to the front

test("test array add to front", () => {
  expect(functions.addToFront("Bob")).toBe(functions.arrayTestFront[0]);
});

// add to the end

test("test array add to end", () => {
  expect(functions.addToEnd("Tim")).toBe(
    functions.arrayTestEnd[functions.arrayTestEnd.length - 1]
  );
});

// update values

test("test update value", () => {
  expect(functions.updateValue("Larry")).toBe("Larry");
});

// loops ----------------------------------------------

// for
test("test for loop", () => {
  expect(functions.myForLoop(5)).toBe(10);
});

// for/in

test("test for in loop", () => {
  expect(functions.myForInLoop()).toBe("John Doe 25 ");
});

// while

test("test while loop", () => {
  expect(functions.myWhileLoop()).toBe("BMW Volvo Saab Ford ");
});
// do while

test("test do while loop", () => {
  expect(functions.myDoWhileLoop()).toBe(10);
});

// forEach (with array and function)

test("test forEach", () => {
  expect(functions.myForEach()).toBe(125);
});

// Objects / Dictionaries ----------------------------

// lookup key to retrieve value
test("test object key lookup", () => {
  expect(functions.keyLookUp("make")).toBe("BMW");
  expect(functions.keyLookUp("color")).toBe("blue");
});
