import psc from "./psc"


test("test show method in city class", () => {
    let cityInst = new psc.city(1, "Calgary", 51.05, -114.05, 1500000);
    expect(cityInst.show()).toBe("City: Calgary, lat: 51.05, long: -114.05, Population: 1500000");
    let cityInst2 = new psc.city(2, "Edmonton", 53.55, -113.49, 800000);
    expect(cityInst2.show()).toBe("City: Edmonton, lat: 53.55, long: -113.49, Population: 800000")
})

test("test move in method in city class", () => {
    let cityInst = new psc.city(1, "Calgary", 51.05, -114.05, 1500000);
    cityInst.moveIn(10);
    expect(cityInst.pop).toBe(1500010)
    cityInst.moveIn(40);
    expect(cityInst.pop).toBe(1500050)
})

test("test move out method in city class", () => {
    let cityInst = new psc.city(1, "Calgary", 51.05, -114.05, 1500000);
    cityInst.moveOut(10);
    expect(cityInst.pop).toBe(1499990)
    cityInst.moveOut(40);
    expect(cityInst.pop).toBe(1499950)
})

test("test how big method in city class", () => {
    let cityInst = new psc.city(1, "City size", 51.05, -114.05, 100001);
    expect(cityInst.howBig()).toBe("City");
    cityInst.moveOut(1)
    expect(cityInst.howBig()).toBe("Large Town")
    cityInst.moveOut(80000)
    expect(cityInst.howBig()).toBe("Town")
    cityInst.moveOut(19000)
    expect(cityInst.howBig()).toBe("Village")
    cityInst.moveOut(900)
    expect(cityInst.howBig()).toBe("Hamlet")
    cityInst.moveOut(900)
    expect(cityInst.howBig()).toBe("Zombieland")
})

test("create city method in community class", () => {
    let communityInst = new psc.community();
    expect(communityInst.createCity("Calgary", 51.05, -114.05, 1500000)).toBe("Calgary has been added to the database")
    expect(communityInst.cityList[0]).toEqual({ "key": 1, "city": "Calgary", "lat": 51.05, "long": -114.05, "pop":1500000 })
    expect(communityInst.createCity("Edmonton", 53.55, -113.49, 800000)).toBe("Edmonton has been added to the database")
    expect(communityInst.cityList[1]).toEqual({ "key": 2, "city": "Edmonton", "lat": 53.55, "long": -113.49, "pop":800000})
    expect(communityInst.createCity("Calgary", 51.05, -114.05, 1500000)).toBe("Error: a location already has those coordinates")
})
test("test whichSphere method in community class", () => {
    let communityInst = new psc.community();
    communityInst.createCity("Calgary", 51.05, -114.05, 1500000)
    communityInst.createCity("Rio de Janeiro", -22.91, -43.17, 6476631)
    expect(communityInst.whichSphere("Calgary")).toBe("Northern Hemisphere");
    expect(communityInst.whichSphere("Rio de Janeiro")).toBe("Southern Hemisphere");
})

test("test getMostNorthern method in community class", () => {
    let communityInst = new psc.community();
    communityInst.createCity("Calgary", 51.05, -114.05, 1500000)
    communityInst.createCity("Rio de Janeiro", -22.91, -43.17, 6476631)
    expect(communityInst.getMostNorthern()).toEqual({"key": 1, "city": "Calgary", "lat": 51.05, "long": -114.05, "pop":1500000 })
    communityInst.createCity("Edmonton", 53.55, -113.49, 800000)
    expect(communityInst.getMostNorthern()).toEqual({ "key": 3, "city": "Edmonton", "lat": 53.55, "long": -113.49, "pop":800000})
})

test("test getMostSouthern method in community class", () => {
    let communityInst = new psc.community();
    communityInst.createCity("Calgary", 51.05, -114.05, 1500000)
    communityInst.createCity("Edmonton", 53.55, -113.49, 800000)
    expect(communityInst.getMostSouthern()).toEqual({"key": 1, "city": "Calgary", "lat": 51.05, "long": -114.05, "pop":1500000 })
    communityInst.createCity("Rio de Janeiro", -22.91, -43.17, 6476631)
    expect(communityInst.getMostSouthern()).toEqual({"key": 3, "city": "Rio de Janeiro", "lat": -22.91, "long": -43.17, "pop": 6476631})
})

test("test getPopulation method in community class", () => {
    let communityInst = new psc.community();
    communityInst.createCity("Calgary", 51.05, -114.05, 1500000)
    communityInst.createCity("Edmonton", 53.55, -113.49, 800000)
    expect(communityInst.getPopulation()).toEqual(2300000)
    communityInst.createCity("Rio de Janeiro", -22.91, -43.17, 6000000)
    expect(communityInst.getPopulation()).toEqual(8300000)
})

test("test deleteCity method in community class", () => {
    let communityInst = new psc.community();
    communityInst.createCity("Calgary", 51.05, -114.05, 1500000)
    communityInst.createCity("Edmonton", 53.55, -113.49, 800000)
    communityInst.createCity("Rio de Janeiro", -22.91, -43.17, 6000000)
    communityInst.deleteCity(2);
    expect(communityInst.cityList[1]).toEqual({"key": 3, "city": "Rio de Janeiro", "lat": -22.91, "long": -43.17, "pop": 6000000})
    expect(communityInst.cityList.length).toBe(2)
   
})

test("test getHighestKey method in community class", () => {
    let communityInst = new psc.community();
    communityInst.createCity("Calgary", 51.05, -114.05, 1500000)
    communityInst.createCity("Edmonton", 53.55, -113.49, 800000)
    expect(communityInst.getHighestKey()).toBe(2)
    communityInst.createCity("Rio de Janeiro", -22.91, -43.17, 6000000)
    expect(communityInst.getHighestKey()).toBe(3)

})

test("test getThisCity method in community class", () => {
    let communityInst = new psc.community();
    communityInst.createCity("Calgary", 51.05, -114.05, 1500000)
    communityInst.createCity("Edmonton", 53.55, -113.49, 800000)
    expect(communityInst.getThisCity(2).city).toBe("Edmonton");
    expect(communityInst.getThisCity(1).city).toBe("Calgary");
})