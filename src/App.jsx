import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Pokelist from "./components/Pokelist";
import PokemonInfo from "./components/PokemonInfo";



function App() {
  let { userId } = useParams();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokelist/>} />
          <Route path="/pokemonInfo/:userId" element={<PokemonInfo/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
