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
      let deleteButton = document.createElement("button");
      let sizeOutputField = document.createElement("p");
      let whichSphereOutputField = document.createElement("p");

      // set output fields
      sizeOutputField.textContent = obj.pop;
      whichSphereOutputField.textContent = "test";
      // define input type and button text
      inputField.type = "number";
      moveInButton.innerText = "Move In";
      moveOutButton.innerText = "Move Out";
      deleteButton.innerText = "Delete";

      // append elements to card
      newCard.appendChild(newCardName);
      newCard.appendChild(inputField);
      newCard.appendChild(moveInButton);
      newCard.appendChild(moveOutButton);
      newCard.appendChild(deleteButton);
      newCard.appendChild(sizeOutputField);
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
