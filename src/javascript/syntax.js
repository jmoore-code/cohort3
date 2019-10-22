const functions = {
  // define attributes / variables ------------------------------------

  // number
  num1: 5,

  // string
  string1: "Hello World",

  // boolean
  lessBoolean: (x, y) => {
    if (x < y) {
      return true
    } else return false;
  },

  greaterBoolean: (x, y) => {
    if (x > y) {
      return true
    } else return false;
  },

  equalsBoolean: (x, y) => {
    if (x == y) {
      return true
    } else return false;
  },

  // array

  array1: ["test0", "test1"],

  // dictionary / objects

  object1: {
    firstName: "Jason",
    lastName: "Moore"
  },

  // undefined

  undefined1: () => {
    const x = undefined;
  },

  // sample if / else ------------------------------------

  conditional1: time => {
    if (time < 10) {
      return "Good morning";
    } else if (time < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  },

  // functions ------------------------------------------

  // parameters
  // returns

  multiple1: (a, b) => {
    return a * b;
  },

  // arrays ---------------------------------------------

  // add to the front
  arrayTestFront: ["Jason", "Katie"],
  addToFront: name => {
    functions.arrayTestFront.unshift(name);
    return functions.arrayTestFront[0];
  },

  // add to the end
  arrayTestEnd: ["Jason", "Katie"],
  addToEnd: name => {
    functions.arrayTestEnd.push(name);
    return functions.arrayTestEnd[functions.arrayTestEnd.length - 1];
  },

  // update values
  arrayTestUpdate: ["Jason", "Katie"],
  updateValue: name => {
    functions.arrayTestUpdate[0] = name;
    return functions.arrayTestUpdate[0];
  },

  // loops ----------------------------------------------

  // for
  myForLoop: p1 => {
    let i;
    let sum = 0;
    for (i = 0; i < 5; i++) {
      sum = sum + i;
    }
    return sum;
  },

  // for/in

  forInObj: { fname: "John", lname: "Doe", age: 25 },
  myForInLoop: () => {
    let txt = "";
    let x;
    for (x in functions.forInObj) {
      txt += functions.forInObj[x] + " ";
    }
    return txt;
  },

  // while

  whileArray: ["BMW", "Volvo", "Saab", "Ford"],
  myWhileLoop: () => {
    let txt = "";
    let i = 0;
    while (i < functions.whileArray.length) {
      txt += functions.whileArray[i] + " ";
      i++;
    }
    return txt;
  },

  // do while

  myDoWhileLoop: () => {
    let i = 0;
    let sum = 0;
    do {
      sum = sum + i;
      i++;
    } while (i < 5);
    return sum;
  },

  // forEach (with array and function)

  myForEach: () => {
    let sum = 0;
    let numbers = [65, 44, 12, 4];
    numbers.forEach(myFunction);
    function myFunction(item) {
      sum += item;
    }
    return sum;
  },

  // Objects / Dictionaries ----------------------------

  // declare object
  carObj: { make: "BMW", color: "blue", year: 2018 },

  // lookup key to retrieve value

  keyLookUp: key => {
    const carObj = { make: "BMW", color: "blue", year: 2018 };
    let carValue = carObj[key];
    return carValue;
  }
};
export default functions;
