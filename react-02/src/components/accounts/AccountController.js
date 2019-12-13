

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
      this.message = ""
    }
  
    createAccount = (name, amount) => {
      let filterAccount = this.allAccounts.filter(el => el.name === name);
      if (name === "") {
        this.message = "Please put in a valid account name";
      } else if (filterAccount.length > 0) {
        this.message = "No duplicate accounts";
      } else {
        let newInstance = new accounts(name, amount);
        this.allAccounts.push(newInstance);
        this.message = `Created ${name} account`
      }
    //   console.log(this.allAccounts)
    }
  
    removeAccount = (name) => {
      for (let index = 0; index < this.allAccounts.length; index++) {
        if (this.allAccounts[index].name === name) {
          this.allAccounts.splice(index, 1);
          this.message = `Removed ${name} account` 
        }
      }
    }

  
    sumAccounts = () => {
        if (this.allAccounts.length > 0) {
            let sum = 0;
            for (let index = 0; index < this.allAccounts.length; index++) {
              sum += this.allAccounts[index].amount;
            }
            return `$${sum}`;
        }
        return null;
    }
  
    highAccount = () => {
        if (this.allAccounts.length > 0) {
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
        return null;
    }
  
    lowAccount = () => {
      if (this.allAccounts.length > 0){
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
      return null
    }
  }

  export {accounts, AccountController}