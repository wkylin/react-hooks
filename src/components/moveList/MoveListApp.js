import React from "react";
import ChangeContext from './ChangeContext.js';
import MovieList from './MovieList.js';
import NavBar from './NavBar.js';
import { MovieContext } from "./MovieContext";
function MoveListApp(){
  return (
    <MovieContext>
      <NavBar />
      <ChangeContext/>
      <MovieList/>
    </MovieContext>
  )
}
export default MoveListApp;
