import React from "react";
import { MyContext } from "../context/ThemeContext";

function CreateCardLF(props) {
  const myContext = React.useContext(MyContext);
  return (
    <div
      className={props.cardType}
      style={{
        ...{ color: myContext.textTheme },
        ...{ fontStyle: myContext.textItalicsTheme }
      }}
    >
      {props.content}
      <img
        alt="pokemon"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`}
      />
    </div>
  );
}

export { CreateCardLF };
