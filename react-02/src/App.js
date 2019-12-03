import React from 'react';
// import reactLogo from './react-brands.svg';
import Menu from "./components/Menu"
import {ReactComponent as ReactLogo} from "./react-brands.svg"
import styled, {keyframes} from "styled-components"
import './App.css';

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

function App() {
  return (
    
    <div className="App">
    <Menu />
      <header className="App-header">
        <StyledLogo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
