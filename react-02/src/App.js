import React from 'react';
import Menu from "./components/Menu"
import {ReactComponent as ReactLogo} from "./react-brands.svg"
import styled, {keyframes} from "styled-components"
import './App.css';
import {Game} from "./components/tictactoe/board"


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:#999;
}
100%{
  fill:#61DAFB;
}
`;


const StyledLogo = styled(ReactLogo)`
animation: ${rotate} infinite 20s linear;
height:15rem;
width:15rem;
display:block;
.lines{
  animation: ${fade} infinite 8s linear;
		}
}
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "home" 
    }
    this.selectedElement = this.selectedElement.bind(this);
  }

  selectedElement = (event) => {
    this.setState({
      selected: event.target.id
    })
  }

  homeComponent = () => {
    return (
      <div>
      <StyledLogo />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      </div>
    )
  }

  appDisplay = () => {
    if(this.state.selected === "home") {
      return <this.homeComponent />;
    } if (this.state.selected === "tictactoe") {
      return <Game />
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
