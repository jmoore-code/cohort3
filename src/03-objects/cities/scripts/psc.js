const psc = {
  city: class {
    constructor(Key, Name, Latitude, Longitude, Population) {
      this.key = Key;
      this.city = Name;
      this.lat = Latitude;
      this.long = Longitude;
      this.pop = Population;
    }
    show() {
      return `Key: ${this.key}, City: ${this.city}, lat: ${this.lat}, long: ${this.long}, Population: ${this.pop}`;
    }
    moveIn(amount) {
      this.pop = this.pop + amount;
    }

    moveOut(amount) {
      this.pop = this.pop - amount;
    }
    howBig() {
      if (this.pop > 100000) return "City";
      if (this.pop > 20000) return "Large Town";
      if (this.pop > 1000) return "Town";
      if (this.pop > 100) return "Village";
      if (this.pop > 0) return "Hamlet";
      return "Zombieland";
    }
  },
  community: class {
    constructor() {
      this.cityList = [];
    }

    createCity(Key, Name, Latitude, Longitude, Population) {
      let message;
      let cityInst = new psc.city(Key, Name, Latitude, Longitude, Population);
      if (
        this.cityList.filter(el => el.lat === Latitude && el.long === Longitude)
          .length === 0
      ) {
        let cityObj = {
          key: cityInst.key,
          city: cityInst.city,
          lat: cityInst.lat,
          long: cityInst.long,
          pop: cityInst.pop
        };
        this.cityList.push(cityObj);
        message = `${Name} has been added to the database`;
      } else {
        message = `Error: a location already has those coordinates`;
      }
      return message;
    }

    whichSphere(cityInput) {
      let filterCity = this.cityList.filter(el => el.city === cityInput);
      if (filterCity[0].lat > 0) {
        return "Northern Hemisphere";
      } else {
        return "Southern Hemisphere";
      }
    }

    getMostNorthern() {
        this.cityList.sort((a,b) => {return b.lat - a.lat})
        return this.cityList[0]
    }
  }
};

export default psc;
