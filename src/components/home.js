
import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  var hm=document.querySelector("Home").nextElementSibling;
  const handleClick = () => {
  hm.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Home">
     <h1>Bienvenu <br /> dans notre site web <br /> <div className='flech' onClick={handleClick}><i class="fa-solid fa-chevron-down"></i></div></h1>
    </div>
  );
}

export default Home;
