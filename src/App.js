import React, { useState } from "react";
import './App.css';
import { Login } from "../src/components/Login";
import { Register } from "../src/components/Register";
import Home from "../src/components/Home"
import API from "../src/components/API"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (

    <Router>
      <API/>
      
      <Home/>
      <div className='App'>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>

      </Route>

      <Route path="/api" element={<API/>}>
              <Route path="states" element={<API/>}>
              <Route path="own" element={<API/>}></Route>
              <Route path="all" element={<API/>}></Route> 

              </Route>

              <Route path="flights" element={<API/>}>
              <Route path="all" element={<API/>}></Route>
              <Route path="aircrafts" element={<API/>}></Route>
              <Route path="arrival" element={<API/>}></Route>
              <Route path="departure" element={<API/>}></Route>
                </Route>   

              <Route path="tracks" element={<API/>}>
              <Route path="all" element={<API/>}></Route>
              </Route>



             

</Route>


    </Routes>
    <div>
    <div>
      <h1 className="container-2">
        WELCOME TO OPENSKY EASY FLIGHT TRACKING !
      </h1>
    </div>
    </div>
    

    </div>
    
      
      
    </Router>
  );
}

export default App;
