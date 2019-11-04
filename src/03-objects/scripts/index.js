import {functions, accountController } from "./account.js";

const accountGrid = document.getElementById("idGridAccount");
const accController = new accountController();

// create account card button event listener
idCreateAccountButton.addEventListener("click", () => {
  let array = accController.allAccounts;
  // filter through the all accounts array to find object with with the same account input, then map that objects "name" key value to an array to act as a comparison
  let filterName = array
    .filter(selectObjects => selectObjects.name === idAccountName.value)
    .map(pull => pull.name);
  if (idAccountName.value == "") {
    alert("Please name your account, no money is needed to start");
  } else if (String(idAccountName.value) == filterName[0]) {
    alert("Please select a unique account name");
  } else {
    accController.createAccount(
      idAccountName.value,
      Number(idInitialBalance.value)
    );
    functions.createAccountCard(
      accountGrid,
      idAccountName.value,
      idInitialBalance.value
    );
  }
}); //end of create account card event listener

idSumAccountsButton.addEventListener("click", () => {
  let output = document.getElementById("sumOutput");
  output.textContent = accController.sumAccounts();
});

idHighAccountButton.addEventListener("click", () => {
  let output = document.getElementById("highestOutput");
  output.textContent = accController.highAccount();
});

idLowestAccountButton.addEventListener("click", () => {
  let output = document.getElementById("lowestOutput");
  output.textContent = accController.lowAccount();
});

// account card button event listeners
idGridAccount.addEventListener("click", () => {
  let name = event.target.parentElement.children[0].textContent;
  let input = event.target.parentElement.children[2].value;
  let accountArray = accController.allAccounts;

  if (event.target.textContent == "Deposit") {
    for (let index = 0; index < accountArray.length; index++) {
      if (name == accountArray[index].name) {
        accountArray[index].deposit(Number(input));
        event.target.parentElement.children[1].textContent = `$${accountArray[
          index
        ].balance()}`;
      }
    }
  }
  if (event.target.textContent == "Withdraw") {
    for (let index = 0; index < accountArray.length; index++) {
      if (name == accountArray[index].name) {
        accountArray[index].withdraw(Number(input));
        event.target.parentElement.children[1].textContent = `$${accountArray[
          index
        ].balance()}`;
      }
    }
  }
  if (event.target.textContent == "Delete") {
    accController.removeAccount(name);
    functions.deleteCard(event.target.parentElement);
  }
}); //end of card button event listeners
