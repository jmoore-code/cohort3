import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Menu from "./components/menu/Menu";
import Home from "./components/Home";
import { Game } from "./components/tictactoe/Board";
import AccountsApp from "./components/accounts/AccountsApp";
import CitiesApp from "./components/cities/CitiesApp";
import LinkedListApp from "./components/linkedLists/LinkListsApp";
import LifoFiloApp from "./components/stackQueue/LifoFiloApp";
import { TextThemeContext } from "./components/context/ThemeContext";
import { StateContextProvider } from "./components/context/StateContext";

it("App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Menu renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Home renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Tic-Tac-Toe renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StateContextProvider>
      <TextThemeContext>
        <Game />
      </TextThemeContext>
    </StateContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("AccountsApp renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StateContextProvider>
      <TextThemeContext>
        <AccountsApp/>
      </TextThemeContext>
    </StateContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Cities app renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StateContextProvider>
      <TextThemeContext>
        <CitiesApp/>
      </TextThemeContext>
    </StateContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Linked List renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StateContextProvider>
      <TextThemeContext>
        <LinkedListApp/>
      </TextThemeContext>
    </StateContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("LIFO FILO renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StateContextProvider>
      <TextThemeContext>
        <LifoFiloApp/>
      </TextThemeContext>
    </StateContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});