import React, { useState } from 'react';
import App from './App';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };
  return (
    <div
      className="search-bar ui segment"
      style={{ backgroundColor: 'lavender' }}
    >
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Ingrese un término de búsqueda</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
