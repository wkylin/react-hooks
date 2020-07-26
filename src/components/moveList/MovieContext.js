import React, { useState, createContext } from "react";

export const MyContext = createContext();

export function MovieContext(props) {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      Price: 10
    },
    {
      name: 'Cheese Puffs: The Movie',
      Price: 55
    },
    {
      name: 'PlayStation vs Xbox: The documentary',
      Price: 10
    }
  ]);
  
  return (
    <MyContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MovieContext;
