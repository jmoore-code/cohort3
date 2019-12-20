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
    // console.log(this.state.message)
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

        <div className="upperControls">
        <div className="title">
          <h2>Your Banking Accounts</h2>
          {this.state.message}
        </div>
        <br></br>
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
          <br />
          <button id="idCreateAccountButton" onClick={this.handleClick}>
            Create Account
          </button>
          <p></p>
          <div className="outputField">
            <div>
              <p>Account Sum Value: <br />{this.controller.sumAccounts()}</p>
              <span id="sumOutput"></span>
            </div>
            <div>
              <p>Highest Value Account: <br />{this.controller.highAccount()}</p>
              <span id="highestOutput"></span>
            </div>
            <div>
              <p>Lowest Value Account: <br />{this.controller.lowAccount()}</p>
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
