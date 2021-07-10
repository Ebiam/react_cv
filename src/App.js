import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import { useDencrypt } from "use-dencrypt-effect";


const values = ["En cours de développment", "Avaliable soon", "Bientôt disponible", "Work in progress"];


const Bounce = styled.div`animation: 5sec ${keyframes `${bounce}`} infinite`;

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
  margin-top: 30px;
`;

function App() {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3500);

    return () => clearInterval(action);
  }, []);

  return (
      <>
        <Topbar title={"Enzo Biamonti"}/>
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display: 'flex', direction: 'raw', justifyContent: 'space-between'}}>
          <Chip avatar={<LinkedInIcon/>} label="Mon LinkedIn" color="primary" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://fr.linkedin.com/in/enzo-biamonti-b3109a155", "_blank")}} />
        <Chip avatar={<GitHubIcon/>} label="Mon Github" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://github.com/Ebiam", "_blank")}} />

        </div>
        <BouncyDiv>
        <p>
          Bienvenue sur mon CV !
        </p>
        </BouncyDiv>
        <p>
          {result}
        </p>
      </header>
    </div>
        </>
  );
}

export default App;
