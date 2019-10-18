import functions from "./functions.js ";


// Event listeners

idBoxAround.addEventListener("click", (event) => {
    console.log(event);
});

idShowButton.addEventListener("click", functions.showList);

idAddButton.addEventListener("click", functions.addItem);

idDeleteButton.addEventListener("click", functions.removeItem);
