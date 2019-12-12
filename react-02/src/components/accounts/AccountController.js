

class accounts {
    constructor (accountName, initialBalance) {
        this.name = accountName;
        this.amount = Number(initialBalance);
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

class AccountController {
    constructor() {
      this.allAccounts = [];
    }
  
    createAccount(name, amount) {
      let filterAccount = this.allAccounts.filter(el => el.name === name);
      if (name === "") {
        return false;
      } else if (filterAccount.length > 0) {
        return false;
      } else {
        let newInstance = new accounts(name, amount);
        this.allAccounts.push(newInstance);
      }
      console.log(this.allAccounts)
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

  export {accounts, AccountController}