import { accounts, AccountController} from "./AccountController.js";

// Tests for the class account---------------------------
test("create empty account", () => {
  var newInstance = new accounts("first", 25);
  expect(newInstance.amount).toEqual(25);
  expect(newInstance.name).toEqual("first");
  var secondInstance = new accounts("second", 30);
  expect(secondInstance.amount).toEqual(30);
  expect(secondInstance.name).toEqual("second");
});
test("test deposit method", () => {
   var newInstance = new accounts("first", 25);
  newInstance.deposit(10);
  expect(newInstance.amount).toEqual(35);
  newInstance.deposit(5);
  expect(newInstance.amount).toEqual(40);
});
test("test withdraw method", () => {
   var newInstance = new accounts("first", 25);
  newInstance.withdraw(10);
  expect(newInstance.amount).toEqual(15);
  newInstance.withdraw(15);
  expect(newInstance.amount).toEqual(0);
});
test("test balance method", () => {
   var newInstance = new accounts("first", 25);
  expect(newInstance.balance()).toEqual(25);
  var secondInstance = new accounts("second", 30);
  expect(secondInstance.balance()).toEqual(30);
});

// Tests for class accountController-----------------------------

test("test create account function", () => {
  const newInstanceControllers = new AccountController();
  let accountNames = () => {
    return newInstanceControllers.allAccounts.map(acc => acc.name);
  };
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  expect(accountNames()).toEqual(["Savings"]);
  newInstanceControllers.createAccount("Car fund", 30);
  expect(accountNames()).toEqual(["Savings", "Car fund"]);
  // test that empty inputs are not accepted
  expect(newInstanceControllers.createAccount("", 25)).toEqual("Please put in a valid account name");
  // test that duplicate accounts are not created
  expect(newInstanceControllers.createAccount("Savings", 25)).toEqual("No duplicate accounts");
});

test("test delete account function", () => {
  const newInstanceControllers = new AccountController();
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
  const newInstanceControllers = new AccountController();
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 30);
  expect(newInstanceControllers.sumAccounts()).toEqual("$55");
  newInstanceControllers.createAccount("Holiday", 50);
  expect(newInstanceControllers.sumAccounts()).toEqual("$105");
});

test("test highest accounts function", () => {
  const newInstanceControllers = new AccountController();
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 100);
  expect(newInstanceControllers.highAccount()).toEqual(["Car fund, $100"]);
  newInstanceControllers.createAccount("Holiday", 150);
  expect(newInstanceControllers.highAccount()).toEqual(["Holiday, $150"]);
});

test("test lowest accounts function", () => {
  const newInstanceControllers = new AccountController();
  expect(newInstanceControllers.allAccounts).toEqual([]);
  newInstanceControllers.createAccount("Savings", 25);
  newInstanceControllers.createAccount("Car fund", 100);
  expect(newInstanceControllers.lowAccount()).toEqual(["Savings, $25"]);
  newInstanceControllers.createAccount("Holiday", 10);
  expect(newInstanceControllers.lowAccount()).toEqual(["Holiday, $10"]);
});
