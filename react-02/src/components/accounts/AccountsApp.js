import React from "react";
import { MyContext } from "../context/ThemeContext";
import { StateContext } from "../context/StateContext";
import "./accounts.css";
import Popup from "reactjs-popup";

const InfoPopup = () => (
  <Popup trigger={<button className="button"> Information </button>} modal>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"></div>
        <div className="content">
          {" "}
          <p>
            The "Bank Accounts" exercise was design to teach how to use classes
            in JavaScript in a object oriented way, as well as how to use
            "cards" to display information that is created. It got us to think
            about how to manage state and a list of objects which is storing the
            data created.
          </p>
          <p>
            Enter a account name such at "savings" and a dollar amount. The
            account is created and you will have the option to deposit, withdraw
            or delete from the account. Then create more than one account.
            Notice how the sum value, highest value, and lowest value change as
            you do.
          </p>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
);

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
                  <button
                    id="idCreateAccountButton"
                    onClick={stateContext.handleClick}
                  >
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
                    <div className="info-modal" style={{ color: "black" }}>
                      <InfoPopup />
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
