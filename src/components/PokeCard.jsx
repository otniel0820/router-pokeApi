import { React, useState, useEffect } from "react";
import { getPokemon } from "../utils/getPokemon";
import { Link } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

const PokeCard = ({ url }) => {
  const [uniquePokemon, setUniquePokemon] = useState();
  

  useEffect(() => {
    getPokemon(url).then((data) => setUniquePokemon(data));
  }, []);

  
  
  return (
    <div className="w-[15em] flex flex-col justify-center items-center border-2 border-solid border-black rounded-[1em]">
      <p>{uniquePokemon?.id}</p>
      <p>{uniquePokemon?.name}</p>
      <img 
        src={uniquePokemon?.sprites.other.dream_world.front_default}
        alt=""
        className="w-[10em] h-[10em]"
      />
      <Link to={`/pokemonInfo/${uniquePokemon?.name}`}><button className="border-2 border-solid border-slate-100 mb-[1em] rounded-[0.5em] w-[10em]" onClick={()=>{
        
      }}>Ver</button></Link>
    </div>
  );
};

export default PokeCard;
