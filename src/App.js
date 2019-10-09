import React from 'react';

import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <Contact
        online avatar="https://pictures.betaseries.com/personnages/318772.jpg"
        name="Thomas Shelby"
      />
      <Contact
        onffine avatar="https://pictures.betaseries.com/personnages/315067.jpg"
        name="Arthur Shelby"
      />
      <Contact 
      online avatar="https://www.hypnoweb.net/photo/member/41777/peaky_blinders/personnages/johns3_portait.jpg"
      name="John Shelby"
      
       />
    </div>
  );
}

export default App;
