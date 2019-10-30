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
    return `Your new balance is $${this.amount}`;
  }
}

export class accountController {
  constructor() {
    this.allAccounts = [];
  }

  createAccount(name, balance) {
    let newInstance = new account(name, balance);
    this.allAccounts.push(newInstance);
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
    for (let index = 0; index < this.allAccounts.length; index++) {
      if (this.allAccounts[index].amount > highest) {
        highest = this.allAccounts[index].amount;
      }
    }
    return highest;
  }

  lowAccount() {
    let lowest = this.allAccounts[0].amount;
    for (let index = 0; index < this.allAccounts.length; index++) {
      if (this.allAccounts[index].amount < lowest) {
        lowest = this.allAccounts[index].amount;
      }
    }
    return lowest;
  }
}

// instantiation of accountController class
export const newInstanceControllers = new accountController();
