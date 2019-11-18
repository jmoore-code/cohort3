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
      let popOutputField = document.createElement("p");
      let whichSphereOutputField = document.createElement("p");

      // set output fields
      popOutputField.textContent = `Population: ${obj.pop}`;
      whichSphereOutputField.textContent = ""
      // define input type and button text
      inputField.type = "number";
      moveInButton.innerText = "Move In";
      moveOutButton.innerText = "Move Out";
      whichSphereButton.innerText = "Sphere?"
      deleteButton.innerText = "Delete";

      // append elements to card
      newCard.appendChild(newCardName);
      newCard.appendChild(inputField);
      newCard.appendChild(moveInButton);
      newCard.appendChild(moveOutButton);
      newCard.appendChild(whichSphereButton);
      newCard.appendChild(deleteButton);
      newCard.appendChild(popOutputField);
      newCard.appendChild(whichSphereOutputField);

      // append card to parent div
      targetGrid.appendChild(newCard);
    });
  },
  deleteCard: target => {
    target.remove(target.this);
  }
};

export default domUtilities;
