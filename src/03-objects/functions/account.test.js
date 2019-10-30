import { account, newInstanceControllers } from "./account.js";

test("create empty account", () => {
  var newInstance = new account("first", 25);
  var secondInstance = new account("second", 30);
  expect(newInstance.amount).toEqual(25);
  expect(secondInstance.amount).toEqual(30);
  expect(newInstance.name).toEqual("first");
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
  expect(newInstance.balance()).toEqual("Your new balance is $25");
  var secondInstance = new account("second", 30);
  expect(secondInstance.balance()).toEqual("Your new balance is $30");
});

// function that maps array of account objects and returns the name
const accountNames = () => {
  return newInstanceControllers.allAccounts.map(acc => acc.name);
};

test("test create account function", () => {
  newInstanceControllers.allAccounts = [];
  newInstanceControllers.createAccount("Savings", 25);
  expect(accountNames()).toEqual(["Savings"]);
  newInstanceControllers.createAccount("Car fund", 30);
  expect(accountNames()).toEqual(["Savings", "Car fund"]);
});

test("test delete account function", () => {
  newInstanceControllers.allAccounts = [];
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 30);
  newInstanceControllers.removeAccount("Savings");
  expect(accountNames()).toEqual(["Car fund"]);
  newInstanceControllers.createAccount("Holiday", 50);
  newInstanceControllers.removeAccount("Car fund");
  expect(accountNames()).toEqual(["Holiday"]);
});

test("test sum accounts function", () => {
  newInstanceControllers.allAccounts = [];
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 30);
  expect(newInstanceControllers.sumAccounts()).toEqual(55);
  newInstanceControllers.createAccount("Holiday", 50);
  expect(newInstanceControllers.sumAccounts()).toEqual(105);
});

test("test highest accounts function", () => {
  newInstanceControllers.allAccounts = [];
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 100);
  expect(newInstanceControllers.highAccount()).toEqual(100);
  newInstanceControllers.createAccount("Holiday", 50);
  expect(newInstanceControllers.highAccount()).toEqual(100);
});

test("test lowest accounts function", () => {
  newInstanceControllers.allAccounts = [];
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 100);
  expect(newInstanceControllers.lowAccount()).toEqual(25);
  newInstanceControllers.createAccount("Holiday", 50);
  expect(newInstanceControllers.lowAccount()).toEqual(25);
});
