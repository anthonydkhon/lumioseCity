import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navibar from './components/Navbar/navbar';
import TcgSets from './components/TcgSets';
import Home from './components/Home';
import PokemonCards from './components/pokemonCards'
import SingleCard from './components/singleCard/singleCard';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navibar />
      </header>
      
      <Switch>
      <Route path="/PokemonSets" exact> 
        <TcgSets />
      </Route>
      <Route path="/PokemonSets/:id" children={<PokemonCards />} />
      <Route path="/card/:id" children={<SingleCard />} />
      <Route path="/">
      <Home />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
