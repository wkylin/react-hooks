import React from 'react';
import './App.css';
import{ MovieContext} from "./MovieContext"
import MovieList from './MovieList';
import ChangeContext from "./ChangeContext"
import NavBar from "./NavBar"
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
