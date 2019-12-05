import React, { Component } from "react";
import { ReactComponent as HomeIcon } from "./menu icons/home.svg";
import { ReactComponent as TicTacToeIcon } from "./menu icons/tic-tac-toe.svg";
import { ReactComponent as PiggyIcon } from "./menu icons/piggy-bank.svg";
import { ReactComponent as CityIcon } from "./menu icons/cityscape.svg";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledHomeIcon = styled(HomeIcon)`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
  width: 80px;
  display: block;
  &:hover {
    fill: #61dafb;
    -webkit-filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
    filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
  }
`;

const StyledTicTacToeIcon = styled(TicTacToeIcon)`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
  width: 80px;
  display: block;
  &:hover {
    fill: #61dafb;
    -webkit-filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
    filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
  }
`;

const StyledPiggyIcon = styled(PiggyIcon)`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
  width: 80px;
  display: block;
  &:hover {
    fill: #61dafb;
    -webkit-filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
    filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
  }
`;

const StyledCityIcon = styled(CityIcon)`
  class: "testClass";
  animation: ${rotate} infinite 20s linear;
  height: 80px;
  width: 80px;
  display: block;
  &:hover {
    fill: #61dafb;
    -webkit-filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
    filter: drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5));
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 0
    };
  }
  setActive = link => {
    this.setState({ activeLink: link });
  };
  render() {
    return (
      <div className="main-nav">
        <div
          className="navIcon"
          onClick={() => {
            this.setActive(0);
          }}
        >
          <StyledHomeIcon
            className={this.state.activeLink === 0 ? "selectClass" : ""}
          />
        </div>
        <div
          className="navIcon"
          onClick={() => {
            this.setActive(1);
          }}
        >
          <StyledTicTacToeIcon
            className={this.state.activeLink === 1 ? "selectClass" : ""}
          />
        </div>
        <div
          className="navIcon"
          onClick={() => {
            this.setActive(2);
          }}
        >
          <StyledPiggyIcon
            className={this.state.activeLink === 2 ? "selectClass" : ""}
          />
        </div>
        <div
          className="navIcon"
          onClick={() => {
            this.setActive(3);
          }}
        >
          <StyledCityIcon
            className={this.state.activeLink === 3 ? "selectClass" : ""}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
