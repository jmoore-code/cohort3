import React, { useState } from "react";

function CreateCardLL(props) {
  return (
      <div
        className={
          props.selected === props.position ? "selectedCard" : "linkListCard"
        }
        id={props.position}
        onClick={props.onClick}
      >
        <div className="payload">
          <p>{props.name}</p>
          <p>{props.amount}</p>
        </div>
      </div>
  );
}

export default CreateCardLL;
