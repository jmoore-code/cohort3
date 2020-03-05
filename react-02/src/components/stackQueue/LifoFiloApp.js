import React, { useState, useEffect } from "react";
import { Stack, Queue } from "./lifo_filo";
import { CreateCardLF } from "./CreateCardLF";
import {MyContext} from "../context/ThemeContext"
import "./lifo_filo.css";

let stackInst = new Stack();
let queueInst = new Queue();
let pokemonId = 1
  let pokemonIdObj = {}

function LifoFiloApp() {
  let [toggle, setToggle] = useState("Stack Controller");
  let [stack, setStack] = useState([]);
  let [removed, setRemoved] = useState([]);
  let [queue, setQueue] = useState([]);
  let [pokemon, setPokemon] = useState({});
  let [position, setPosition] = useState(0);
  let [removedSize, setRemovedSize] = useState(0);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=40");
      res.json().then(res => setPokemon(res));
    }
    fetchData();
  }, []);

  function toggleClick() {
    if (toggle === "Stack Controller") {
      setToggle("Queue Controller");
      return;
    }
    setToggle("Stack Controller");
  }

  function handleClick(event) {
    if (event.target.name === "putIn" && toggle === "Stack Controller") {
      stackInst.push(pokemon.results[position].name);
      pokemonIdObj[pokemon.results[position].name] = pokemonId
      pokemonId = pokemonId + 1
      setPosition(position + 1);
      setStack(stackInst.stack);
    }
    if (event.target.name === "putIn" && toggle === "Queue Controller") {
      queueInst.enqueue(pokemon.results[position].name);
      pokemonIdObj[pokemon.results[position].name] = pokemonId
      pokemonId = pokemonId + 1
      setPosition(position + 1);
      setQueue(queueInst.queue);
    }
    if (event.target.name === "takeOut" && toggle === "Stack Controller" && stack.length > 0) {
      let removedArray = removed;
      let removedPokemon = stackInst.pop();
      removedArray.push(removedPokemon);
      setRemoved(removedArray);
      setRemovedSize(removedSize + 1);
      setStack(stackInst.stack);
    }
    if (event.target.name === "takeOut" && toggle === "Queue Controller" && queue.length > 0) {
        let removedArray = removed;
        let removedPokemon = queueInst.dequeue();
        removedArray.push(removedPokemon);
        setRemoved(removedArray);
        setRemovedSize(removedSize + 1)
        setStack(stackInst.stack)
    }
  }

  function CardDisplayStack() {
    return stack.map((card, index) => {
      return <CreateCardLF content={card} key={index} cardType="stackCard" pokemonId={pokemonIdObj[card]}/>;
    });
  }

  function CardDisplayQueue() {
    return queue.map((card, index) => {
      return <CreateCardLF content={card} key={index} cardType="queueCard" pokemonId={pokemonIdObj[card]}/>;
    });
  }

  function CardDisplayDelete() {
    return removed.map((card, index) => {
      return <CreateCardLF content={card} key={index} cardType="deletedCard" pokemonId={pokemonIdObj[card]}/>;
    });
  }

  const myContext = React.useContext(MyContext);

  return (
    <div className="mainContainerLF" style={{
      ...{ color: myContext.textTheme },
      ...{ fontStyle: myContext.textItalicsTheme }
    }}>
      <div className="controllerLF">
        <div className="titleLF">{toggle}</div>
        <br></br>
        <br></br>
        <label className="switch">
            
          <input type="checkbox" onClick={toggleClick}></input>
          <span className="slider round"></span>
        </label>
        <br></br>
        <br></br>
        <div className="controllerButtons">
          <button name="putIn" onClick={handleClick}>
            Put In Pokemon
          </button>
          <button name="takeOut" onClick={handleClick}>
            Take Out Pokemon
          </button>
        {/* <div className="appDetails">
            <p>This app highlights the difference between two data type of
            Stack and Queue.</p> 
            <p>The Stack will operate on a last in first out principle.</p>
            <p>The Queue will operate on a fist in last out principle.</p>
            <p>Pay attention to the order that the Pokemon leave and enter each column when you press Put In or Take Out</p>
        </div> */}
        </div>
      </div>
      <div className="cardFieldLF">
      <div>Stack Example:</div>
      <div>Queue Example:</div>
      <div>Deleted:</div>

        <div className="lifoContainer">
            <CardDisplayStack />
            {/* <CreateCardLF cardType="stackCard" content="stack"/> */}
        </div>
        <div className="filoContainer">
            <CardDisplayQueue />
            {/* <CreateCardLF cardType="queueCard" content="queue" /> */}
        </div>
        <div className="removeContainer">
            <CardDisplayDelete />
            {/* <div className="deletedCard">deletedCard</div> */}
        </div>

      </div>
 
    </div>
  );
}

export default LifoFiloApp;
