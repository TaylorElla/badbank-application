import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
    <React.Fragment>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/CreacteAccount/" element={<CreateAccount />}></Route>
          <Route path="/Deposit/" element={<Deposit />}></Route>
          <Route path="/Withdraw/" element={<Withdraw />}></Route>
          <Route path="/AllData" element={<AllData />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
