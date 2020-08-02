import React, { useState, createContext } from "react";
import { uuid } from 'uuidv4';

export const MyContext = createContext();

export function MovieContext(props) {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      Price: 10,
      id: uuid()
    },
    {
      name: 'Cheese Puffs: The Movie',
      Price: 55,
      id: uuid()
    },
    {
      name: 'PlayStation vs Xbox: The documentary',
      Price: 10,
      id: uuid()
    }
  ]);

  return (
    <MyContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MovieContext;
