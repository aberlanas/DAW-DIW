import React from 'react';
import logo from './cthulhu.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	  Bienvenidos Alumn@s a una pequeña App con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pagina del proyecto
        </a>
      </header>
    </div>
  );
}

export default App;
