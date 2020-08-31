import React from 'react';
import logo from '../../logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maratona FullCycle
        </p>
        <p>
          Clique&nbsp;
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            aqui
          </a>
          &nbsp; para acessar a lista.
        </p>
      </header>
    </div>
  );
}

export default App;
