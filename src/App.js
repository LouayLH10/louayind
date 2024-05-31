// App.js
import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import './App.css';
import log from './img/logo_original.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/home';
import Propos from './components/APropos';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Loading from './components/Loading';
function App() {
  const [isChecked, setIsChecked] = useState(false);
  const menRef = useRef(null);
  const sp = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (menRef.current) {
      if (isChecked) {
        menRef.current.style.right = '0';
        sp.current.style.opacity = '1';
      } else {
        menRef.current.style.right = '-100%';
        sp.current.style.opacity = '0';
      }
    }
  }, [isChecked]);

  useEffect(() => {
    if (location.pathname === "/apropos") {
      const section = document.querySelector(".Apropos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (location.pathname === "/gallery") {
      const section = document.querySelector(".Gallery");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (location.pathname === "/contact") {
      const section = document.querySelector(".Contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleCheckboxChange();
  };

  const whatsapp = () => {
    const numeroTelephone = '+21628815988';
    const lienWhatsapp = `https://wa.me/${numeroTelephone}`;
    window.open(lienWhatsapp);
  };

  return (
    <div className="App">
      <Loading/>
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
              <Link to="/" onClick={handleCheckboxChange}><li>Accueil</li></Link>
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
      <div className='what' onClick={whatsapp}><i className="fa-brands fa-whatsapp"></i></div>
      <Routes>
        <Route path="/" />
        <Route path="/apropos" />
        <Route path="/gallery" />
        <Route path="/contact" />
      </Routes>
      <div className='content'>
        
          <Home />
       
          <Propos />
        
       
          <Gallery />
       
        
          <Contact />
       
      </div>
    </div>
  );
}
const scrl=()=>{
  const props=document.querySelector(".Apropos");
  props.scrollIntoView({ behavior: "smooth" });
 }
  
export {scrl};
export default App;
