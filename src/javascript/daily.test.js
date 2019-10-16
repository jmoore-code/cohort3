import functions from "./daily";

// test("Me playing", () => {
//     console.log("Hellow World");
// });

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

test('email builder from an object / map', () => {
  const name = { fname: 'first', lname: 'last' };
  expect(functions.makeEmailObj(name))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
      .toEqual("bill.smith@evolveu.ca");
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
