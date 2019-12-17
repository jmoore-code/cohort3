import React from 'react';
import Menu from "./components/menu/Menu"
import Home from "./components/Home"
import {Game} from "./components/tictactoe/Board"
import AccountsApp from "./components/accounts/AccountsApp"
import CitiesApp from "./components/cities/CitiesApp"
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "cities" 
    }
    this.selectedElement = this.selectedElement.bind(this);
  }

  selectedElement = (event) => {
    
    if (event.target.id === "home" ) {
      this.setState({
        selected: "home"
      })
    }
    if (event.target.id === "tictactoe" ) {
      this.setState({
        selected: "tictactoe"
      })
    }
    if (event.target.id === "accounts" ) {
      this.setState({
        selected: "accounts"
      })
    }
    if (event.target.id === "cities") {
      this.setState({
        selected: "cities"
      })
    }
  }



  appDisplay = () => {
    if(this.state.selected === "home") {
      return <Home />;
    } if (this.state.selected === "tictactoe") {
      return <Game />
    } if (this.state.selected === "accounts") {
      return <AccountsApp />
    } if (this.state.selected === "cities") {
      return <CitiesApp />
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
