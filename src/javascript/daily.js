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

assertEquals: function(p1,p2) {
    // console.log(p1,p2);
    if (p1 === p2) return true
    else if (p1 !== p2) {
       
        console.log(`*** the two values are not the same: 
        p1--> ${p1} 
        p2--> ${p2}`);
 

    }
    return false  
},


// and before this comment ---


makeEmailArr: function(name) {
    let firstName = name[0].toLowerCase();
    let lastName = name[1].toLowerCase();
    return `${firstName}.${lastName}@evolveu.ca`;
}



} // end of functions const//

export default functions