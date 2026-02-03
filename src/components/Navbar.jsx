import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <div>
         <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
            <div class="container-fluid">

               <a class="navbar-brand" className='text-danger' href="/">Netflix</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/netflixhome">Home</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="/netflixmovies">Movies</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="/netflixshows">Shows</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="/netflixsports">Sports</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="/netflixtv">TV</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="/netflixaccount">Account</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}
