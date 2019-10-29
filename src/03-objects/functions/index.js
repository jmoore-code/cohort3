import {account} from './account.js'

let newAccount;

idCreateAccountButton.addEventListener("click", () => {
    newAccount = new account(acctName.value, Number(initialBalance.value))
    output.textContent = `Account name = ${newAccount.name}, Balance = $${newAccount.amount}`
})

idDepositButton.addEventListener("click", () => {
    newAccount.deposit(Number(idDeltaAmount.value))
    output.textContent = newAccount.balance()
})

idWithdrawButton.addEventListener("click", () => {
    newAccount.withdraw(Number(idDeltaAmount.value))
    output.textContent = newAccount.balance()
})