import React, { Component } from "react";

class CreateAccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      account: ""
    };
  }

  handleClickDeposit = () => {
    const accounts = this.props.accountList;
    const filterAccount = accounts.filter(el => el.name === this.state.account);
    if (this.state.amount === "") {
      return false;
    } else {
      filterAccount[0].deposit(Number(this.state.amount));
      this.setState({
        amount: "",
        account: ""
      });
    }
  };

  handleClickWithdraw = () => {
      const accounts = this.props.accountList;
      const filterAccount = accounts.filter(el => el.name === this.state.account);
        if (this.state.amount === "") {
            return false;
        } else {
            filterAccount[0].withdraw(Number(this.state.amount));
            this.setState({
                amount: "",
                account: ""
            });
        }
  }

  handleClickDelete = (event) => {
        console.log(event.target.parentNode.id)
     this.props.removeAccount(event.target.parentNode.id)
  }
  

  handleChange = event => {
    this.setState({
      amount: Number(event.target.value),
      account: event.target.name
    });
    // console.log(this.state)
  };

  render() {
    const accounts = this.props.accountList;
    const listOfAccounts = accounts.map(el => {
      return (
        <div className="accountCard" key={el.name} id={el.name}>
          <p>{el.name}</p>
          <p>${el.amount}</p>
          <input
            placeholder="money"
            onChange={this.handleChange}
            name={el.name}
            value={this.state.value}
          ></input>
          <br></br>
          <button onClick={this.handleClickDeposit}>Deposit</button>
          <button onClick={this.handleClickWithdraw}>Withdraw</button>
          <button onClick={this.handleClickDelete}>Delete</button>
        </div>
      );
    });
    return <div className="accountCard">{listOfAccounts}</div>;
  }
}

export default CreateAccountCard;
