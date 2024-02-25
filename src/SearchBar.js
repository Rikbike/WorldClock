import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
    setTerm(''); // Limpiar el campo de búsqueda después de la búsqueda
  }

  return (
    <form onSubmit={onSubmit}>
      <p>Buscar la hora de tu ciudad</p>
      <input 
        type="text"
        placeholder="Ingrese el nombre de la ciudad..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
