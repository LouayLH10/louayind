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
  const clickmen=()=>{
    const chk = document.querySelector("#check");
 

  };
  const clickacc=()=>{
    const home = document.querySelector(".Home");
    home.scrollIntoView({ behavior: "smooth" });
    handleCheckboxChange();
  };
  const clickprop=()=>{
    const prop = document.querySelector(".Apropos");
    prop.scrollIntoView({ behavior: "smooth" });
    handleCheckboxChange();
  };
  const clickgal=()=>{
    const gal = document.querySelector(".Gallery");
    gal.scrollIntoView({ behavior: "smooth" });
    handleCheckboxChange();
  };
  const clickcnt=()=>{
    const cnt = document.querySelector(".Contact");
    cnt.scrollIntoView({ behavior: "smooth" });
    handleCheckboxChange();
  };
  const whatsapp=()=> {
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
              <span className='headitems' ref={menRef}>
                <a href='#' onClick={clickacc}><li>Acceuil</li></a>
                <a href='#' onClick={clickprop}><li>A Propos</li></a>
                <a href='#' onClick={clickgal}><li>Gallery</li></a>
                <a href='#' onClick={clickcnt}><li>Contact</li></a>
                <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>
              </span>
              <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
            </ul>
          </div>
        </nav>
      </header>
      <div className='space' ref={sp}>
        
        </div>
        <div className='what' onClick={whatsapp}><i class="fa-brands fa-whatsapp"></i></div>
       
        <Home />
        <Propos/>
        <Gallery />
        <Contact />
    </div>
  );
}
const scrl=()=>{
  const props=document.querySelector(".Apropos");
  props.scrollIntoView({ behavior: "smooth" });
 }
  
export {scrl};
export default App;