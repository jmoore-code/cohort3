import functions from "./2019-10-21-domp1"

const myDiv = document.createElement("div");

test("test add card", () => {
    let counter = 0;
    functions.addCard(myDiv,counter)
});




test("test what cards", () => {
    const myDiv2 = document.createElement("div");
    functions.addCard(myDiv2,1);
    functions.addCard(myDiv2,2);
    functions.addCard(myDiv2,3);
    expect(functions.whatCards(myDiv2)).toEqual([1,2,3])
    functions.addCard(myDiv2,4);
    expect(functions.whatCards(myDiv2)).toEqual([1,2,3,4])
})