const functions = {
  // 2019/11/08 Daily Exercise Call Back(Part 1)

  processAbBCPeople: (peopleData, callBack) => {
    let array = [];
    for (let index = 0; index < peopleData.length; index++) {
      if (
        peopleData[index].province === "BC" ||
        peopleData[index].province === "AB"
      ) {
        array.push(callBack(peopleData[index]));
      }
    }
    return array;
  },

  nameExtractor: obj => {
    let firstName = obj.fname;
    let lastName = obj.lname;
    return `${firstName} ${lastName}`;
  },

  // 2019/11/06 Daily Exercise More Array Exercises(Really)
  filterBalances: staffArray => {
    let filterArray = staffArray
      .filter(function(el) {
        return el.balance >= 1000;
      })
      .map(function(amount) {
        return amount.balance;
      });
    return filterArray;
  },

  // 2019/10/30 Daily Exercise

  totalSumBalances: personInput => {
    let array = personInput.map(array => array.balance);
    let arraySum = array.reduce((a, b) => a + b, 0);
    return arraySum;
  },

  averageBalance: personInput => {
    let array = personInput.map(array => array.balance);
    let arrayAvg = array.reduce((a, b) => a + b, 0) / array.length;
    return arrayAvg;
  },

  // 2019/10/25 loopStaff each/map
  loopStaffForEach: personInput => {
    let staffMember = [];
    personInput.forEach(function(element) {
      staffMember.push(functions.makeEmailObj(element));
    });
    return staffMember;
  },

  loopStaffMap: personInput => {
    const staffMember = personInput.map(function(array) {
      return functions.makeEmailObj(array);
    });
    return staffMember;
  },

  // 2019/10/25 loopStaff in/of Daily

  loopStaffIn: personInput => {
    let staffMember = [];
    let x;
    for (x in personInput) {
      staffMember.push(functions.makeEmailObj(personInput[x]));
    }
    return staffMember;
  },

  loopStaffOf: personInput => {
    let staffMember = [];
    for (const x of personInput) {
      staffMember.push(functions.makeEmailObj(x));
    }
    return staffMember;
  },

  // 2019/10/21 loopStaff
  loopStaff: personInput => {
    let staffMember = [];
    personInput.forEach(element => {
      staffMember.push(functions.makeEmailObj(element));
    });
    return staffMember;
  },

  // 2019/10/16, More Array Work

  sliceFunction: (num1, num2, input) => {
    let select = input.slice(num1, num2);
    return select.toString();
  },

  spliceFunction: (num1, num2, cars, carInput) => {
    cars.splice(num1, num2, carInput);
    return cars.toString();
  },

  forEachFunction: cars => {
    let copy = [];
    cars.forEach(addCar => {
      copy.push(addCar);
    });
    return copy.toString();
  },

  mapFunction: cars => {
    const carYear = cars.map(car => car.year);
    return carYear.toString();
  },

  reduceFunction: cars => {
    const totalKm = cars.reduce((acc, mileage) => acc + mileage.km, 0);
    return totalKm;
  },

  filterFunction: (input, cars) => {
    const selectType = cars.filter(sel => sel.type === input);
    return selectType.map(car => car.name).toString();
  },

  sortFunction: cars => {
    let ageOrder = cars.sort((a, b) => {
      return a.year - b.year;
    });
    return ageOrder.map(car => car.year).toString();
  },

  /*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

  // Write the function after this comment ---

  assertEquals: function(p1, p2) {
    if (p1 === p2) return true;
    else {
      // console.log(`*** the two values are not the same:
      //   p1--> ${p1}
      //   p2--> ${p2}`);
      return false;
    }
  },

  // and before this comment ---

  // Daily Oct 9th
  makeEmailArr: function(name) {
    let firstName = name[0].toLowerCase();
    let lastName = name[1].toLowerCase();
    return `${firstName}.${lastName}@evolveu.ca`;
  },

  // Daily Oct 11th

  makeEmailObj: name => {
    let firstName = name.fname.toLowerCase();
    let lastName = name.lname.toLowerCase();
    return `${firstName}.${lastName}@evolveu.ca`;
  },

  // Daily for Oct 15

  // for Loop
  myForLoop: p1 => {
    let i;
    let sum = 0;
    for (i = 0; i < 5; i++) {
      sum = sum + i;
    }
    return sum;
  },

  // while loop
  myWhileLoop: array1 => {
    let txt = "";
    let i = 0;
    while (i < array1.length) {
      txt += array1[i] + " ";
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

  // for in loop
  myForInLoop: array1 => {
    let txt = "";
    let x;
    for (x in array1) {
      txt += array1[x] + " ";
    }
    return txt;
  },

  // for of loop

  myForOfLoop: array1 => {
    let txt = "";
    let x;
    for (x of array1) {
      txt += x + " ";
    }
    return txt;
  }
}; // end of functions const//

export default functions;
