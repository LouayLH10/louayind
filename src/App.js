import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import log from './img/logo_original.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/home';
import Propos from './components/APropos';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const sp = useRef(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const scrl=()=>{
    const props=document.querySelector(".Apropos");
    props.scrollIntoView({ behavior: "smooth" });
   }
  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleCheckboxChange();
    }
  };

  const whatsapp = () => {
    const numeroTelephone = '+21628815988';
    const lienWhatsapp = `https://wa.me/${numeroTelephone}`;
    window.open(lienWhatsapp);
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h2>Louay industrie et maintenance</h2>
          <div className='logo'>
            <img src={log} id='logo' alt="Logo" />
          </div>
          <input type='checkbox' id='check' checked={isChecked} onChange={handleCheckboxChange} />
          <div className='menu'>
            <ul>
              <span className='headitems'>
                <li onClick={() => navigateToSection('home')}>Acceuil</li>
                <li onClick={() => navigateToSection('apropos')}>A Propos</li>
                <li onClick={() => navigateToSection('gallery')}>Gallery</li>
                <li onClick={() => navigateToSection('contact')}>Contact</li>
                <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
              </span>
              <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
            </ul>
          </div>
        </nav>
      </header>
      <div className='space' ref={sp}></div>
      <div className='what' onClick={whatsapp}><i className="fab fa-whatsapp"></i></div>

      <div id="home"><Home /></div>
      <div id="apropos"><Propos /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
