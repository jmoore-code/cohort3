import React from 'react';
import Menu from "./components/menu/Menu"
import Home from "./components/Home"
import {Game} from "./components/tictactoe/Board"
import AccountsApp from "./components/accounts/AccountsApp"
import CitiesApp from "./components/cities/CitiesApp"
import LinkedListApp from "./components/linkedLists/LinkListsApp"
import LifoFiloApp from "./components/stackQueue/LifoFiloApp"
import ContextApp from "./components/context/ContextApp"
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "lifoFilo" 
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
    if (event.target.id === "linkLists") {
      this.setState({
        selected: "linkLists"
      })
    }
    if (event.target.id === "lifoFilo") {
      this.setState({
        selected: "lifoFilo"
      })
    }
    if (event.target.id === "gear") {
      this.setState({
        selected: "gear"
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
    } if (this.state.selected === "linkLists") {
      return <LinkedListApp />
    } if (this.state.selected === "lifoFilo") {
      return <LifoFiloApp />
    } if (this.state.selected === "gear") {
      return <ContextApp />
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
