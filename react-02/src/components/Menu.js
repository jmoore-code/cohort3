import React, {Component} from "react"
import {ReactComponent as HomeIcon} from "./menu icons/home-solid.svg"
import {ReactComponent as TicTacToeIcon} from "./menu icons/tic-tac-toe.svg"
import {ReactComponent as PiggyIcon} from "./menu icons/piggy-bank.svg"
import {ReactComponent as CityIcon} from "./menu icons/cityscape.svg"
import styled, {keyframes} from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledTicTacToeIcon = styled(TicTacToeIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill:""`

const StyledHomeIcon = styled(HomeIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill:""`

const StyledPiggyIcon = styled(PiggyIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill:""`

const StyledCityIcon = styled(CityIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill:""`


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor:""
        }
    }
    boxClick = (e) => {
        this.setState({bgColor: "red"})
    }
    render(){
        return (
            <div className="main-nav">
            <div className="navIcon"><StyledHomeIcon /></div>
            <div className="navIcon"><StyledTicTacToeIcon /></div>
            <div className="navIcon"><StyledPiggyIcon /></div>
            <div className="navIcon"><StyledCityIcon /></div>   
            </div>
        )
    }
    }


export default Menu