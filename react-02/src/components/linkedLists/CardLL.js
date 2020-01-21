import React from "react";
import { MyContext } from "../context/ThemeContext";


function CreateCardLL(props) {
  const myContext = React.useContext(MyContext);

  return (
    <div
      className={
        props.selected === props.position ? "selectedCard" : "linkListCard"
      }
      id={props.position}
      style={{
        ...{ color: myContext.textTheme },
        ...{ fontStyle: myContext.textItalicsTheme }
      }}
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
