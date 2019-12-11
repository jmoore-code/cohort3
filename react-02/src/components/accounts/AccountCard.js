import React, {Component} from "react";

class CreateAccountCard extends Component {
    render() {
        const accounts = this.props.accountList;
        const listOfAccounts = accounts.map((el) => {
            return (            
            <div className="accountCard">
                <p>{el.name}</p>
                <p>${el.amount}</p>
                <input placeholder="money"></input>
                <br></br>
                <button>Deposit</button>
                <button>Withdraw</button>
                <button>Delete</button>
            </div>)

        }
        );
        return (
            <div className="accountCard">{listOfAccounts}</div>
        )
    }
}

export default CreateAccountCard