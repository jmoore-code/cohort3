import React, {Component} from "react"
import {ReactComponent as HomeIcon} from "./menu icons/home.svg"
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

const StyledHomeIcon = styled(HomeIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill: 	rgb(255,240,245);
&:hover {
  fill:#61DAFB;
  -webkit-filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));      
  filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));  
}
`

const StyledTicTacToeIcon = styled(TicTacToeIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill:	rgb(255,240,245);
&:hover {
  fill:#61DAFB;
  -webkit-filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));      
  filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));  
}
`

const StyledPiggyIcon = styled(PiggyIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill:	rgb(255,240,245);
&:hover {
  fill:#61DAFB;
  -webkit-filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));      
  filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));  
}
`

const StyledCityIcon = styled(CityIcon)`
animation: ${rotate} infinite 20s linear;
height:80px;
width:80px;
display:block;
fill:	rgb(255,240,245); 
&:hover {
  fill:#61DAFB;
  -webkit-filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));      
  filter: drop-shadow(12px 12px 7px rgba(255,255,255,0.5));  
}
`



class Menu extends Component {
  
    render(){
        return (
            <div className="main-nav">
            <div className="navIcon" tabIndex="0"><StyledHomeIcon /></div>
            <div className="navIcon" tabIndex="1"><StyledTicTacToeIcon  /></div>
            <div className="navIcon" tabIndex="2"><StyledPiggyIcon /></div>
            <div className="navIcon" tabIndex="3"><StyledCityIcon /></div>   
            </div>
        )
    }
    }


export default Menu