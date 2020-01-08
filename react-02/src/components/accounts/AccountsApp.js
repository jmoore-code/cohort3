import React from "react";
import { MyContext } from "../context/ThemeContext";
import { StateContext } from "../context/StateContext";
import "./accounts.css";

class AccountsApp extends React.Component {
  

  render() {
    return (
      <MyContext.Consumer>
        {myContext => (
          <StateContext.Consumer>
            {stateContext => (
              <div
                className="upperAndLower"
                style={{
                  ...{ color: myContext.textTheme },
                  ...{ fontStyle: myContext.textItalicsTheme }
                }}
              >
                <div className="upperControls">
                  <div className="title">
                    <h2>Your Banking Accounts</h2>
                    {stateContext.state.message}
                  </div>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Account Name"
                    id="idAccountName"
                    name="name"
                    onChange={stateContext.handleChange}
                    value={stateContext.state.name}
                  />
                  <input
                    type="number"
                    placeholder="Initial Deposit"
                    id="idInitialBalance"
                    name="amount"
                    onChange={stateContext.handleChange}
                    value={stateContext.state.amount}
                  />
                  <br />
                  <button id="idCreateAccountButton" onClick={stateContext.handleClick}>
                    Create Account
                  </button>
                  <p></p>
                  <div className="outputField">
                    <div>
                      <p>
                        Account Sum Value: <br />
                        {stateContext.controller.sumAccounts()}
                      </p>
                      <span id="sumOutput"></span>
                    </div>
                    <div>
                      <p>
                        Highest Value Account: <br />
                        {stateContext.controller.highAccount()}
                      </p>
                      <span id="highestOutput"></span>
                    </div>
                    <div>
                      <p>
                        Lowest Value Account: <br />
                        {stateContext.controller.lowAccount()}
                      </p>
                      <span id="lowestOutput"></span>
                    </div>
                  </div>
                </div>
                <div className="grid-account" id="idGridAccount">
                  <stateContext.cardDisplay />
                </div>
              </div>
            )}
          </StateContext.Consumer>
        )}
      </MyContext.Consumer>
    );
  }
}

export default AccountsApp;
