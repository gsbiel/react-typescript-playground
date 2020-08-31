import React from 'react';
import {Link} from 'react-router-dom';
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
          <Link
            className="App-link"
            to="/users"
          >
            aqui
          </Link>
          &nbsp; para acessar a lista.
        </p>
      </header>
    </div>
  );
}

export default App;
