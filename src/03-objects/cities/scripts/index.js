import psc from "./psc.js";
import domUtilities from "./dom_utilities.js";
import fetchFunctions from "./cities_fetch.js"


const cityGird = document.querySelector(".rightVerticalBox");
const communityInst = new psc.community();


// create city card event and account controller listeners
idCityCreateButton.addEventListener("click", () => {
  let message;
  if ((idCityInput.value === "") ||  (idPopInput.value < 0)) {
    message = "Opps one of the parameters needs to be changed";
    idOutputField.textContent = message;
  } else {
    message = communityInst.createCity(idCityInput.value, Number(idLatInput.value), Number(idLongInput.value), Number(idPopInput.value));
    idCityGrid.textContent = "City Cards" //clears div, but seems messy, refactor!!!
    domUtilities.createCityCard(cityGird, communityInst.cityList);
    idOutputField.textContent = message
    // console.log(communityInst.cityList);
    let newestCity = communityInst.cityList[communityInst.cityList.length - 1] 
    // console.log(newestCity)
    fetchFunctions.addData(newestCity)
  }
});

idMostNorthernButton.addEventListener("click", () => {
    let mostNorthern = communityInst.getMostNorthern()
    idOutputField.textContent = `The most northern city is ${mostNorthern.city}`
})

idMostSouthernButton.addEventListener("click", () => {
    let mostSouthern = communityInst.getMostSouthern();
    idOutputField.textContent = `The most southern city is ${mostSouthern.city}`;
})

idTotalPopButton.addEventListener("click", () => {
    let totalPop = communityInst.getPopulation();
    idOutputField.textContent = `The total population of all cities is ${totalPop}`
})

// city card button listeners

idCityGrid.addEventListener("click", () => {
    let input = Number(event.target.parentElement.children[1].value);
    let cityList = communityInst.cityList;
    let key = Number(event.target.parentElement.getAttribute("key"))

    if (event.target.textContent == "Move In") {
        let city = communityInst.getThisCity(key)
        city.moveIn(input)
        console.log(cityList)
        event.target.parentElement.children[6].textContent = `Population: ${city.pop}`
        fetchFunctions.updateData(city);
    }
})


// vertical flexbox mover
const handler = document.querySelector(".handler");
const wrapper = handler.closest(".wrapper");
const boxA = wrapper.querySelector(".box1");
const boxB = wrapper.querySelector(".box2");
let isHandlerDragging = false;

document.addEventListener("mousedown", function(e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handler) {
    isHandlerDragging = true;
  }
});

document.addEventListener("mousemove", function(e) {
  // Don't do anything if dragging flag is false
  if (!isHandlerDragging) {
    return false;
  }

  e.preventDefault();

  // Get offset
  let containerOffsetTop = wrapper.offsetTop;
  let containerOffsetBottom = wrapper.offsetBottom;

  // Get x-coordinate of pointer relative to container
  let pointerRelativeXpos = e.clientY - containerOffsetTop;
  let pointerRelativeXpos2 = e.clientY - e.offsetTop + e.offsetHeight;

  let boxAminWidth = 30;

  boxA.style.height = Math.max(boxAminWidth, pointerRelativeXpos - 2) + "px";
  boxB.style.height = Math.max(boxAminWidth, pointerRelativeXpos2 - 8) + "px";
});
document.addEventListener("mouseup", function(e) {
  // Turn off dragging flag when user mouse is up
  isHandlerDragging = false;
});

// horizontal flexbox mover
const handlerVertical = document.querySelector(".handlerVertical");
const wrapperVertical = handlerVertical.closest(".wrapperVertical");
const boxAVertical = wrapperVertical.querySelector(".boxVertical");
let isHandlerDraggingVertical = false;

document.addEventListener("mousedown", function(e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handlerVertical) {
    isHandlerDraggingVertical = true;
  }
});

document.addEventListener("mousemove", function(e) {
  // Don't do anything if dragging flag is false
  if (!isHandlerDraggingVertical) {
    return false;
  }

  // Get offset
  let containerOffsetLeft = wrapperVertical.offsetLeft;

  // Get x-coordinate of pointer relative to container
  let pointerRelativeXpos = e.clientX - containerOffsetLeft;

  // Arbitrary minimum width set on box A, otherwise its inner content will collapse to width of 0
  let boxAminWidth = 60;

  // Resize box A
  // * 8px is the left/right spacing between .handler and its inner pseudo-element
  // * Set flex-grow to 0 to prevent it from growing
  boxAVertical.style.width =
    Math.max(boxAminWidth, pointerRelativeXpos - 8) + "px";
  boxAVertical.style.flexGrow = 0;
});

document.addEventListener("mouseup", function(e) {
  // Turn off dragging flag when user mouse is up
  isHandlerDraggingVertical = false;
});
