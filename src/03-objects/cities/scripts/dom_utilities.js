

const domUtilities = {
  createCityCard: (targetGrid, cityListArray) => {
    cityListArray.forEach(obj => {
      
      let newCard = document.createElement("div");
      newCard.setAttribute("key", obj.key);
      newCard.setAttribute("class", "cityCard");
     

      // define card name
      let newCardName = document.createElement("p");
      newCardName.textContent = obj.city;
      // define input field and buttons for card
      let inputField = document.createElement("input");
      let moveInButton = document.createElement("button");
      let moveOutButton = document.createElement("button");
      let whichSphereButton = document.createElement("button");
      let deleteButton = document.createElement("button");
      let whichSphereOutputField = document.createElement("p");
      let showInfoOutputField = document.createElement("p")

      // set output fields
      whichSphereOutputField.textContent = ""
      let howBig = obj.howBig()
      let show = obj.show();
      showInfoOutputField.textContent = `${show} and is a ${howBig}`
      // define input type and button text
      inputField.type = "number";
      moveInButton.innerText = "Move In";
      moveOutButton.innerText = "Move Out";
      whichSphereButton.innerText = "Sphere?"
      deleteButton.innerText = "Delete";

      // append elements to card
      newCard.appendChild(newCardName); // 0
      newCard.appendChild(inputField); // 1
      newCard.appendChild(moveInButton); // 2
      newCard.appendChild(moveOutButton); // 3
      newCard.appendChild(whichSphereButton); // 4
      newCard.appendChild(deleteButton); // 5
      newCard.appendChild(whichSphereOutputField); // 6
      newCard.appendChild(showInfoOutputField) // 7

      // append card to parent div
      targetGrid.appendChild(newCard);
    });
  },
  deleteCard: target => {
    target.remove(target.this);
  }
};

export default domUtilities;
