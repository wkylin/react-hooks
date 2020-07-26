import React,{useContext} from "react"
import {MyContext} from "./MovieContext"

function MovieList() {
  const [NewContext] =  useContext(MyContext);
  return (
    <div>
      {
        NewContext.map((movies)=>(
          <React.Fragment>
            <h3>{movies.name}</h3>
            <p>{movies.Price}</p>
          </React.Fragment>
        ))
      }
    </div>
  )
}
export default MovieList
