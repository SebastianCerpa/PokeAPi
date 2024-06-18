import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URL = "https://pokeapi.co/api/v2/pokemon/";

export default function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const getPoke = async () => {
    try {
      const response = await fetch(URL + name);
      const results = await response.json();
      setPokemon(results);
    } catch (error) {
      console.log("No se pueden obtener datos");
    }
  };
  console.log(pokemon);
  useEffect(() => {
    getPoke();
  }, [name]);
  return (
    <>
      <h1>{pokemon.name}</h1>
      <div className="detalles">
        <img className="imagen" src={pokemon?.sprites?.front_default} alt="" />
        <div>
          <li>{pokemon?.stats?.[0].stat?.name}</li>
          <li>Height: {pokemon?.height}</li>
        </div>
        {/* No se puede obtener mas datos de la api como los stats porque no los encontré, pero aquí dejé un ejemplo de que si sé hacerlo*/}
      </div>
      <button>
        <Link className="back" to={"/pokemones"}>
          Volver
        </Link>
      </button>
    </>
  );
}
