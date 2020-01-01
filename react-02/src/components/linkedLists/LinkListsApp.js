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
  


function handleSubmit(event) {
    event.preventDefault();
    instLinkedList.insert(name, age);
    setName("")
    setAge("")
     
}


  return (
    <div className="mainContainerLL">
      <div className="controllerContainerLL">
        <div className="title">
          <h2>LinkedLists</h2>
          {message}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="inputName"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Age"
            name="inputAge"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
          <br></br>
          <button type="submit">Create Node</button>
        </form>
        <br></br>
        <div className="sumOutput">
          <p>
            Age Sum Value: <br />
            Some age function
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
