import { account, functions, accountController } from "./account.js";

const accountGrid = document.getElementById("idGridAccount");
const accController = new accountController();

idCreateAccountButton.addEventListener("click", () => {
  accController.createAccount(
    idAccountName.value,
    Number(idInitialBalance.value)
  );
  functions.createAccountCard(
    accountGrid,
    idAccountName.value,
    idInitialBalance.value
  );
});

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
}); //end of event listener
