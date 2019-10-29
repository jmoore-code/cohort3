export class account{
    constructor(accountName, initialBalance){
        this.name = accountName;
        this.amount = initialBalance;
    }
    deposit(value){
        this.amount += value;
    }
    withdraw(value){
        this.amount -= value;
    }
    balance(){
        return `Your new balance is $${this.amount}`;
    }
}
