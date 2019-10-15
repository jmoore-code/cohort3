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

const functions = {
  assertEquals: function(p1, p2) {
    // console.log(p1,p2);
    if (p1 === p2) return true;
    else if (p1 !== p2) {
      console.log(`*** the two values are not the same: 
        p1--> ${p1} 
        p2--> ${p2}`);
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
  }
}; // end of functions const//

export default functions;
