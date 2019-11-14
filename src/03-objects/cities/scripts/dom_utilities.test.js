import domUtilities from "./dom_utilities.js"

const clients = [
    { key: 1, city: "Calgary", lat: 51.05, long: -114.05, pop: 1500000 },
    { key: 2, city: "Edmonton", lat: 53.55, long: -113.49, pop: 800000 },
    { key: 3, city: "Red Deer", lat: 52.28, long: -113.81, pop: 200000 },
    { key: 4, city: "Rio de Janeiro", lat: -22.91, long: -43.17, pop: 6000000 }
  ];

  //divCardKeys is a helper function to return an array of div keys to test dom manipulation

 const divCardKeys = node => {
     let array = []
     let accounts = node.children;
     for (let index = 0; index < accounts.length; index++) {
         array.push(accounts[index].getAttribute("key"));         
     }
     return array;
 }
 
  test("test create city card function", () => {
      let cityCardGrid = document.createElement("div");
    domUtilities.createCityCard(cityCardGrid, {});
    expect(divCardKeys(cityCardGrid)).toEqual([]);
    domUtilities.createCityCard(cityCardGrid, clients[0]);
    expect(divCardKeys(cityCardGrid)).toEqual(["1"]);
  })