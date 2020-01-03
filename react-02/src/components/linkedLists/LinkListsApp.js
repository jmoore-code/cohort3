import React, { useState } from "react";
import { LinkedList } from "./linkedLists";
import CreateCardLL from "./CardLL";
// import Form from "./LLForm"
import "./linkedlists.css";

const instLinkedList = new LinkedList();

function LinkedListApp() {
  const [message, setMessage] = useState(
    "Enter name and power level to create first bot data node."
  );
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState(instLinkedList.position);
  const [sum, setSum] = useState(instLinkedList.sumAmount());
  const [size, setSize] = useState(instLinkedList.size);

  const [selected, setSelected] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    instLinkedList.insert(name, Number(age));

    setName("");
    setAge("");
    // fill out list for dev purposes
    instLinkedList.insert("Bob", 30);
    instLinkedList.insert("Joe", 20);
    console.log(instLinkedList);
    //------
    setSize(instLinkedList.size);
    setSum(instLinkedList.sumAmount());
    setMessage(instLinkedList.message);
  }

  function handleClick(event) {
    if (event.target.name === "first") {
      instLinkedList.first();
      setPosition(instLinkedList.position);
      setSelected(instLinkedList.position);
    }
    if (event.target.name === "last") {
      instLinkedList.last();
      setPosition(instLinkedList.position);
      setSelected(instLinkedList.position);
    }
    if (event.target.name === "next") {
      instLinkedList.next();
      setPosition(instLinkedList.position);
      setSelected(instLinkedList.position);
    }
    if (event.target.name === "previous") {
      instLinkedList.previous();
      setPosition(instLinkedList.position);
      setSelected(instLinkedList.position);
    }
    if (event.target.name === "delete") {
      instLinkedList.delete();
      setPosition(instLinkedList.position);
      setSelected(instLinkedList.position);
      setSize(instLinkedList.size);
      setSum(instLinkedList.sumAmount());
      setMessage(instLinkedList.message);
    }

    console.log(instLinkedList);
  }

  function selectCard(index) {
    setSelected(index);
    instLinkedList.selectNode(index);
    setPosition(index);
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
            onClick={() => {
              selectCard(index);
            }}
            selected={selected}
          />
        );
      });
    }
  }

  return (
    <div className="mainContainerLL">
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