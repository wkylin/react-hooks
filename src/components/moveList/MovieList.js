import React,{useContext} from "react"
import {MyContext} from "./MovieContext"

function MovieList() {
  const [NewContext] =  useContext(MyContext);
  return (
    <div>
      {
        NewContext.map((movies)=>(
          <React.Fragment key={movies.id}>
            <h3>{movies.name}</h3>
            <p>{movies.Price}</p>
            <p>{movies.id}</p>
          </React.Fragment>
        ))
      }
    </div>
  )
}
export default MovieList
