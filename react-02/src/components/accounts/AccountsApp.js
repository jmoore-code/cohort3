import React from "react";
import CreateAccountCard from "./AccountCard";
import { AccountController } from "./AccountController";

class AccountsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      accountsList: []
    };
    this.controller = new AccountController();
  }

  handleClick = () => {
    this.controller.createAccount(this.state.name, this.state.amount);
    this.setState({
      name: "",
      amount: "",
      accountsList: this.controller.allAccounts
    });
    // console.log(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.accountsList)
  };

  removeAccount = (name) => {
      for (let index = 0; index < this.controller.allAccounts.length; index++) {
        if (this.controller.allAccounts[index].name === name) {
          this.controller.allAccounts.splice(index, 1);
        }
      }
      this.setState({accountsList: this.controller.allAccounts})
    }

  cardDisplay = () => {
    const accountList = this.state.accountsList;
    return (
      <CreateAccountCard
        accountList={accountList}
        removeAccount={this.removeAccount}
      />
    );
  };

  render() {
    return (
      <div className="upperAndLower">
        <div className="title">
          <h2>Your Banking Accounts</h2>
        </div>
        <div className="upperControls">
          <input
            type="text"
            placeholder="Account Name"
            id="idAccountName"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Initial Deposit"
            id="idInitialBalance"
            name="amount"
            onChange={this.handleChange}
            value={this.state.amount}
          />
          <button id="idCreateAccountButton" onClick={this.handleClick}>
            Create Account
          </button>
          <button id="idSumAccountsButton">Sum Accounts</button>
          <button id="idHighAccountButton">Highest Account</button>
          <button id="idLowestAccountButton">Lowest Account</button>
          <div className="outputField">
            <div>
              Account Sum Value: <span id="sumOutput"></span>
            </div>
            <div>
              Highest Value Account: <span id="highestOutput"></span>
            </div>
            <div>
              Lowest Value Account: <span id="lowestOutput"></span>
            </div>
          </div>
        </div>
        <div className="grid-account" id="idGridAccount">
          Cards here
          <this.cardDisplay />
        </div>
      </div>
    );
  }
}

export default AccountsApp;
