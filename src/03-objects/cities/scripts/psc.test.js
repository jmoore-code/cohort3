import psc from "./psc"

const testCities = {
    "1": { "key": 1, "city": "Calgary", "lat": 51.05, "long": -114.05, "pop":1500000 },
    "2": { "key": 2, "city": "Edmonton", "lat": 53.55, "long": -113.49, "pop":800000},
    "3": { "key": 3, "city": "Red Deer", "lat": 52.28, "long": -113.81, "pop":200000}
}

test("test show method in city class", () => {
    let cityInst = new psc.city("Calgary", 51.05, -114.05, 1500000);
    expect(cityInst.show()).toBe("Calgary 51.05 -114.05 1500000");
    let cityInst2 = new psc.city("Edmonton", 53.55, -113.49, 800000);
    expect(cityInst2.show()).toBe("Edmonton 53.55 -113.49 800000")
})