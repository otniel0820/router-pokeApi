import React,{createContext, useState} from 'react'


export const PokeContext = createContext(0);
const PokeContextProvider = ({children}) => {

    const [pokemonList, setPokemonList]=useState([])
    const [linlPoke, setLinkPoke]=useState([])
  return (
    <PokeContext.Provider value={{pokemonList, setPokemonList, linlPoke, setLinkPoke}} >
      {children}
    </PokeContext.Provider>
  )
}

export default PokeContextProvider