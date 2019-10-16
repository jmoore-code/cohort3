import functions from "./daily";

//2019/10/16, Daily Tests

test("Test the slice function", () => {
  expect(functions.sliceFunction(1, 3)).toBe("Volvo,Mazda");
  expect(functions.sliceFunction(0, 2)).toBe("BMW,Volvo");
});

test("Test the splice function", () => {
  expect(functions.spliceFunction(0, 0, "Mercedes")).toBe(
    "Mercedes,BMW,Volvo,Mazda,Toyota"
  );
  expect(functions.spliceFunction(1, 2, "Mercedes")).toBe(
    "BMW,Mercedes,Toyota"
  );
});

test("Test forEach function", () => {
  expect(functions.forEachFunction()).toBe("BMW,Mercedes,Audi");
});

test("Test map function", () => {
  expect(functions.mapFunction()).toBe("1969,2018,2003,1977");
});

test("Test reduce function", () => {
  expect(functions.reduceFunction()).toBe(100000);
});

test("Test filter function", () => {
  expect(functions.filterFunction("Classic")).toBe("Mustang,Chevy");
});

test("Test sort fucntion", () => {
  expect(functions.sortFunction()).toBe("1969,1977,2003,2018");
});

test("Check if parm are equal", () => {
  expect(functions.assertEquals("a", "b")).toBe(false);
  expect(functions.assertEquals("a", "a")).toBe(true);
  expect(functions.assertEquals(1, 2)).toBe(false);
  expect(functions.assertEquals(2, 2)).toBe(true);
  expect(functions.assertEquals("2", 2)).toBe(false);
  expect(functions.assertEquals("This value", "This value")).toBe(true);
});

/*
    Write a function to format an email based on an array.
*/

test("email builder from an array", () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"])).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual(
    "bill.smith@evolveu.ca"
  );
});

/*	
	Write the function to format an email based on an object / map
*/

test("email builder from an object / map", () => {
  const name = { fname: "first", lname: "last" };
  expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "First", lname: "Last" })).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual(
    "bill.smith@evolveu.ca"
  );
});

// test for Daily Oct 15

test("test for loop", () => {
  expect(functions.myForLoop(5)).toBe(10);
});

test("test while loop", () => {
  expect(functions.myWhileLoop()).toBe("Jason Bob Tom ");
});

test("test do while loop", () => {
  expect(functions.myDoWhileLoop()).toBe(10);
});

test("test for in loop", () => {
  expect(functions.myForInLoop()).toBe("Jason Bob Tom ");
});

test("test for of loop", () => {
  expect(functions.myForOfLoop()).toBe("Jason Bob Tom ");
});
