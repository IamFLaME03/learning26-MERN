import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
            <div className="container-fluid">

               <a className='navbar-brand text-danger' href="/">Netflix</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/netflixhome">Home</Link>
                     </li>
                     {/*<li className="nav-item">
                        <Link className="nav-link" to="/netflixmovies">Movies</Link>
                     </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/netflixshows">Shows</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/netflixsports">Sports</Link>
                     </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/fundemo1">FunDemo</Link>
                     </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/usestate1">UseState1</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/usestate2">UseState2</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/usestate3">UseState3</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/netflixtv">TV</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/netflixaccount">Account</Link>
                     </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/employee">Employee</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/inputdemo1">InputDemo1</Link>
                     </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/inputdemo2">InputDemo2</Link>
                     <li className="nav-item">
                        <Link className="nav-link" to="/propdemo">PropDemo</Link>
                     </li> 
                     */}
                     <li className="nav-item">
                        <Link className="nav-link" to="/formdemo1">FormDemo1</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/formdemo2">FormDemo2</Link>
                     </li>
                     {/* <li className="nav-item">
                        <Link className="nav-link" to="/formdemo3_task">FormDemo3Task</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/formdemo4_task">FormDemo4Task</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/formdemo5_task">FormDemo5Task</Link>
                     </li> */}
                     <li className="nav-item">
                        <Link className="nav-link" to="/formdemo3">FormDemo3</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/formdemo4">FormDemo4</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/formdemo6_task">FormDemo6Task</Link>
                     </li>

                     
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}
