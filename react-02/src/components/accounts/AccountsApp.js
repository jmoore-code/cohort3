import React from "react"
import CreateAccountCard from "./AccountCard"

class Accounts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: true,

        }
    }
    
    
    
    handleClick = () => {
        this.setState({test: true})
    }
    
    cardDisplay = () => {
        const accountsList = [
            {name: "cheq", amount: 1,},
            {name: "savings", amount: 2,},
        ]
        if (this.state.test === true) {
            return <CreateAccountCard accountList={accountsList}/>
        }
    }
    
    render() {
        return(
            <div className= "upperAndLower">
                <div className="title"><h2>Your Banking Accounts</h2></div>
                <div className="upperControls">
                    <input type="text" placeholder="Account Name" id="idAccountName" />
                    <input type="number" placeholder="Initial Deposit" id="idInitialBalance" />
                    <button id="idCreateAccountButton" onClick={this.handleClick}>
                    Create Account
                    </button>
                    <button id="idSumAccountsButton">Sum Accounts</button>
                    <button id="idHighAccountButton">Highest Account</button>
                    <button id="idLowestAccountButton">Lowest Account</button>
                    <div className="outputField">
                    <div>Account Sum Value: <span id="sumOutput"></span></div>
                    <div>Highest Value Account: <span id="highestOutput"></span></div>
                    <div>Lowest Value Account: <span id="lowestOutput"></span></div>
        
                </div>
            </div>
            <div className="grid-account" id="idGridAccount">
                Cards here
                {this.cardDisplay()}
            </div>
            </div>
            
        )
    }
}

export default Accounts