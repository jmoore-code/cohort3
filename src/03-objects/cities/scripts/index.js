import psc from "./psc.js";
import domUtilities from "./dom_utilities.js";
import fetchFunctions from "./cities_fetch.js";
import mapFuncs from "./mapFunctions.js"

const cityGird = document.querySelector(".rightVerticalBox");
const communityInst = new psc.community();

// create city card event and account controller listeners
idCityCreateButton.addEventListener("click", () => {
  let message;
  if (idCityInput.value === "" || idPopInput.value < 0 || idLatInput.value > 90 || idLatInput.value < -90 || idLongInput.value > 180 || idLongInput.value < -180) {
    message = "Opps one of the parameters needs to be changed";
    idOutputField.textContent = message;
  } else {
    message = communityInst.createCity(
      idCityInput.value,
      Number(idLatInput.value),
      Number(idLongInput.value),
      Number(idPopInput.value)
    );
    idCityGrid.textContent = ""; //this resets grid when a new city is created
    domUtilities.createCityCard(cityGird, communityInst.cityList);
    mapFuncs.addMarker(communityInst.cityList)
    idOutputField.textContent = message;
    // console.log(communityInst.cityList);
    let newestCity = communityInst.cityList[communityInst.cityList.length - 1];
    // console.log(newestCity)
    fetchFunctions.addData(newestCity);
  }
});

idMostNorthernButton.addEventListener("click", () => {
  let mostNorthern = communityInst.getMostNorthern();
  idOutputField.textContent = `The most northern city is ${mostNorthern.city}`;
});

idMostSouthernButton.addEventListener("click", () => {
  let mostSouthern = communityInst.getMostSouthern();
  idOutputField.textContent = `The most southern city is ${mostSouthern.city}`;
});

idTotalPopButton.addEventListener("click", () => {
  let totalPop = communityInst.getPopulation();
  idOutputField.textContent = `The total population of all cities is ${totalPop}`;
});

// city card button listeners

idCityGrid.addEventListener("click", () => {
  let name = event.target.parentElement.children[0].textContent;
  let input = Number(event.target.parentElement.children[1].value);
  let key = Number(event.target.parentElement.getAttribute("key"));
  let city = communityInst.getThisCity(key);

  if (event.target.textContent == "Move In") {
    city.moveIn(input);
    let howBig = city.howBig();
    let show = city.show();
    event.target.parentElement.children[6].textContent =""
    event.target.parentElement.children[7].textContent = `${show} and is a ${howBig}`;
    fetchFunctions.updateData(city);
  }
  if (event.target.textContent == "Move Out") {
    if (input <= city.pop) {
      city.moveOut(input);
      let howBig = city.howBig();
      let show = city.show();
      event.target.parentElement.children[6].textContent =""
      event.target.parentElement.children[7].textContent = `${show} and is a ${howBig}`;
      fetchFunctions.updateData(city);
    } else {
      event.target.parentElement.children[6].textContent = "Reduce move out to less than population"
    }

    }

  if (event.target.textContent == "Sphere?") {
    let sphere = communityInst.whichSphere(name);
    event.target.parentElement.children[6].textContent = sphere;
  }
  if (event.target.textContent == "Delete") {
    domUtilities.deleteCard(event.target.parentElement);
    communityInst.deleteCity(key);
    fetchFunctions.deleteData(city);
    console.log(communityInst.cityList)
    mapFuncs.initMap()
    mapFuncs.addMarker(communityInst.cityList) 
  }

});

window.addEventListener("DOMContentLoaded", mapFuncs.initMap)

window.addEventListener("DOMContentLoaded", async () => {
  try {
  let citiesJSON = await fetchFunctions.getData();
  citiesJSON.forEach(el => {
    communityInst.cityList.push(
      new psc.city(el.key, el.city, el.lat, el.long, el.pop)
    );
    communityInst.keyCounter = communityInst.getHighestKey() + 1;
  });
  domUtilities.createCityCard(cityGird, communityInst.cityList);
  mapFuncs.addMarker(communityInst.cityList)
  // console.log(communityInst.cityList);
}
catch(err) {
  err = "Failed to connect to server"
  idOutputField.textContent = err
}
});









