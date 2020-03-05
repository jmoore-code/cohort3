import React from "react";
import { MyContext } from "./ThemeContext";
import "./context.css";

import Popup from "reactjs-popup";

const InfoPopup = () => (
  <Popup trigger={<button className="button"> Information </button>} modal>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"></div>
        <div className="content">
          {" "}
          <p>
            The "Context" exercise is designed to us how to implement React Context 
            throughout our entire React App to change the theme of our all our pages
            by storing state in a "store" or "global location".
          </p>
          <p>
            The exercise also required the use of React Hooks instead of using
            classes.
          </p>
          <p>
            The toggle will switches to turn the text React blue or italicized. Switch to
            the other apps and notice how the text remains themed throughout.
          </p>
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

function ContextApp() {
  const myContext = React.useContext(MyContext);

  return (
    <div
      style={{
        ...{ color: myContext.textTheme },
        ...{ fontStyle: myContext.textItalicsTheme }
      }}
    >
      <p>React Theme Settings</p>
      <div className="settingsController">
        <div className="reactBlueText">
          {`Text React Blue: `}
          <label className="switch">
            <input
              defaultChecked={myContext.textReactBlueToggle}
              type="checkbox"
              onClick={myContext.toggleClick}
              id="textReactBlue"
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
        <br></br>
        <div className="textItalicized">
          {`Text Italicized: `}
          <label className="switch">
            <input
              defaultChecked={myContext.textItalToggle}
              type="checkbox"
              onClick={myContext.toggleClick}
              id="textItalicized"
            ></input>
            <span className="slider round"></span>
          </label>
          <div className="info-modal" style={{ color: "black" }}>
            <InfoPopup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContextApp;
