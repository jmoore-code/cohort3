import React, { useState } from "react";
import { LinkedList } from "./linkedLists";
import CreateCardLL from "./CardLL";
import {MyContext} from "../context/ThemeContext"

import "./linkedlists.css";

const instLinkedList = new LinkedList();

function LinkedListApp() {
  const [message, setMessage] = useState(
    "Enter name and power level to create first bot data node."
  );
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState();
  const [sum, setSum] = useState(instLinkedList.sumAmount());
  const [size, setSize] = useState(instLinkedList.size);
  const [selected, setSelected] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    if (size > 0 && position !== size -1) {
      instLinkedList.insert(name, Number(age));
      setName("");
      setAge("");
      setSize(instLinkedList.size);
      setSum(instLinkedList.sumAmount());
      setMessage(instLinkedList.message);
      setPosition(position + 1)
      setSelected(selected + 1)
      return;
    }
    instLinkedList.insert(name, Number(age));
    setName("");
    setAge("");
    setPosition(instLinkedList.size -1)
    setSelected(instLinkedList.size -1);
    setSize(instLinkedList.size);
    setSum(instLinkedList.sumAmount());
    setMessage(instLinkedList.message);
  }

  function positionNext() {
    if(position === size -1){
      return Number(position)
    } else {
      return Number(position + 1)
    }
  }

  function positionPrev() {
    if(position === 0){
      return Number(position)
    } else {
      return Number(position - 1)
    }
  }

  function handleClick(event) {
    if (event.target.name === "first" && size > 0 ) {
      instLinkedList.first();
      setPosition(0);
      setSelected(0);
    }
    if (event.target.name === "last" && size > 0) {
      instLinkedList.last();
      setPosition(size -1);
      setSelected(size -1);
    }
    if (event.target.name === "next" && size > 0) {
      instLinkedList.next();
      setPosition(positionNext());
      setSelected(positionNext());
    }
    if (event.target.name === "previous" && size > 0) {
      instLinkedList.previous();
      setPosition(positionPrev());
      setSelected(positionPrev());
    }
    if (event.target.name === "delete") {
      if (size === 1 || position === 0) {
        instLinkedList.delete();
        setSize(instLinkedList.size);
        setSum(instLinkedList.sumAmount());
        setMessage(instLinkedList.message);
        return;
      }
      if (size > 1 && position !== size -1) {
        instLinkedList.delete();
        setPosition(position -1)
        setSelected(selected -1)
        setSize(instLinkedList.size);
        setSum(instLinkedList.sumAmount());
        setMessage(instLinkedList.message);
        return;
      } 
      if (size > 1) {
        instLinkedList.delete();
        setPosition(instLinkedList.size -1);
        setSelected(instLinkedList.size -1);
        setSize(instLinkedList.size);
        setSum(instLinkedList.sumAmount());
        setMessage(instLinkedList.message);
      }
     
     
    }
    if (event.target.name === "exampleList") {
      instLinkedList.insert("Bob", 30);
      instLinkedList.insert("Joe", 20);
      instLinkedList.insert("Jason", 1000);
      instLinkedList.insert("Cam", 45)
      setPosition(instLinkedList.size -1)
      setSelected(instLinkedList.size -1);
      setSize(instLinkedList.size);
      setSum(instLinkedList.sumAmount());
      setMessage(instLinkedList.message);
      setName("");
      setAge("");
    }

  }

 

  function cardDisplayLL() {
    if (size > 0) {
      let current = instLinkedList.head;
      let array = [];
      while (current) {
        array.push({ subject: current.subject, amount: current.amount });
        current = current.next;
      }
      return array.map((card, index) => {
        return (
          <CreateCardLL
            name={card.subject}
            amount={card.amount}
            key={card.subject}
            position={index}
            selected={selected}
          />
        );
      });
    }
  }

  const myContext = React.useContext(MyContext);



  return (
    <div className="mainContainerLL"  style={{
      ...{ color: myContext.textTheme },
      ...{ fontStyle: myContext.textItalicsTheme }
    }}>
      <div className="controllerContainerLL">
        <div className="title">
          <h2>Linked Lists: Node Bot Generator</h2>
          <p>{message}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Robot Name"
            name="inputName"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Power Level"
            name="inputAge"
            value={age}
            onChange={event => setAge(event.target.value)}
            required
          />
          <br></br>
          <button type="submit">Create Node</button>
        </form>
        <button name="exampleList" onClick={handleClick}>
          Example List
        </button>
        <br></br>
        <div className="sumOutput">
          <p>Current node position: {position} </p>
          <button name="first" onClick={handleClick}>
            First
          </button>
          <button name="last" onClick={handleClick}>
            Last
          </button>
          <button name="next" onClick={handleClick}>
            Next
          </button>
          <button name="previous" onClick={handleClick}>
            Previous
          </button>
          <button name="delete" onClick={handleClick}>
            Delete
          </button>
          <p>
            Power Level Sum: <br />
            {sum}
          </p>
        </div>
      </div>
      <div className="cardsContainerLL">{cardDisplayLL()}</div>
    </div>
  );
}

export default LinkedListApp;
