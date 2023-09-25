import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../utils/getPokemon";
import bgPoke from '../assets/bgPoke.jfif'

const PokemonInfo = ({}) => {
  let { userId } = useParams();
  const api = `https://pokeapi.co/api/v2/pokemon/${userId}`;
  const [atributes, setAtributes] = useState([]);

  useEffect(() => {
    getPokemon(api).then((data) => setAtributes(data));
  }, []);

  const imgSprites = atributes.sprites;
  let imgPokemon = [];
  if (typeof imgSprites !== "undefined") {
    imgPokemon = Object.values(imgSprites).slice(0, 8);
  }

  const imgP = imgPokemon.filter((pokemon) => pokemon !== null);

  const abilities = atributes?.abilities;

  const movPokemon = atributes?.moves;

  return (
    <div className="flex flex-col justify-center items-center gap-[1em] bg-cover bg-no-repeat bg-center h-[100vh]"style={{backgroundImage:`url(${bgPoke})`}}>
        <div className="flex flex-col justify-center items-center gap-[1em] border-2 border-solid mt-[1em] p-[1em] rounded-md bg-[#F5F5F5] bg-opacity-60">
          <h1 className="text-[4em]">Informacion del Pokemon</h1>
      <p className="text-[1.5em] ">Id: {atributes?.id}</p>
      <p className="text-[1.5em]">Nombre: {atributes?.name}</p>
      <div className="flex">
        {imgP?.map((url) => {
          return <img src={url} key={atributes?.name} className=" w-[10em] " />;
        })}
      </div>
      <h1 className="text-[1.5em]">Habilidades</h1>
      <ul>
        {abilities?.map((hab) => {
          return <li className="font-semibold">{hab?.ability?.name}</li>;
        })}
      </ul>
      <h1 className="text-[1.5em]">Movimientos</h1>
      <ul className="overflow-y-scroll h-[10em] w-[15em] flex flex-col gap-1 border-2 border-solid border- p-[1em]">
        {movPokemon?.map((mov) => {
          return <li>Move: {mov?.move?.name}.</li>;
        })}
      </ul>  
        </div>
      
    </div>
  );
};

export default PokemonInfo;
