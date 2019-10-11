// define attributes / variables
import functions from "./syntax";

// number

test("Is this a number?", () => {
  expect(functions.num1).toBe(5);
  console.log("true");
});

// string

test("Is this a string?", () => {
  expect(functions.string1).toBe("Hello World");
  console.log("true");
});

// boolean
test("test less than boolean", () => {
  expect(functions.lessBoolean(3, 5)).toBe(true);
});

test("test greater boolean", () => {
  expect(functions.greaterBoolean(5, 3)).toBe(true);
});

test("test equals boolean", () => {
  expect(functions.equalsBoolean(5, 5)).toBe(true);
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

test("test multiple function", ()=> {
    expect(functions.multiple1(2,2)).toBe(4);

});

// returns

// arrays ---------------------------------------------

// add to the front

// add to the end

// update values

// loops ----------------------------------------------

// for

// for/in

// while

// do while

// forEach (with array and function)

// Objects / Dictionaries ----------------------------

// declare object

// lookup key to retrieve value
