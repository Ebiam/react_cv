import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
      <>
        <Topbar title={"Enzo Biamonti"}/>
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur mon CV !
        </p>
        <p>
          En production ...
        </p>
      </header>
    </div>
        </>
  );
}

export default App;
