const functions = {
  // define attributes / variables ------------------------------------

  // number
  num1: 5,

  // string
  string1: "Hello World",

  // boolean
  lessBoolean: (x, y) => {
    if (x < y) return true;
  },

  greaterBoolean: (x, y) => {
    if (x > y) return true;
  },

  equalsBoolean: (x, y) => {
    if (x == y) return true;
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
      const x = undefined
      
  },

  // sample if / else ------------------------------------

  conditional1: (time) => {
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

  multiple1: (a,b) => {
    return a*b;
  }

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
};
export default functions;
