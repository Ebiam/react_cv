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
import Form from "./components/Form/Form";
import { useTranslation } from 'react-i18next';
import './i18n';

require('dotenv').config();

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  React.useEffect(() => {
  }, []);

  return (
      <CartContext>
          <Topbar title={t('app.title')}/>
        <div className={'scroll-snap-y'}>

            <section  className={"section s1"} id={'home'}>
                <meta name={'description'} content={t('app.description')} />
                <Home/>
                <div>
                  <button onClick={() => changeLanguage('en')}>English</button>
                  <button onClick={() => changeLanguage('fr')}>Français</button>
                  <button onClick={() => changeLanguage('zh')}>中文</button>
                </div>
            </section>

            <section className={"section s2 end"} id={'exp'} style={{backgroundColor: '#282c34'}}>

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
                                  {t('aboutMe.whoAmI')}
                              </h1>
                          </div>
                          <div style={{textAlign: 'center', color: "white", display:'flex', width: '100vw'}}>
                              <p  >
                                  {t('aboutMe.description')}
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
                              {t('aboutMe.myJourney')}
                          </h1>
                          <p>{t('aboutMe.myJourneyDescription')}</p>
                      </div>
                  </div>
              </Carousel>
            </section>
            <section className={"section s2 end"}>
                <div style={{  display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                    height: '100%'
                }}>
                    <Form/>
                </div>
            </section>
        </div>
      </CartContext>
  );
}

export default App;
