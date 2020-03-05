import React from "react";
import { ReactComponent as ReactLogo } from "./react-brands.svg";
import styled, { keyframes } from "styled-components";
import Popup from "reactjs-popup"

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
`;

const PopupExample = () => (
  <Popup trigger={<button className="button"> Information </button>} modal>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"></div>
        <div className="content">
          {" "}
          These pages are a collection of apps I built during my course at EvolveU.
          Please use the icons at the top to navigate to the different pages.
        </div>
        <div className="actions">
         
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
);

function homeComponent() {
  return (
    <div className="homeLogoDiv">
      <StyledLogo />
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      <h1>Welcome to Jason Moore's React App</h1>
      <div style={{color:"black"}}>
      <PopupExample />

      </div>
    
    </div>
  );
}



export default homeComponent;
