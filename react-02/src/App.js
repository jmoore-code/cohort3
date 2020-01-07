import React from "react";
import Menu from "./components/menu/Menu";
import Home from "./components/Home";
import { Game } from "./components/tictactoe/Board";
import AccountsApp from "./components/accounts/AccountsApp";
import CitiesApp from "./components/cities/CitiesApp";
import LinkedListApp from "./components/linkedLists/LinkListsApp";
import LifoFiloApp from "./components/stackQueue/LifoFiloApp";
import ContextApp from "./components/context/ContextApp";
import {
  TextThemeContext,
  ItalicsThemeContext,
  TextThemeContext2
} from "./components/context/ThemeContext";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "gear",
      //state objects for context theme
      textTheme: "",
      textItalicsTheme: "",
      textReactBlueToggle: false,
      textItalToggle: false
    };
    this.selectedElement = this.selectedElement.bind(this);
  }

  selectedElement = event => {
    if (event.target.id === "home") {
      this.setState({
        selected: "home"
      });
    }
    if (event.target.id === "tictactoe") {
      this.setState({
        selected: "tictactoe"
      });
    }
    if (event.target.id === "accounts") {
      this.setState({
        selected: "accounts"
      });
    }
    if (event.target.id === "cities") {
      this.setState({
        selected: "cities"
      });
    }
    if (event.target.id === "linkLists") {
      this.setState({
        selected: "linkLists"
      });
    }
    if (event.target.id === "lifoFilo") {
      this.setState({
        selected: "lifoFilo"
      });
    }
    if (event.target.id === "gear") {
      this.setState({
        selected: "gear"
      });
    }
  };

  toggleClick = event => {
    if (event.target.id === "textReactBlue") {
      if (this.state.textTheme === "#61DAFB") {
        this.setState({
          textTheme: "",
          textReactBlueToggle: false
        });
        return;
      }
      this.setState({
        textTheme: "#61DAFB",
        textReactBlueToggle: true
      });
    }
    if (event.target.id === "textItalicized") {
      if (this.state.textItalicsTheme === "italic") {
        this.setState({
          textItalicsTheme: "",
          textItalToggle: false
        });
        return;
      }
      this.setState({
        textItalicsTheme: "italic",
        textItalToggle: true
      });
    }
  };

  appDisplay = () => {
    if (this.state.selected === "home") {
      return <Home />;
    }
    if (this.state.selected === "tictactoe") {
      return <Game />;
    }
    if (this.state.selected === "accounts") {
      return <AccountsApp />;
    }
    if (this.state.selected === "cities") {
      return <CitiesApp />;
    }
    if (this.state.selected === "linkLists") {
      return <LinkedListApp />;
    }
    if (this.state.selected === "lifoFilo") {
      return <LifoFiloApp />;
    }
    if (this.state.selected === "gear") {
      return (
        <ContextApp
          textReactBlue={this.state.textReactBlueToggle}
          textItalToggle={this.state.textItalToggle}
          onClick={this.toggleClick}
        />
      );
    }
  };

  render() {
    return (
      <TextThemeContext2>
        <ItalicsThemeContext.Provider value={this.state.textItalicsTheme}>
          <TextThemeContext.Provider value={this.state.textTheme}>
            <div className="App">
              <header className="App-header" onClick={this.selectedElement}>
                <Menu />
              </header>

              <div className="App-Display">{this.appDisplay()}</div>
            </div>
          </TextThemeContext.Provider>
        </ItalicsThemeContext.Provider>
      </TextThemeContext2>
    );
  }
}

export default App;
