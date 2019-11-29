import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routings from './service/Routings.jsx'

function App() {
  return (
    <Router>
    <div className="App">
    <Routings/>
    </div>
    </Router>
  );
}

export default App;
