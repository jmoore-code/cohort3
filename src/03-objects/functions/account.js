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

export const functions = {
  allAccounts: [],


  createAccount: (name, balance) => {
    let newInstance = new account(name, balance);
    functions.allAccounts.push(newInstance);
  },

  removeAccount: name => {
    for (let index = 0; index < functions.allAccounts.length; index++) {
      if (functions.allAccounts[index].name == name) {
        functions.allAccounts.splice(index, 1);
      }
    }
  },

  sumAccounts: () => {
      let sum = 0;
      for (let index = 0; index < functions.allAccounts.length; index++) {
          sum += functions.allAccounts[index].amount;
          
      }
      return sum;
  },

  highAccount: () => {
    let highest = 0;
    for (let index = 0; index < functions.allAccounts.length; index++) {
        if(functions.allAccounts[index].amount > highest) {
            highest = functions.allAccounts[index].amount;
        }  
    }
    return highest;
  },

  lowAccount: () => {
    let lowest = functions.allAccounts[0].amount;
    for (let index = 0; index < functions.allAccounts.length; index++) {
        if(functions.allAccounts[index].amount < lowest) {
            lowest = functions.allAccounts[index].amount;
        }  
    }
    return lowest;
  }
};
