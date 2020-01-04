import React, {useState} from "react";
import "./lifo_filo.css"

function LifoFiloApp() {

    let [toggle, setToggle] = useState("stack")

    function toggleClick() {
        if (toggle === "stack") {
            setToggle("queue")
            return;
        } 
            setToggle("stack")
    }

    return (
        <div className="mainContainerLF">
            <div className="controllerLF">controller
                <br></br>            
                <label className="switch" >
                    <input type="checkbox" onClick={toggleClick}></input>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="lifoContainer">stack
                <div className="stackCard">stackCard</div>
            </div>
            <div className="filoContainer">queue
                <div className="queueCard">queueCard</div>
            </div>
            <div className="removeContainer">removed
                <div className="deletedCard">deletedCard</div>
            
            </div>

        </div>
        
    )
}

export default LifoFiloApp