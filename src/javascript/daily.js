const functions = {

// 2019/10/16, More Array Work

sliceFunction: (num1,num2) => {
  const cars = ["BMW", "Volvo", "Mazda", "Toyota"]
  let select = cars.slice(num1,num2);
  return select.toString();
  },
  
  spliceFunction: (num1, num2, carInput) => {
    const cars = ["BMW", "Volvo", "Mazda", "Toyota"]
    cars.splice(num1,num2, carInput)
    return cars.toString();
  },

forEachFunction: () => {
  const cars = ["BMW", "Mercedes", "Audi"];
  let copy = []; 
  cars.forEach(function(addCar) {
    copy.push(addCar);
  })
  return copy.toString();
},

// object to use for map, reduce, filter, and sort
cars: [
  { year: 1969, name: 'Mustang', km: 20000, type: "Classic"},
  { year: 2018, name: 'Lambo', km: 10000, type: "Modern" },
  { year: 2003, name: 'Mazda', km: 30000, type: "Modern" },
  { year: 1977, name: 'Chevy', km: 40000, type: "Classic" }
],

mapFunction: () => {
  const carYear = functions.cars.map(car => car.year);
  return carYear.toString();
},

reduceFunction: () => {
  const totalKm =  functions.cars.reduce((acc, mileage) => 
  acc + mileage.km, 0);
  return totalKm;
},

filterFunction: (input) => {
  const selectType = functions.cars.filter(sel => sel.type === input);
  return selectType.map(car => car.name).toString();
},

sortFunction: () => {
  let ageOrder = functions.cars.sort(function(a,b){return a.year - b.year})
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
    // console.log(p1,p2);
    if (p1 === p2) return true;
    else if (p1 !== p2) {
      // console.log(`*** the two values are not the same: 
      //   p1--> ${p1} 
      //   p2--> ${p2}`);
    }
    return false;
  },

  // and before this comment ---

  // Daily Oct 9th
  makeEmailArr: function(name) {
    let firstName = name[0].toLowerCase();
    let lastName = name[1].toLowerCase();
    return `${firstName}.${lastName}@evolveu.ca`;
  },

  // Daily Oct 11th 

  makeEmailObj: (name) => {
    let firstName = name.fname.toLowerCase();
    let lastName = name.lname.toLowerCase();
    return `${firstName}.${lastName}@evolveu.ca`;
  },

  // Daily for Oct 15

  array1: ["Jason", "Bob", "Tom"],

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
  myWhileLoop: () => {
    let txt = "";
    let i = 0;
    while (i < functions.array1.length) {
      txt += functions.array1[i] + " ";
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
  myForInLoop: () => {
    let txt = "";
    let x;
    for (x in functions.array1) {
      txt += functions.array1[x] + " ";
    }
    return txt;
  },

  // for of loop

  myForOfLoop: () => {
    let txt = "";
    let x;
    for (x of functions.array1) {
      txt += x + " ";
    }
    return txt;
  },


}; // end of functions const//

export default functions;
