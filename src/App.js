import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Home from './views/sections/Home';
import logo2 from "./assets/logo.svg";
import nodeLogo from "./assets/nodejs.svg";
import cppLogo from "./assets/cpp.svg";
import './components/Donut.css'
import Topbar from "./components/Topbar/Topbar";
import AboutMe from "./views/carousel/AboutMe";
import CartContext from './contexts/CartContext';

require('dotenv').config();

function App() {

  React.useEffect(() => {
  }, []);

  return (
      <CartContext>
        <div className={'scroll-snap-y'}>

            <section className={"section s1"} id={'home'}>
                <Home/>
            </section>

            <section className={"section s2 end"} id={'exp'}>
                <Topbar title={"Mon expérience"}/>
              <Carousel>

                  <AboutMe id={'aboutMe'}/>


                  <div className={"About"} id={'who'}>

                      <div style={{
                          scrollSnapAlign: 'start',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'space-arround',
                      }}>
                          <div style={{paddingBlock: '70px',}}>
                              <h1 style={{color: 'white',}}>
                                  Qui suis-je ?
                              </h1>
                          </div>
                          <div style={{textAlign: 'center', color: "white", display:'flex', width: '100vw'}}>
                              <p  >
                                  Technophile féru de sciences, d'entreprenariat et de marketing mais aussi de cinéma, de
                                  voyages et d'animaux.
                                  Etudiant en cinquième année à l'école EPITECH, passionné et désireux d'apprendre, je
                                  souhaite enrichir mes compétences dans un environnement stimulant et challengeant et
                                  offrant des opportunités d'évolution motivantes.
                              </p>
                              <div style={{width: "60%", borderRadius: '15px'}}>
                                          <div className="donut-chart">
                                              <div id="part1" className="portion-block">
                                                  <div className="circle"></div>
                                              </div>
                                              <div id="part2" className="portion-block">
                                                  <div className="circle"></div>
                                              </div>
                                              <div id="part3" className="portion-block">
                                                  <div className="circle"></div>
                                              </div>
                                              <p className="center" id="center"></p>
                                          </div>
                                      </div>
                          </div>
                      </div>
                  </div>


                  <div>
                      <div style={{
                          scrollSnapAlign: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center'
                      }}>
                          <h1 style={{color: 'white',}}>
                              Mon parcours
                          </h1>
                          <img src={logo2} className="animLogo" alt="logo"/>
                          <img src={nodeLogo} className="animLogo nodeLogo" alt="logo"/>
                          <img src={cppLogo} className="animLogo cppLogo" alt="logo"/>

                          <p>Mon parcours au sein de l'école Epitech m'a permis de travailler sur de nombreux projets
                              riches et variés </p>
                          <p>Ces projets m'ont dans un premier temps permis de découvrir les languages C et C++ et
                              l'environement UNIX et l'habitude de m'auto-former et chercher l'information en autonomie.
                              Puis la programmation de serveurs de jeux et d'API, d'applications mobile mais aussi la
                              gestion de projet en groupe.

                              En pleine démarche vers un statut de freelance, je recherche aussi activement des
                              clients pour effectuer des missions.
                              Mon attention se porte majoritairement sur le BACK-END et la programmation MOBILE en
                              REACT NATIVE</p>
                      </div>
                  </div>
              </Carousel>
            </section>



            <section>

            </section>
        </div>
      </CartContext>
  );
}

export default App;
