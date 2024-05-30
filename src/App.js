import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import log from './img/logo_original.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/home';
import Propos from './components/APropos';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const menRef = useRef(null);
  const sp = useRef(null);
  useEffect(() => {
    if (menRef.current) {
      if (isChecked) {
        menRef.current.style.right = '0';
        sp.current.style.opacity='1';
      } else {
        menRef.current.style.right = '-100%';
        sp.current.style.opacity='0';
      }
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const whatsapp = () => {
    const numeroTelephone = '+21628815988';
    const lienWhatsapp = `https://wa.me/${numeroTelephone}`;
    window.open(lienWhatsapp);
  };

  return (
    <Router>
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
                <span className='headitems' ref={menRef}>
                  <Link to="/" onClick={handleCheckboxChange}><li>Acceuil</li></Link>
                  <Link to="/apropos" onClick={handleCheckboxChange}><li>A Propos</li></Link>
                  <Link to="/gallery" onClick={handleCheckboxChange}><li>Gallery</li></Link>
                  <Link to="/contact" onClick={handleCheckboxChange}><li>Contact</li></Link>
                  <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
                </span>
                <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
              </ul>
            </div>
          </nav>
        </header>
        <div className='space' ref={sp}></div>
        <div className='what' onClick={whatsapp}><i className="fab fa-whatsapp"></i></div>

        <Route exact path="/" component={Home} />
        <Route path="/apropos" component={Propos} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
