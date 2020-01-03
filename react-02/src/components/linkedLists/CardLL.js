import React from "react";

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
        <img alt="robots" src={`https://robohash.org/${props.name}?set=set2`} />
        <p>Name: {props.name}</p>
        <p>Power Level: {props.amount}</p>
      </div>
    </div>
  );
}

export default CreateCardLL;
