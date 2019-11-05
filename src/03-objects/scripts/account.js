export class account {
  constructor(accountName, initialBalance) {
    this.name = accountName;
    this.amount = initialBalance;
  }
  deposit(value) {
    this.amount += value;
  }
  withdraw(value) {
    this.amount -= value;
  }
  balance() {
    return this.amount;
  }
}

export class accountController {
  constructor() {
    this.allAccounts = [];
  }

  createAccount(name, balance) {
    let filterAccount = this.allAccounts.filter(el => el.name === name);
    if (name === "") {
      return false;
    } else if (filterAccount.length > 0) {
      return false;
    } else {
      let newInstance = new account(name, balance);
      this.allAccounts.push(newInstance);
    }
  }

  removeAccount(name) {
    for (let index = 0; index < this.allAccounts.length; index++) {
      if (this.allAccounts[index].name == name) {
        this.allAccounts.splice(index, 1);
      }
    }
  }

  sumAccounts() {
    let sum = 0;
    for (let index = 0; index < this.allAccounts.length; index++) {
      sum += this.allAccounts[index].amount;
    }
    return sum;
  }

  highAccount() {
    let highest = 0;
    let accountName;
    for (let index = 0; index < this.allAccounts.length; index++) {
      if (this.allAccounts[index].amount > highest) {
        highest = this.allAccounts[index].amount;
        accountName = this.allAccounts[index].name;
      }
    }
    return [`${accountName}, $${highest}`];
  }

  lowAccount() {
    let lowest = this.allAccounts[0].amount;
    let accountName = this.allAccounts[0].name;
    for (let index = 0; index < this.allAccounts.length; index++) {
      if (this.allAccounts[index].amount < lowest) {
        lowest = this.allAccounts[index].amount;
        accountName = this.allAccounts[index].name;
      }
    }
    return [`${accountName}, $${lowest}`];
  }
}

// dom functions
export const functions = {
  createAccountCard: (targetAccountGrid, inputName, inputAmount) => {
    let array = [];
    let accounts = targetAccountGrid.children;
    for (let index = 0; index < accounts.length; index++) {
      array.push(accounts[index].getAttribute("accName"));
    }
    let filterAccount = array.filter(el => el === inputName);

    if (inputName == "") {
      alert("Please name your account, no money is needed to start");
    } else if (inputName == filterAccount[0]) {
      alert("Please select a unique account name");
    } else {
      let newCard = document.createElement("div");
      newCard.setAttribute("accName", inputName);
      newCard.setAttribute("class", "accountCard");
      // define input field and buttons for card
      let p1Name = document.createElement("p");
      let p2Amount = document.createElement("p");
      let moneyDeltaInput = document.createElement("input");
      let br = document.createElement("br");
      let depositButton = document.createElement("button");
      let withdrawButton = document.createElement("button");
      let deleteButton = document.createElement("button");
      // set visual account name and dollar amount
      p1Name.textContent = inputName;
      p2Amount.textContent = `$${inputAmount}`;
      // define input type and button text
      moneyDeltaInput.type = "number";
      depositButton.innerText = "Deposit";
      withdrawButton.innerText = "Withdraw";
      deleteButton.innerText = "Delete";

      // append elements to card
      newCard.appendChild(p1Name);
      newCard.appendChild(p2Amount);
      newCard.appendChild(moneyDeltaInput);
      newCard.appendChild(br);
      newCard.appendChild(depositButton);
      newCard.appendChild(withdrawButton);
      newCard.appendChild(deleteButton);
      // append card to parent div
      targetAccountGrid.appendChild(newCard);
    }
  },

  deleteCard: target => {
    target.remove(target.this);
  }
};
