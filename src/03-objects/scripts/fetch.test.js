import functions from "./fetch.js"

const data = [
  { name: "Sarah", surname: "Marechal", gender: "female", region: "France" },
  { name: "Sárosi", surname: "Odett", gender: "female", region: "Hungary" },
  { name: "Rolf", surname: "Olsen", gender: "male", region: "Norway" },
  { name: "Mahir", surname: "Kandemir", gender: "male", region: "Turkey" },
  { name: "Кира", surname: "Соколовa", gender: "female", region: "Russia" },
  { name: "Varvara", surname: "Liiceanu", gender: "female", region: "Romania" },
  { name: "阿部", surname: "彩乃", gender: "female", region: "Japan" },
  { name: "Naresh", surname: "Bahukaji", gender: "male", region: "Nepal" },
  { name: "Elvira", surname: "Francisco", gender: "female", region: "Mexico" },
  { name: "Csorba", surname: "Nóra", gender: "female", region: "Hungary" }
];

test("test get first name", () => {
    expect(functions.getFirstName(data[0])).toEqual("Sarah");
    expect(functions.getFirstName(data[1])).toEqual("Sárosi");
})

test("test get all first names", () => {
    expect(functions.getAllFirstNames(data)[0]).toEqual("Sarah");
    expect(functions.getAllFirstNames(data)[1]).toEqual("Sárosi");
})