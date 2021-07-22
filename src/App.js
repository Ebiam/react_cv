import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Home from './views/sections/Home';

function App() {

  React.useEffect(() => {
  }, []);

  return (
      <>
        <div className={'scroll-snap-y'}>
        <section className={"section s1"}>
            <Home/>
        </section>

        <section className={"section s2"}>
          <Carousel style={{scrollSnapAlign: 'end', height: '100%',textAlign: 'center',position: 'relative',
          scrollSnapStop: 'always', display: 'flex', flexDirection: 'row', minHeight: '100vh'}}/>
        </section>
          <section>

          </section>
        </div>
      </>
  );
}

export default App;
