import React from "react";
import CreateAccountCard from "./AccountCard";
import { AccountController } from "./AccountController";
import "./accounts.css"


class AccountsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      accountsList: [],
      message: "Please put in your first account"
    };
    this.controller = new AccountController();
  }

  handleClick = () => {
    console.log(this.state.message)
    this.controller.createAccount(this.state.name, this.state.amount);
    this.setState({
      name: "",
      amount: "",
      accountsList: this.controller.allAccounts,
      message: this.controller.message
    });
    // console.log(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateMessage = () => {
    this.setState({message: this.controller.message})
  }
  
  forceUpdate = () => {
    this.setState({state: this.state });
};

  cardDisplay = () => {
    return this.controller.allAccounts.map(account => {
      return (
        <CreateAccountCard
          key={account.name}
          account={account}
          removeAccount={this.controller.removeAccount}
          forceUpdate={this.forceUpdate}
          messageUpdate={this.updateMessage}
        />
      );
    });
  };

 

  render() {
    return (
      <div className="upperAndLower">
        <div className="title">
          <h2>Your Banking Accounts</h2>
          {this.state.message}
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

          <div className="outputField">
            <div>
              Account Sum Value: {this.controller.sumAccounts()}{" "}
              <span id="sumOutput"></span>
            </div>
            <div>
              Highest Value Account: {this.controller.highAccount()}{" "}
              <span id="highestOutput"></span>
            </div>
            <div>
              Lowest Value Account: {this.controller.lowAccount()}{" "}
              <span id="lowestOutput"></span>
            </div>
          </div>
        </div>
        <div className="grid-account" id="idGridAccount">
        
          <this.cardDisplay />
        </div>
      </div>
    );
  }
}

export default AccountsApp;
