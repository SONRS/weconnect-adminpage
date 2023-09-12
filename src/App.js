
import React,{useState, useEffect} from "react";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './components/css/App.css';
import Home from './components/pages/Home';
import User from './components/pages/User';
function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/user/:username' Component={User} />
    </Routes>
    </Router>
      
    </>
  );
}

export default App;
