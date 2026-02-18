import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const OMDBSearch = () => {
   // apikey : fa6a901a
   const [movies, setmovies] = useState([]);
   const [searchParam, setsearchParam] = useState("Iron Man")

   const searchMovie = async () => {
      console.log(searchParam);
      
      const res = await axios.get(
         `http://www.omdbapi.com/?apikey=fa6a901a&s=${searchParam}`,
      );

      console.log(res.data.Search);
      setmovies(res.data.Search);
   };
   return (
      <div style={{ textAlign: "center" }}>
         <h1>OMDB SEARCH</h1>
         <div className="d-flex" style={{margin:"auto", width:"300px"}}>
            <input 
            onChange={(e) => { setsearchParam(e.target.value) }} 
            class="form-control mr-sm-2" type="search" 
            placeholder="Type Movie name..." aria-label="Search" 
         />
         
         <button class="btn btn-outline-success" onClick={searchMovie}>Search</button>
</div>

         <div className="container">
            <div className="row">
               {movies.map((movie) => {
                  return (
                     <div key={movie.imdbID} className="col-sm-12 col-md-6 col-lg-4 p-3  ">
                        <Link to={`/omdb/${movie.imdbID}`} style={{ textDecoration: "node", color: 'black' }}>
                           <div className="card" style={{ width: "18rem" }}>
                              <img
                                 className="card-img-top"
                                 src={movie.Poster}
                                 alt="Card image cap"
                              />
                              <div className="card-body">
                                 <h5 className="card-title">{movie.Title}</h5>
                                 <p className="card-text">Year : {movie.Year}</p>̉
                                 <p className="card-text">Type : {movie.Type}</p>̉
                              </div>
                           </div>
                        </Link>
                     </div>
                  );
               })}

            </div>
         </div>
      </div>
   );
};
