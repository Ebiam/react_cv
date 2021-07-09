import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function App() {
  return (
      <>
        <Topbar title={"Enzo Biamonti"}/>
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display: 'flex', direction: 'raw', justifyContent: 'space-between'}}>
          <Chip avatar={<LinkedInIcon/>} label="Mon LinkedIn" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://fr.linkedin.com/in/enzo-biamonti-b3109a155", "_blank")}} />
        <Chip avatar={<GitHubIcon/>} label="Mon Github" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://github.com/Ebiam", "_blank")}} />

        </div>
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
