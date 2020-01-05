import React, {useState} from "react"

function CreateCardLF(props) {
    return (
        <div className={props.cardType}>{props.content}</div>
    )
}

export {CreateCardLF}