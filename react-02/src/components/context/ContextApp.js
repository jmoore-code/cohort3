import React, {useState} from "react";
import "./context.css";


function ContextApp(props) {

  return (
    <div>
      <p >React Theme Settings</p>
      <div className="settingsController">
        {`Text React Blue: `}
        <label className="switch">
          <input
            defaultChecked={props.checked}
            type="checkbox" onClick={props.onClick}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}


export default ContextApp;
