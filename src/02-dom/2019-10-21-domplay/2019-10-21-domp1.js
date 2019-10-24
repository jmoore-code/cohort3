const functions = {

    addCard: (node, myCounter) => {
        // node.textContent = "I am in add Card"
        let newCard = document.createElement("div")
        newCard.setAttribute("class", "card");
        newCard.setAttribute("counter", myCounter);
        newCard.textContent = `Card ${myCounter}`;
        node.appendChild(newCard);
    
    },

    whatCards: (node) => {
        let x = [];
        let array = node.children;
        for (let index = 0; index < (array.length); index++) {
           x.push(Number(array[index].getAttribute("counter")));
            
        }
        return x         
    }
}   

export default functions;