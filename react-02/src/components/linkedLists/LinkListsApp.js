import React, { useState, useEffect } from "react";
import { LinkedList } from "./linkedLists";
// import Form from "./LLForm"
import "./linkedlists.css";


const instLinkedList = new LinkedList()

function LinkedListApp() {
  const [message, setMessage] = useState(
    "Enter name and age to create first data node."
  );
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState(instLinkedList.position)
  const [sum, setSum] = useState(instLinkedList.sumAmount())

  


function handleSubmit(event) {
    event.preventDefault();
    instLinkedList.insert(name, Number(age));
    setName("")
    setAge("")
    // fill out list for dev purposes
    // instLinkedList.insert("Bob", 30)
    // instLinkedList.insert("Joe", 20)
    console.log(instLinkedList)
    //------
    setSum(instLinkedList.sumAmount())
    setMessage(instLinkedList.message)
}



function handleClick(event) {
    if (event.target.name === "first"){
        instLinkedList.first()
        setPosition(instLinkedList.position)
    } 
    if (event.target.name === "last") {
        instLinkedList.last()
        setPosition(instLinkedList.position)
    }
    if (event.target.name === "next") {
        instLinkedList.next()
        setPosition(instLinkedList.position)
    }
    if (event.target.name === "previous") {
        instLinkedList.previous()
        setPosition(instLinkedList.position)
    }
    if (event.target.name === "delete") {
        instLinkedList.delete()
        setPosition(instLinkedList.position)
        setSum(instLinkedList.sumAmount())
    }
    console.log(instLinkedList)
}


  return (
    <div className="mainContainerLL">
      <div className="controllerContainerLL">
        <div className="title">
          <h2>Linked Lists</h2>
          {message}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="inputName"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Age"
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
        <button name="first" onClick={handleClick}>First</button>
        <button name="last" onClick={handleClick}>Last</button>
        <button name="next" onClick={handleClick}>Next</button>
        <button name="previous" onClick={handleClick}>Previous</button>
        <button name="delete" onClick={handleClick}>Delete</button>
          <p>
            Age Sum Value: <br />
            {sum}
          </p>
        </div>
      </div>
      <div className="cardsContainerLL">
        <div className="linkListCard">Card</div>
      </div>
    </div>
  );
}

export default LinkedListApp;
