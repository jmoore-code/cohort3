import React, { useState } from "react";
import { MyContext } from "./ThemeContext";
import "./context.css";

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
        </div>
      </div>
    </div>
  );
}

export default ContextApp;
