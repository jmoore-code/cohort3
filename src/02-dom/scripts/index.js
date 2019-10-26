import functions from "./functions.js ";


// Event listeners

idBoxAround.addEventListener("click", (event) => {
    console.log(event);
});

idShowButton.addEventListener("click", () => {
    idShowResult.textContent = functions.showList();
});

idAddButton.addEventListener("click", functions.addItem);

idDeleteButton.addEventListener("click", functions.removeItem);


// event listener switch for cards
const cardField = document.getElementById("leftCardField");

idScrollWindow.addEventListener("click", () => {
    // console.log(event.target.textContent);
    switch (event.target.textContent) {
        case "Add Card":
            functions.addCard(cardField);
            break;
        case "Add Before":
            functions.addCardBefore(cardField, event.target.parentElement);
            break;
        case "Add After":
            functions.addCardAfter(cardField, event.target.parentElement);
            break;
        case "Delete":
            functions.deleteCard(event.target.parentElement);
            break;
    }

});

