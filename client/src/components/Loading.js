
import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import log from '../img/logo_original.png';
function Loading() {
 
  return (
    <div className="Loading">
         
             <div className='logo_load'>
             <img src={log} id='logo' alt="Logo" />
          </div>
    </div>
  );
}

export default Loading;
