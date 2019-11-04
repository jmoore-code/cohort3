import { account, accountController, functions } from "./account.js";

// Tests for the class account---------------------------
test("create empty account", () => {
  var newInstance = new account("first", 25);
  expect(newInstance.amount).toEqual(25);
  expect(newInstance.name).toEqual("first");
  var secondInstance = new account("second", 30);
  expect(secondInstance.amount).toEqual(30);
  expect(secondInstance.name).toEqual("second");
});
test("test deposit method", () => {
  var newInstance = new account("first", 25);
  newInstance.deposit(10);
  expect(newInstance.amount).toEqual(35);
  newInstance.deposit(5);
  expect(newInstance.amount).toEqual(40);
});
test("test withdraw method", () => {
  var newInstance = new account("first", 25);
  newInstance.withdraw(10);
  expect(newInstance.amount).toEqual(15);
  newInstance.withdraw(15);
  expect(newInstance.amount).toEqual(0);
});
test("test balance method", () => {
  var newInstance = new account("first", 25);
  expect(newInstance.balance()).toEqual(25);
  var secondInstance = new account("second", 30);
  expect(secondInstance.balance()).toEqual(30);
});

// Tests for class accountController-----------------------------

test("test create account function", () => {
  const newInstanceControllers = new accountController();
  let accountNames = () => {
    return newInstanceControllers.allAccounts.map(acc => acc.name);
  };
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  expect(accountNames()).toEqual(["Savings"]);
  newInstanceControllers.createAccount("Car fund", 30);
  expect(accountNames()).toEqual(["Savings", "Car fund"]);
});

test("test delete account function", () => {
  const newInstanceControllers = new accountController();
  let accountNames = () => {
    return newInstanceControllers.allAccounts.map(acc => acc.name);
  };
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 30);
  newInstanceControllers.removeAccount("Savings");
  expect(accountNames()).toEqual(["Car fund"]);
  newInstanceControllers.createAccount("Holiday", 50);
  newInstanceControllers.removeAccount("Car fund");
  expect(accountNames()).toEqual(["Holiday"]);
});

test("test sum accounts function", () => {
  const newInstanceControllers = new accountController();
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 30);
  expect(newInstanceControllers.sumAccounts()).toEqual(55);
  newInstanceControllers.createAccount("Holiday", 50);
  expect(newInstanceControllers.sumAccounts()).toEqual(105);
});

test("test highest accounts function", () => {
  const newInstanceControllers = new accountController();
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 100);
  expect(newInstanceControllers.highAccount()).toEqual(["Car fund, $100"]);
  newInstanceControllers.createAccount("Holiday", 150);
  expect(newInstanceControllers.highAccount()).toEqual(["Holiday, $150"]);
});

test("test lowest accounts function", () => {
  const newInstanceControllers = new accountController();
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 100);
  expect(newInstanceControllers.lowAccount()).toEqual(["Savings, $25"]);
  newInstanceControllers.createAccount("Holiday", 10);
  expect(newInstanceControllers.lowAccount()).toEqual(["Holiday, $10"]);
});

// Tests for dom functions-------------------------

//divCardNames is a helper function to return an array of account names to test dom manipulation
const divCardNames = node => {
  let array = [];
  let accounts = node.children;
  for (let index = 0; index < accounts.length; index++) {
    array.push(accounts[index].getAttribute("accName"));
  }
  return array;
};

test("test create account card function", () => {
  let gridAccount = document.createElement("div");
  functions.createAccountCard(gridAccount, "Savings", 25);
  expect(divCardNames(gridAccount)).toEqual(["Savings"]);
  functions.createAccountCard(gridAccount, "Car fund", 55);
  expect(divCardNames(gridAccount)).toEqual(["Savings", "Car fund"]);
});

test("test delete card", () => {
  let gridAccount = document.createElement("div");
  functions.createAccountCard(gridAccount, "Savings", 25);
  functions.createAccountCard(gridAccount, "Car fund", 55);
  functions.deleteCard(gridAccount.children[1]);
  expect(divCardNames(gridAccount)).toEqual(["Savings"]);
  functions.deleteCard(gridAccount.children[0]);
  expect(divCardNames(gridAccount)).toEqual([]);
});
