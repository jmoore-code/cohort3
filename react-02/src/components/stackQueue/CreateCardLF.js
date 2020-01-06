import React from "react"

function CreateCardLF(props) {

    return (
        <div className={props.cardType}>{props.content}
        <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`} />
        </div>
    )
}

export {CreateCardLF}