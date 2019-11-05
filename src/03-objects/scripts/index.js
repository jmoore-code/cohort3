import { functions, accountController } from "./account.js";

const accountGrid = document.getElementById("idGridAccount");
const accController = new accountController();
let accountName = idAccountName.value;
let initialBalance = idInitialBalance.value;

// create account card button event listener
idCreateAccountButton.addEventListener("click", () => {
  functions.createAccountCard(
    accountGrid,
    idAccountName.value,
    idInitialBalance.value
  );
  accController.createAccount(
    idAccountName.value,
    Number(idInitialBalance.value)
  );
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
