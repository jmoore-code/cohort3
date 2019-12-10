import React from "react";
import {ReactComponent as ReactLogo} from "./react-brands.svg"
import styled, {keyframes} from "styled-components"

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

function homeComponent() {
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

  export default homeComponent;
