import React from 'react';
import { AccountController} from "../accounts/AccountController"
import CreateAccountCard from "../accounts/AccountCard"

const StateContext = React.createContext();

class StateContextProvider extends React.Component {

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
        this.setState({ message: this.controller.message });
      };
    
      forceUpdate = () => {
        this.setState({ state: this.state });
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
            <StateContext.Provider
                value={{
                    state: this.state,
                    controller: this.controller,
                    handleClick: this.handleClick,
                    handleChange: this.handleChange,
                    updateMessage: this.updateMessage,
                    forceUpdate: this.forceUpdate,
                    cardDisplay: this.cardDisplay
                }}
            
            >
                {this.props.children}
            </StateContext.Provider>
        )
    }
}

export {StateContext, StateContextProvider};

