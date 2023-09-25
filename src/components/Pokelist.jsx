import {React, useState,useEffect, useContext} from 'react'
import { getPokemon } from '../utils/getPokemon';
import { PokeContext } from '../context/PokeContext';
import PokeCard from './PokeCard';


const Pokelist = () => {
    const {pokemonList, setPokemonList} =useContext(PokeContext);
    useEffect(() => {
        getPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`).then((data) => setPokemonList(data.results));
        
      }, []);

      
  return (
    <div className='flex flex-wrap gap-[1em] pl-[1em] pt-[1em]'>
      {pokemonList.map((pokemon)=> <PokeCard key={pokemon.name} url={pokemon.url}/>)}
    </div>
  )
}

export default Pokelist
