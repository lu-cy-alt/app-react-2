import React from 'react';

import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <Contact
        online avatar="https://img.over-blog-kiwi.com/2/10/17/26/20171229/ob_37f363_a486fe6cadfd373fad9de51daffa1834.jpg"
        name="Thomas Shelby"
      />
      <Contact
        onffine avatar="https://pictures.betaseries.com/personnages/852800.jpg"
        name="John Shelby"
      />
      <Contact 
      online avatar="https://i.pinimg.com/originals/7b/55/e2/7b55e21e7c94ac0a189d26e0a6e28267.jpg"
      name="Arthur Shelby"
      
       />
    </div>
  );
}

export default App;
