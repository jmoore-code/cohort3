const psc = {


    city: class {
      constructor(Key, Name, Latitude, Longitude, Population) {
        this.key = Key;
        this.city = Name;
        this.lat = Number(Latitude);
        this.long = Number(Longitude);
        this.pop = Number(Population);
      }
      show() {
        return `City: ${this.city}, lat: ${this.lat}, long: ${this.long}, Population: ${this.pop}` ;
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

      whichSphere() {
        if (this.lat > 0) {
          return "Northern Hemisphere";
        } else {
          return "Southern Hemisphere";
        }
      }
  
    },
    community: class {
      constructor() {
        this.cityList = [];
        this.keyCounter = 1;
        this.message = ""
      }
  
      createCity = (Name, Latitude, Longitude, Population) => {
        // let message;
        let cityInst = new psc.city(
          this.keyCounter,
          Name,
          Latitude,
          Longitude,
          Population
        );
        if (
          this.cityList.filter(el => el.lat === Number(Latitude) && el.long === Number(Longitude))
            .length === 0
        ) {
          this.cityList.push(cityInst);
          this.message = `${Name} has been added to the database`;
          this.keyCounter++;
        } else {
          this.message = `Error: a location already has those coordinates`;
        }
        return this.message;
      }

  
      getMostNorthern = () => {
        if (this.cityList.length > 0) {
          let cityListSort = this.cityList;
          cityListSort.sort((a, b) => {
            return b.lat - a.lat;
          });
          return cityListSort[0].city;
        }

      }
  
      getMostSouthern = () => {
        if (this.cityList.length > 0) {
          let cityListSort = this.cityList;
          cityListSort.sort((a, b) => {
            return a.lat - b.lat;
          });
          return cityListSort[0].city;
        }
      }
  
      getPopulation = () => {
        if (this.cityList.length > 0) {
          let populations = this.cityList.map(el => el.pop);
          return populations.reduce((a, b) => a + b, 0);
        }
      }
  
      deleteCity = (key) => {
        let cityName = this.cityList.filter(el => el.key === Number(key))
        this.cityList = this.cityList.filter(el => el.key !== Number(key));
        this.message = `${cityName[0].city} was deleted`
      }
  
      getHighestKey = () => {
        this.cityList.sort((a, b) => {
          return b.key - a.key;
        });
        return this.cityList[0].key
      }
  
      getThisCity = (key) => {
        let citySearch = this.cityList.filter(el => el.key === key);
        return citySearch[0];
      }
    }
    
  };
  
  export default psc;