import React, { useState, useEffect } from 'react';
import reloj from './reloj.jpg';
import reloj2 from './reloj2.jpg';
import world from './world.jpg'
import Relojito1 from "./reloj.jsx";
import SearchBar from './SearchBar';
import WorldClock from './WorldClock.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (term) => {
    console.log("Búsqueda realizada:", term);
  };

  
  const backgroundColor = 'red';

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <header className="App-header">
        <SearchBar onSearch={handleSearch} />
        <Relojito1/>
        <p>footer</p>
        
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={reloj} className="d-block mx-auto" style={{ maxWidth: '200px', height: 'auto' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={reloj2}  className="d-block w-100" style={{ maxWidth: '200px', height: 'auto' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={world}  className="d-block w-100" style={{ maxWidth: '200px', height: 'auto' }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <p></p>
        <p>World Clock</p>
        <p></p>
        <WorldClock/>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="https://earth.google.com/web/@45.18269496,143.51549453,6215.96570833a,22245536.71711206d,35y,0h,0t,0r/data=OgMKATA"
          target="_blank" rel="noopener noreferrer">
          Google Earth
        </a>
      </header>
    </div>
  );
}

export default App;
