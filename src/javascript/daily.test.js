import functions from "./daily";
test("Three ways of functions", () => {
  let myArray = [
    {num: 5,str: "apples", origin:"BC"},
    {num: 7,str: "oranges", origin:"Florida"},
    {num: 2,str: "lemons", origin:"Mexico"},
    {num: 8,str: "bananas", origin:"Ecuador"},
    {num: 6,str: "avocados", origin:"Mexico"},
    {num: 4,str: "pineapple", origin:"Brazil"},
    {num: 3,str: "blueberries", origin:"Chile"},
    {num: 9,str: "pears", origin:"Oregon"},
    {num: 1,str: "cantaloupe", origin:"California"}
  ];
  expect(functions.sortAscending(myArray)[0]).toEqual({num: 1,str: "cantaloupe", origin:"California"})
  expect(functions.sortAscending(myArray)[1]).toEqual({num: 2,str: "lemons", origin:"Mexico"})
  expect(functions.sortAlpha(myArray)[0]).toEqual({num: 5,str: "apples", origin:"BC"})
  expect(functions.sortAlpha(myArray)[1]).toEqual({num: 6,str: "avocados", origin:"Mexico"})
  expect(functions.sortOriginReverse(myArray)[0]).toEqual({num: 9,str: "pears", origin:"Oregon"})
  expect(functions.sortOriginReverse(myArray)[3]).toEqual({num: 7,str: "oranges", origin:"Florida"})
})






//2019/11/21
test("test bc ab generic filter 2", () => {
  let dummyFunc = obj => obj;
  expect(functions.processAbBCPeople2(people, dummyFunc)[0]).toEqual({
    fname: "Alex",
    lname: "Smith",
    province: "BC",
    age: 33
  });
  expect(functions.processAbBCPeople2(people, dummyFunc)[2]).toEqual({
    fname: "Byron", lname: "Cardenas", province: "BC", age: 38
  });
});


test("test total people, total age, and average age", () => {
  const people2 = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  ]
  expect(functions.lengthAge(people2)).toEqual({numPeople: 2, totalAge: 94, avgAge: 47})
  const people3 = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  ]
  expect(functions.lengthAge(people3)).toEqual({numPeople: 3, totalAge: 129, avgAge: 43})
})


test('test processAbBCPeople2 and lengthAge together', () => {
  expect(functions.processAbBCPeople2(people, functions.lengthAge)).toEqual({ numPeople: 22, totalAge: 838, avgAge: 38 })
})



// 2019/11/08
const people = [
  { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
  { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
  { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
  { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
  { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
  { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
  { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
  { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
  { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
  { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
  { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
  { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
  { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
  { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
  { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
  { fname: "James", lname: "Kramer", province: "AB", age: 57 },
  { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
  { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
  { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
  { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
  { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
  { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
  { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
  { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
  { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
  { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
  { fname: "Luis", lname: "Price", province: "BC", age: 23 },
  { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
  { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
  { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
  { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
  { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
  { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
  { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
  { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
  { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
  { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
  { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
  { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
  { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
  { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
  { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

test("test bc ab generic filter", () => {
  let dummyFunc = obj => obj;
  expect(functions.processAbBCPeople(people, dummyFunc)[0]).toEqual({
    fname: "Alex",
    lname: "Smith",
    province: "BC",
    age: 33
  });
  expect(functions.processAbBCPeople(people, dummyFunc)[1]).toEqual({
    fname: "Angela",
    lname: "Jones",
    province: "AB",
    age: 61
  });
});

test("test name extractor", () => {
  expect(functions.nameExtractor(people[0])).toEqual("Alex Smith");
  expect(functions.nameExtractor(people[1])).toEqual("Angela Jones");
});

test("bc/ab filter and name extractor together", () => {
  expect(
    functions.processAbBCPeople(people, functions.nameExtractor)[0]
  ).toEqual("Alex Smith");
  expect(
    functions.processAbBCPeople(people, functions.nameExtractor)[1]
  ).toEqual("Angela Jones");
  expect(functions.processAbBCPeople(people, functions.nameExtractor)[2]).toEqual("Byron Cardenas")
});

const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 }
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

// 2019/11/06

test("test filterBalances functions", () => {
  const balanceArray = functions.filterBalances(data.staff);
  expect(balanceArray[0]).toBe(1000);
  expect(balanceArray[1]).toBe(1330);
});

// 2019/10/30 Daily Exercise

test("test total sum function", () => {
  expect(functions.totalSumBalances(data.staff)).toBe(3823);
});

test("test average array function", () => {
  expect(functions.averageBalance(data.staff)).toBeCloseTo(546.14);
});

// 2019/10/25 Daily Exercise

test("test email builder for each", () => {
  const staffEmail = functions.loopStaffForEach(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("test email builder map", () => {
  const staffEmail = functions.loopStaffMap(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

// 2019/10/24 Daily Exercise
test("test email builder for-in loop", () => {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("test email builder for-of loop", () => {
  const staffEmail = functions.loopStaffOf(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

// 2019/10/21 Daily Exercise
test("test email builder for company", () => {
  const staffEmail = functions.loopStaff(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
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
