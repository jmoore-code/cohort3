import React, { Component } from "react";
import { MyContext } from "../context/ThemeContext";

class CreateAccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      account: this.props.account
    };
  }

  handleClickDeposit = () => {
    this.state.account.deposit(this.state.amount);
    this.setState({
      amount: ""
    });
    this.props.forceUpdate();
  };

  handleClickWithdraw = () => {
    this.state.account.withdraw(this.state.amount);
    this.setState({
      amount: ""
    });
    this.props.forceUpdate();
  };

  handleClickDelete = event => {
    this.props.removeAccount(event.target.parentNode.id);
    this.props.messageUpdate();
  };

  handleChange = event => {
    this.setState({
      amount: Number(event.target.value)
    });
    // console.log(this.state)
  };

  render() {
    return (
      <MyContext.Consumer>
        {myContext => (
          <div
            className="accountCard"
            id={this.props.account.name}
            style={{
              ...{ color: myContext.textTheme },
              ...{ fontStyle: myContext.textItalicsTheme }
            }}
          >
            <p>{this.props.account.name}</p>
            <p>${this.props.account.amount}</p>
            <input
              placeholder="money"
              onChange={this.handleChange}
              name={this.props.account.name}
              value={this.state.amount}
            ></input>
            <br></br>
            <button onClick={this.handleClickDeposit}>Deposit</button>
            <button onClick={this.handleClickWithdraw}>Withdraw</button>
            <button onClick={this.handleClickDelete}>Delete</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default CreateAccountCard;
