const psc = {
  city: class {
    constructor(Name, Latitude, Longitude, Population) {
      this.city = Name;
      this.lat = Latitude;
      this.long = Longitude;
      this.pop = Population;
    }
    show() {
      return `${this.city} ${this.lat} ${this.long} ${this.pop}`;
    }
  }
};

export default psc;
