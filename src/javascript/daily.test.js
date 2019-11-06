import functions from "./daily";


const data = {
  staff: [
      { fname: "Jane", lname: "Smith", balance: 10 },
      { fname: "Liam", lname: "Henry", balance: 1000 },
      { fname: "Emma", lname: "Jones", balance: 1330 },
      { fname: "Olivia", lname: "Notly", balance: 310 },
      { fname: "Noah", lname: "Ho", balance: 503 },
      { fname: "William", lname: "Lee", balance: 520 },
      { fname: "Benjamin", lname: "Amis", balance: 150 },
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

// 2019/11/06

test("test filterBalances functions", () => {
  const balanceArray = functions.filterBalances(data.staff)
  expect(balanceArray[0]).toBe(1000);
  expect(balanceArray[1]).toBe(1330);
})

// 2019/10/30 Daily Exercise

test("test total sum function", () => {
  expect(functions.totalSumBalances(data.staff)).toBe(3823)
})

test("test average array function", () => {
  expect(functions.averageBalance(data.staff)).toBeCloseTo(546.14)
})

// 2019/10/25 Daily Exercise

test("test email builder for each", () => {
  const staffEmail = functions.loopStaffForEach(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3])
  .toEqual("olivia.notly@evolveu.ca");
expect(staffEmail[6])
  .toEqual("benjamin.amis@evolveu.ca");
})

test("test email builder map", () => {
  const staffEmail = functions.loopStaffMap(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3])
  .toEqual("olivia.notly@evolveu.ca");
expect(staffEmail[6])
  .toEqual("benjamin.amis@evolveu.ca");
} )

// 2019/10/24 Daily Exercise
test("test email builder for-in loop", ()=> {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3])
  .toEqual("olivia.notly@evolveu.ca");
expect(staffEmail[6])
  .toEqual("benjamin.amis@evolveu.ca");
})

test('test email builder for-of loop', () => {
  const staffEmail = functions.loopStaffOf(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3])
  .toEqual("olivia.notly@evolveu.ca");
expect(staffEmail[6])
  .toEqual("benjamin.amis@evolveu.ca");
})

// 2019/10/21 Daily Exercise
test('test email builder for company', () => {
  const staffEmail = functions.loopStaff(data.staff);
  expect(staffEmail[0])
      .toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3])
      .toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6])
      .toEqual("benjamin.amis@evolveu.ca");
});

//2019/10/16, Daily Tests

test("Test the slice function", () => {
  const cars = ["BMW", "Volvo", "Mazda", "Toyota"];
  expect(functions.sliceFunction(1, 3, cars)).toBe("Volvo,Mazda");
  expect(functions.sliceFunction(0, 2, cars)).toBe("BMW,Volvo");
});

test("Test the splice function", () => {
  const cars = ["BMW", "Volvo", "Mazda", "Toyota"];
  const cars2 = ["BMW", "Volvo", "Mazda", "Toyota"];
  expect(functions.spliceFunction(0, 0, cars, "Mercedes")).toBe(
    "Mercedes,BMW,Volvo,Mazda,Toyota"
  );
  expect(functions.spliceFunction(1, 2, cars2, "Mercedes")).toBe(
    "BMW,Mercedes,Toyota"
  );
});

test("Test forEach function", () => {
  const cars = ["BMW", "Mercedes", "Audi"];
  expect(functions.forEachFunction(cars)).toBe("BMW,Mercedes,Audi");
});

test("Test map function", () => {
  const carsObj = [
    { year: 1969, name: "Mustang", km: 20000, type: "Classic" },
    { year: 2018, name: "Lambo", km: 10000, type: "Modern" },
    { year: 2003, name: "Mazda", km: 30000, type: "Modern" },
    { year: 1977, name: "Chevy", km: 40000, type: "Classic" }
  ];
  expect(functions.mapFunction(carsObj)).toBe("1969,2018,2003,1977");
});

test("Test reduce function", () => {
  const carsObj = [
    { year: 1969, name: "Mustang", km: 20000, type: "Classic" },
    { year: 2018, name: "Lambo", km: 10000, type: "Modern" },
    { year: 2003, name: "Mazda", km: 30000, type: "Modern" },
    { year: 1977, name: "Chevy", km: 40000, type: "Classic" }
  ];
  expect(functions.reduceFunction(carsObj)).toBe(100000);
});

test("Test filter function", () => {
  const carsObj = [
    { year: 1969, name: "Mustang", km: 20000, type: "Classic" },
    { year: 2018, name: "Lambo", km: 10000, type: "Modern" },
    { year: 2003, name: "Mazda", km: 30000, type: "Modern" },
    { year: 1977, name: "Chevy", km: 40000, type: "Classic" }
  ];
  expect(functions.filterFunction("Classic", carsObj)).toBe("Mustang,Chevy");
});

test("Test sort fucntion", () => {
  const carsObj = [
    { year: 1969, name: "Mustang", km: 20000, type: "Classic" },
    { year: 2018, name: "Lambo", km: 10000, type: "Modern" },
    { year: 2003, name: "Mazda", km: 30000, type: "Modern" },
    { year: 1977, name: "Chevy", km: 40000, type: "Classic" }
  ];
  expect(functions.sortFunction(carsObj)).toBe("1969,1977,2003,2018");
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
  const array1 = ["Jason", "Bob", "Tom"];
  expect(functions.myWhileLoop(array1)).toBe("Jason Bob Tom ");
});

test("test do while loop", () => {
  expect(functions.myDoWhileLoop()).toBe(10);
});

test("test for in loop", () => {
  const array1 = ["Jason", "Bob", "Tom"];
  expect(functions.myForInLoop(array1)).toBe("Jason Bob Tom ");
});

test("test for of loop", () => {
  const array1 = ["Jason", "Bob", "Tom"];
  expect(functions.myForOfLoop(array1)).toBe("Jason Bob Tom ");
});
