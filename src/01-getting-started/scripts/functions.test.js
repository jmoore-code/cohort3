import functions from "./functions";
import taxLogic from "./taxcalc";


test("Check the sizes", () => {
  expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
  expect(functions.size(0)).toBe("small");
  expect(functions.size(10)).toBe("medium");
  expect(functions.size(15)).toBe("medium");
  expect(functions.size(20)).toBe("large");
  expect(functions.size(2000000)).toBe("large");
});

// Basic calculator tests

test("Does that add function work?", () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(101, 202)).toBe(303);
});

test("Does the subtract function work?", () => {
  expect(functions.subtract(3, 2)).toBe(1);
  expect(functions.subtract(1, 1)).toBe(0);
  expect(functions.subtract(-1, 1)).toBe(-2);
  expect(functions.subtract(-1, -1)).toBe(0);
});

test("Does the multiply function work?", () => {
  expect(functions.multiply(2, 2)).toBe(4);
  expect(functions.multiply(1, 0)).toBe(0);
  expect(functions.multiply(-2, 2)).toBe(-4);
  expect(functions.multiply(100, 2)).toBe(200);
});

test("Does the divide function work?", () => {
  expect(functions.divide(4, 2)).toBe(2);
  expect(functions.divide(1, 0)).toBe(Infinity);
  expect(functions.divide(-4, 2)).toBe(-2);
  expect(functions.divide(20, 100)).toBe(0.2);
});

// Tax calculator tests

test("Does the tax calculator work?", () => {
  expect(taxLogic.taxCalculator(2)).toBe(0.3);
  expect(taxLogic.taxCalculator(47630)).toBe(7144.5);
  expect(taxLogic.taxCalculator(50000)).toBe(7630.35);
  expect(taxLogic.taxCalculator(95259)).toBe(16908.445);
  expect(taxLogic.taxCalculator(100000)).toBe(18141.105);
  expect(taxLogic.taxCalculator(147667)).toBe(30534.525);
  expect(taxLogic.taxCalculator(150000)).toBe(31211.095);
  expect(taxLogic.taxCalculator(210371)).toBe(48718.685);
  expect(taxLogic.taxCalculator(250000)).toBe(61796.255);
});

// Working with Array tests

test("Does the add to array work?", () => {
  expect(functions.addToArray(1)).toBe(
    "The number 1 has been added to the array"
  );
  expect(functions.addToArray(0)).toBe(
    "The number 0 has been added to the array"
  );
  expect(functions.addToArray(9)).toBe(
    "The number 9 has been added to the array"
  );
  expect(functions.addToArray("bob")).toBe("Your input is not a valid number");
});

test("Does show array state work?", () => {
  expect(functions.showArrayState()).toBe("1,0,9");
});

test("Does the array total work?", () => {
  expect(functions.totalArray()).toBe(10);
});

test("Does clear array work?", () => {
  expect(functions.clearArray()).toBe(0);
});

// Test for working with dictionaries

test("Does the lookup work?", () => {
  expect(functions.myLookUp("AB")).toBe("Alberta");
  expect(functions.myLookUp("BC")).toBe("British Columbia");
  expect(functions.myLookUp("ZZ")).toBe("That is not a valid Canadian provincal code");
});
