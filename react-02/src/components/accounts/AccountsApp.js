import React from "react"

class Accounts extends React.Component {
    render() {
        return(
            <div className= "upperAndLower">
                <div className="title"><h2>Your Banking Accounts</h2></div>
                <div className="upperControls">
                    <input type="text" placeholder="Account Name" id="idAccountName" />
                    <input type="number" placeholder="Initial Deposit" id="idInitialBalance" />
                    <button id="idCreateAccountButton">
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
            </div>
            
        )
    }
}

export default Accounts