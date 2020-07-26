import React from 'react';
import './App.css';
import{ MovieContext} from "./components/moveList/MovieContext.js"
import MovieList from './components/moveList/MovieList.js';
import ChangeContext from "./components/moveList/ChangeContext.js"
import NavBar from "./components/moveList/NavBar.js"
function App() {
  return (
    <MovieContext>
      <NavBar />
      <ChangeContext/>
      <MovieList/>
    </MovieContext>
  );
}

export default App;
