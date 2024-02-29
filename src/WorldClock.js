// WorldClock.js
import React, { useState, useEffect } from 'react';

function WorldClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <p>Hora actual en Londres: {time.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })}</p>
      <p>Hora actual en Nueva York: {time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</p>
      <p>Hora actual en Tokio: {time.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' })}</p>
      <p>Hora actual en Sídney: {time.toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
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
  );
}

export default WorldClock;
