import React, {useState, useEffect} from "react"

function CreateCardLF(props) {

   let [pokemonImg, setPokemonImg] = useState("")

    useEffect(() => {
        async function fetchData() {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.content}`);
          res.json().then(res => setPokemonImg(res));
        }
        fetchData();
      }, []);

    return (
        <div className={props.cardType}>{props.content}
        <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonImg.id}.png`} />
        {console.log(pokemonImg.id)}
        </div>
    )
}

export {CreateCardLF}