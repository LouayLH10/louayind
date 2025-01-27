import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { scrl } from '../App';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Assurez-vous d'importer les styles CSS du diaporama

function Verif() {


  return (
    <div className='login'>
<div className='frm'>
    <h2>Verification</h2>
<form action=''>
<div className='item'>
<input type='text' className='Code' placeholder='Ecrivez le code de verification'/>
</div>
<button type='submit'>Connecter</button>
</form>

</div>
    </div>
  );
}

export default Verif;
