import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'; // Importez le composant
import Home from './components/home';
import Propos from './components/APropos';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Login from './components/login';
import Boitemsg from './components/boitemsg'  ;
import Loading from './components/Loading';
import log from './img/logo_original.png';
function App() {const [isChecked, setIsChecked] = useState(false);
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
    const smoothScrollToSection = (selector) => {
      const section = document.querySelector(selector);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    switch (location.pathname) {
      case '/apropos':
        smoothScrollToSection('.Apropos');
        break;
      case '/gallery':
        smoothScrollToSection('.Gallery');
        break;
      case '/contact':
        smoothScrollToSection('.Contact');
        break;
      default:
        break;
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
    window.open(lienWhatsapp, '_blank');
  };

  return (
    <div className="App">
      <Loading />
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={log} id="logo" alt="Logo" />
          </div>
          <input
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <div className="menu">
            <ul>
              <span className="headitems" ref={menRef}>
              <Link to="/" onClick={() => { navigate('/');  }}>
  <li>Accueil</li>
</Link>
                <Link to="/apropos" onClick={() => handleNavigation('/apropos')}>
                  <li>A Propos</li>
                </Link>
                <Link to="/gallery" onClick={() => handleNavigation('/gallery')}>
                  <li>Gallerie</li>
                </Link>
                <Link to="/contact" onClick={() => handleNavigation('/contact')}>
                  <li>Contact</li>
                </Link>
                <label htmlFor="check" className="close-menu">
                  <i className="fas fa-times"></i>
                </label>
              </span>
              <label htmlFor="check" className="open-menu">
                <i className="fas fa-bars"></i>
              </label>
            </ul>
          </div>
        </nav>
      </header>
      <div className="space" ref={sp}></div>
      <div className="what" onClick={whatsapp}>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Propos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Route de connexion */}
        <Route path="/lim_adm_connect" element={<Login />} />

        {/* Routes privées */}
        <Route path="/message_admin_lim" element={<PrivateRoute element={Boitemsg} />} />
      </Routes>
    </div>
  );
}
const scrl=()=>{
  const props=document.querySelector(".Apropos");
  props.scrollIntoView({ behavior: "smooth" });
 }
  
export {scrl};
export default App;
