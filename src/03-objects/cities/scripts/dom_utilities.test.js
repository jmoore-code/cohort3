import domUtilities from "./dom_utilities.js"

const clients = [
    { key: 1, city: "Calgary", lat: 51.05, long: -114.05, pop: 1500000 },
    { key: 2, city: "Edmonton", lat: 53.55, long: -113.49, pop: 800000 },
    { key: 3, city: "Red Deer", lat: 52.28, long: -113.81, pop: 200000 },
    { key: 4, city: "Rio de Janeiro", lat: -22.91, long: -43.17, pop: 6000000 }
  ];

  const clients2 = [
    { key: 5, city: "Red Deer", lat: 50.05, long: -114.05, pop: 100000 }
  ]

  //divCardKeys is a helper function to return an array of div keys to test dom manipulation

 const divCardKeys = node => {
     let array = []
     let cities = node.children;
     for (let index = 0; index < cities.length; index++) {
         array.push(cities[index].getAttribute("key"));         
     }
     return array;
 }
 
  test("test create city card function", () => {
      let cityCardGrid = document.createElement("div");
    domUtilities.createCityCard(cityCardGrid, []);
    expect(divCardKeys(cityCardGrid)).toEqual([]);
    domUtilities.createCityCard(cityCardGrid, clients);
    expect(divCardKeys(cityCardGrid)).toEqual(["1", "2", "3","4" ]);
    domUtilities.createCityCard(cityCardGrid, clients2)
    expect(divCardKeys(cityCardGrid)).toEqual(["1", "2", "3","4", "5" ]);
  })

  test("test delete card", () => {
    let cityCardGrid = document.createElement("div");
    domUtilities.createCityCard(cityCardGrid, clients);
    domUtilities.deleteCard(cityCardGrid.children[1]);
    expect(divCardKeys(cityCardGrid)).toEqual(["1", "3","4" ]);
    domUtilities.deleteCard(cityCardGrid.children[0]);
    expect(divCardKeys(cityCardGrid)).toEqual(["3","4" ]);
  });