import React from 'react';
import Menu from "./components/menu/Menu"
import Home from "./components/Home"
import {Game} from "./components/tictactoe/Board"
import Accounts from "./components/accounts/AccountsApp"
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "accounts" 
    }
    this.selectedElement = this.selectedElement.bind(this);
  }

  selectedElement = (event) => {
    this.setState({
      selected: event.target.id
    })
  }



  appDisplay = () => {
    if(this.state.selected === "home") {
      return <Home />;
    } if (this.state.selected === "tictactoe") {
      return <Game />
    } if (this.state.selected === "accounts") {
      return <Accounts />
    }
  }
  
  render() {
    return (
    
      <div className="App" >
     
        <header className="App-header" onClick={this.selectedElement}>
        <Menu />
         
        </header>
        <div className="App-Display">
        {this.appDisplay()}
        </div>
        
      </div>
    );
  }

}

export default App;
