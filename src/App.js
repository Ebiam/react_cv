import React from 'react';
import nodeLogo from './assets/nodejs.svg';
import logo2 from './assets/logo.svg';
import cppLogo from './assets/cpp.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Carousel from './components/Carousel/Carousel';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import { useDencrypt } from "use-dencrypt-effect";


const values = ["En développment", "Avaliable soon", "Bientôt disponible", "Work in progress", "En construction"];


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
    }, 3000);

    return () => clearInterval(action);
  }, []);

  return (
      <>
        <div style={{
          height: '100%',
          overflowY: 'scroll',
          scrollSnapType: 'y proximity'}}>
        <section className={"section s1"}>
          <div className="App AppContainer">
            <Topbar title={"Enzo Biamonti"}/>
            <header className="App-header">
              <div style={{marginBottom: '10vh', textAlign: 'center'}}>
              <h1>Enzo Biamonti</h1>
                <h5>Développeur</h5>
              </div>

              <div style={{display: 'flex', direction: 'raw', justifyContent: 'space-between'}}>
                <Chip avatar={<LinkedInIcon/>} label="Mon LinkedIn" color="primary" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://fr.linkedin.com/in/enzo-biamonti-b3109a155", "_blank")}} />
                <Chip avatar={<GitHubIcon/>} label="Mon Github" style={{marginLeft: '10px', marginRight: '10px'}} onClick={() => {window.open("https://github.com/Ebiam", "_blank")}} />
              </div>
              <BouncyDiv>
                <p>{result}</p>
              </BouncyDiv>
              <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </header>
          </div>
        </section>
        <section >
          <Carousel style={{scrollSnapAlign: 'end', height: '100vh',textAlign: 'center',position: 'relative',
          scrollSnapStop: 'always', display: 'flex', flexDirection: 'row'}}/>
        </section>
          <section>

          </section>
        </div>
      </>
  );
}

export default App;
