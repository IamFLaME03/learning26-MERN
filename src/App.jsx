
// import './App.css'

import { FooterComponent } from "./components/FooterComponent"
import { HeaderComponent } from "./components/HeaderComponent"
import { MapDemo1 } from "./components/MapDemo1"
import { MapDemo2 } from "./components/MapDemo2"
import { MapDemo3 } from "./components/MapDemo3"
import { MapDemo4 } from "./components/MapDemo4"
import { MapDemo5 } from "./components/MapDemo5"
import { MapDemo6 } from "./components/MapDemo6"
import { MapDemo7 } from "./components/MapDemo7"
import { MapDemo8 } from "./components/MapDemo8"
import { MapDemo9 } from "./components/MapDemo9"
import { MapDemo10 } from "./components/MapDemo10"
import { Route, Routes } from "react-router-dom"
import { HomeComponent } from "./components/HomeComponent"
import { NetflixHomeComponent } from "./components/NetflixHomeComponent"
import { NetflixMoviesComponent } from "./components/NetflixMoviesComponent"
import { NetflixShowsComponent } from "./components/NetflixShowsComponent"
import { Navbar } from "./components/Navbar"
import { NetflixSportsComponent } from "./components/NetflixSportsComponent"
import { NetflixTvComponent } from "./NetflixTvComponent"
import { NetflixAccountComponent } from "./components/NetflixAccountComponent"

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeComponent /> }></Route>
        <Route path="/netflixhome" element={<NetflixHomeComponent /> }></Route>
        <Route path="/netflixmovies" element={<NetflixMoviesComponent /> }></Route>
        <Route path="/netflixshows" element={<NetflixShowsComponent />} ></Route>
        <Route path="/netflixsports" element={<NetflixSportsComponent />} ></Route>
        <Route path="/netflixtv" element={<NetflixTvComponent />} ></Route>
        <Route path="/netflixaccount" element={<NetflixAccountComponent />} ></Route>
      </Routes>
    </div>
  )
}

export default App
