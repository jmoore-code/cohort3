import React, { useState, useEffect } from "react";
import { Stack, Queue } from "./lifo_filo";
import { CreateCardLF } from "./CreateCardLF";
import "./lifo_filo.css";

let stackInst = new Stack();
let queueInst = new Queue();

function LifoFiloApp() {
  let [toggle, setToggle] = useState("Stack Controller");
  let [stack, setStack] = useState([]);
  let [removed, setRemoved] = useState([]);
  let [queue, setQueue] = useState([]);
  let [pokemon, setPokemon] = useState({});
  let [position, setPosition] = useState(0);

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
      setPosition(position + 1);
      setStack(stackInst.stack);
    }
    if (event.target.name === "putIn" && toggle === "Queue Controller") {
      queueInst.enqueue(pokemon.results[position].name);
      setPosition(position + 1);
      setQueue(queueInst.queue);
    }
    if (event.target.name === "takeOut" && toggle === "Stack Controller") {
     let removedArray = removed
     let removedPokemon = stackInst.pop();
     removedArray.push(removedPokemon)
     setRemoved(removedArray)
    setStack(stackInst.stack);
      console.log(stack);
    }
  }

 

  function CardDisplayStack() {
    return stack.map((card, index) => {
      return <CreateCardLF content={card} key={index} cardType="stackCard" />;
    });
  }

  function CardDisplayQueue() {
    return queue.map((card, index) => {
      return <CreateCardLF content={card} key={index} cardType="queueCard" />;
    });
  }

  function CardDisplayDelete() {
    return removed.map((card, index) => {
      return (
        <CreateCardLF content={card} key={index} cardType="deletedCard" />
      );
    });
  }

  return (
    <div className="mainContainerLF">
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
            Put In
          </button>
          <button name="takeOut" onClick={handleClick}>
            Take Out
          </button>
        </div>
      </div>
      <div className="lifoContainer">
        stack
        <CardDisplayStack />
        {/* <CreateCardLF cardType="stackCard" content="stack"/> */}
      </div>
      <div className="filoContainer">
        queue
        <CardDisplayQueue />
        {/* <CreateCardLF cardType="queueCard" content="queue" /> */}
      </div>
      <div className="removeContainer">
        removed
        <CardDisplayDelete />
        {/* <div className="deletedCard">deletedCard</div> */}
      </div>
    </div>
  );
}

export default LifoFiloApp;
