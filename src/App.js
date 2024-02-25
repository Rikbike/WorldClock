import React, { useState, useEffect } from 'react';
import reloj from './reloj.jpg';
import reloj2 from './reloj2.jpg';
import world from './world.jpg'
import Relojito1 from "./reloj.jsx";
import SearchBar from './SearchBar'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';

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

  // Definir un color de fondo
  const backgroundColor = 'red';

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <header className="App-header">
        <SearchBar onSearch={handleSearch} />
        <Relojito1/>
        
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
        <div id="reloj">
        <p>Hora actual en Londres: {time.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })}</p>
<p>Hora actual en Nueva York: {time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</p>
<p>Hora actual en Tokio: {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' })}</p>
<p>Hora actual en Sídney: {time.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney' })}</p>
<p>Hora actual en París: {time.toLocaleTimeString('en-US', { timeZone: 'Europe/Paris' })}</p>
<p>Hora actual en Moscú: {time.toLocaleTimeString('en-US', { timeZone: 'Europe/Moscow' })}</p>
<p>Hora actual en Pekín: {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai' })}</p>
<p>Hora actual en Río de Janeiro: {time.toLocaleTimeString('en-US', { timeZone: 'America/Sao_Paulo' })}</p>
<p>Hora actual en Ciudad del Cabo: {time.toLocaleTimeString('en-US', { timeZone: 'Africa/Johannesburg' })}</p>
<p>Hora actual en Buenos Aires: {time.toLocaleTimeString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })}</p>
<p>Hora actual en Ciudad de México: {time.toLocaleTimeString('en-US', { timeZone: 'America/Mexico_City' })}</p>
<p>Hora actual en Berlín: {time.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin' })}</p>
<p>Hora actual en Dubai: {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })}</p>
<p>Hora actual en Toronto: {time.toLocaleTimeString('en-US', { timeZone: 'America/Toronto' })}</p>
<p>Hora actual en Singapur: {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore' })}</p>
<p>Hora actual en Bangkok: {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Bangkok' })}</p>
<p>Hora actual en Los Ángeles: {time.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' })}</p>
<p>Hora actual en Vancouver: {time.toLocaleTimeString('en-US', { timeZone: 'America/Vancouver' })}</p>
<p>Hora actual en Auckland: {time.toLocaleTimeString('en-US', { timeZone: 'Pacific/Auckland' })}</p>

        </div>

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
