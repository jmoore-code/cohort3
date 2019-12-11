import React from "react";

class AccountFuncs extends React.Component {
    constructor (accountName, initialBalance) {
        super()
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

class AccountController extends React.Component {
    constructor() {
        super()
      this.allAccounts = [];
    }
  
    createAccount(name, balance) {
      let filterAccount = this.allAccounts.filter(el => el.name === name);
      if (name === "") {
        return false;
      } else if (filterAccount.length > 0) {
        return false;
      } else {
        let newInstance = new AccountFuncs(name, balance);
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

  export {AccountFuncs, AccountController}