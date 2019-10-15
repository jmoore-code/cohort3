const functions = {
  size: num => {
    if (num < 0) return "negative";
    if (num < 10) return "small";
    if (num < 20) return "medium";

    return "large";
  },

  // Basic Calculator functions

  add: (num1, num2) => {
    return num1 + num2;
  },

  subtract: (num1, num2) => {
    return num1 - num2;
  },

  multiply: (num1, num2) => {
    return num1 * num2;
  },

  divide: (num1, num2) => {
    return num1 / num2;
  },



  // Working with Arrays functions
  myArray: [],

  addToArray: num1 => {
    if (typeof num1 == "number") {
      functions.myArray.push(num1);
      return `The number ${num1} has been added to the array`;
    } else {
      return "Your input is not a valid number";
    }
  },

  showArrayState: () => {
    return functions.myArray.toString();
  },

  totalArray: () => {
    let x = functions.myArray.reduce((accumulator, y) => accumulator + y, 0);
    return x;
  },

  clearArray: () => {
    functions.myArray.length = 0;
    return functions.myArray.length;
  },

  // Working with Dictionaries
  myDictionary: {
    BC: "British Columbia",
    AB: "Alberta",
    SK: "Saskatchewan",
    MB: "Manitoba",
    ON: "Ontario",
    QC: "Quebec",
    NB: "New Brunswick",
    NS: "Nova Scotia",
    PE: "Prince Edward Island",
    NL: "Newfoundland and Labrador",
    YT: "Yukon",
    NT: "Northwest Territories",
    NU: "Nunavut"
  },

  myLookUp: prov => {
    if (typeof functions.myDictionary[prov] == "string") {
      return functions.myDictionary[prov];
    } else {
      return "That is not a valid Canadian provincal code";
    }
  }
};

export default functions;
