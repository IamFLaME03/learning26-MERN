// import './App.css'

// import { FooterComponent } from "./components/FooterComponent"
// import { HeaderComponent } from "./components/HeaderComponent"
// import { MapDemo1 } from "./components/mapDemo/MapDemo1"
// import { MapDemo2 } from "./components/mapDemo/MapDemo2"
// import { MapDemo3 } from "./components/mapDemo/MapDemo3"
// import { MapDemo4 } from "./components/mapDemo/MapDemo4"
// import { MapDemo5 } from "./components/mapDemo/MapDemo5"
// import { MapDemo6 } from "./components/mapDemo/MapDemo6"
// import { MapDemo7 } from "./components/mapDemo/MapDemo7"
// import { MapDemo8 } from "./components/mapDemo/MapDemo8"
// import { MapDemo9 } from "./components/mapDemo/MapDemo9"
// import { MapDemo10 } from "./components/mapDemo/MapDemo10"
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./components/HomeComponent";
import { NetflixHomeComponent } from "./components/NetflixHomeComponent";
import { NetflixMoviesComponent } from "./components/NetflixMoviesComponent";
import { NetflixShowsComponent } from "./components/NetflixShowsComponent";
import { Navbar } from "./components/Navbar";
import { NetflixSportsComponent } from "./components/NetflixSportsComponent";
import { NetflixTvComponent } from "./NetflixTvComponent";
import { NetflixAccountComponent } from "./components/NetflixAccountComponent";
import { ErrorPageNotFound } from "./components/ErrorPageNotFound";
import { WatchComponent } from "./components/Watch";
import { TeamDetails } from "./components/TeamDetails";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo1 } from "./components/useStateDemo/UseStateDemo1";
import { UseStateDemo2 } from "./components/useStateDemo/UseStateDemo2";
import { UseStateDemo3 } from "./components/useStateDemo/UseStateDemo3";
import { Employee } from "./components/props/Employee";
import { InputDemo1 } from "./components/input/InputDemo1";
import { TableTask } from "./components/props/TableTask";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { Formdemo2 } from "./components/forms/FormDemo2";
import { InputDemo2 } from "./components/input/InputDemo2";
import { FormDemo4_task } from "./components/forms/FormDemo4_task";
import { FormDemo3_task } from "./components/forms/FormDemo3_task";
import { FormDemo2_task } from "./components/forms/FormDemo2_task";
import { Formdemo5_task } from "./components/forms/FormDemo5_task";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo6_task } from "./components/forms/FormDemo6_task";
import { Apidemo1 } from "./components/api/Apidemo1";
import { Apidemo2 } from "./components/api/Apidemo2";
import { Apidemo3 } from "./components/api/Apidemo3";

function App() {
  return (
    <div style={{ backgroundColor: "lightgray", height: "100vh" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/netflixhome" element={<NetflixHomeComponent />}></Route>
        <Route
          path="/netflixmovies"
          element={<NetflixMoviesComponent />}
        ></Route>
        <Route path="/netflixshows" element={<NetflixShowsComponent />}></Route>
        <Route
          path="/netflixsports"
          element={<NetflixSportsComponent />}
        ></Route>
        <Route path="/netflixtv" element={<NetflixTvComponent />}></Route>
        <Route
          path="/netflixaccount"
          element={<NetflixAccountComponent />}
        ></Route>
        <Route path="/*" element={<ErrorPageNotFound />}></Route>
        <Route path="/watch/:name" element={<WatchComponent />}></Route>
        <Route path="/teamdetails/:teamname" element={<TeamDetails />}></Route>
        <Route path="/fundemo1" element={<FunctionDemo1 />}></Route>

        {/* hooks */}
        <Route path="/usestate1" element={<UseStateDemo1 />}></Route>
        <Route path="/usestate2" element={<UseStateDemo2 />}></Route>
        <Route path="/usestate3" element={<UseStateDemo3 />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/propdemo" element={<TableTask />}></Route>

        {/* Input */}
        <Route path="/inputdemo1" element={<InputDemo1 />}></Route>
        <Route path="/inputdemo2" element={<InputDemo2 />}></Route>

        {/* Forms */}
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<Formdemo2 />}></Route>
        <Route path="/formdemo2_task" element={<FormDemo2_task />}></Route>
        <Route path="/formdemo3_task" element={<FormDemo3_task />}></Route>
        <Route path="/formdemo4_task" element={<FormDemo4_task />}></Route>
        <Route path="/formdemo5_task" element={<Formdemo5_task />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/formdemo6_task" element={<FormDemo6_task />}></Route>

        {/* Api */}
        <Route path="/apidemo1" element={<Apidemo1 />}></Route>
        <Route path="/apidemo2" element={<Apidemo2 />}></Route>
        <Route path="/apidemo3" element={<Apidemo3 />}></Route>



      </Routes>
    </div>
  );
}

export default App;
