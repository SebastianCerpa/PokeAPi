import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
  const [poke, setPoke] = useState([]);
  const [name, setName] = useState("");
  const URL = "https://pokeapi.co/api/v2/pokemon";
  const navigate = useNavigate();

  const getPoke = async () => {
    try {
      const response = await fetch(URL);
      const { results } = await response.json();
      setPoke(results);
    } catch (error) {
      console.log("No se pueden obtener datos");
    }
  };

  useEffect(() => {
    getPoke();
  }, []);

  return (
    <>
      <div className="cont">
        <h1>Selecciona un Pokémon</h1>
        <select
          className="select"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          {poke.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <button onClick={() => navigate(`/pokemones/${name}`)}>
          Ver Detalle
        </button>
      </div>
    </>
  );
}
