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
      <p>Hora actual en Sídney: {time.toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
    </div>
  );
}

export default WorldClock;
