
import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';
function Contact() {
  const form = useRef();
function verif(event) {
  const nom = document.querySelector(".nom");
  const prenom = document.querySelector(".prenom");
  const email = document.querySelector(".email");
  const obj = document.querySelector(".objet");
  const mail = document.querySelector(".mail");
  const e = document.querySelector(".error");
  nom.style.border = "";
  prenom.style.border = "";
  email.style.border = "";
  obj.style.border = "";
  mail.style.border = "";

  if (nom.value === "") {
    nom.style.border = "1px solid red";
    e.innerHTML = "Veuillez vérifier le nom";
    event.preventDefault();
    return false;
  } else if (prenom.value === "") {
    prenom.style.border = "1px solid red";
    e.innerHTML = "Veuillez vérifier le prénom";
    event.preventDefault();
    return false;
  } else if (email.value === "" || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
    email.style.border = "1px solid red";
    e.innerHTML = "Veuillez vérifier l'email, il doit contenir '@' et '.'";
    event.preventDefault();
    return false;
  } else if (obj.value === "") {
    obj.style.border = "1px solid red";
    e.innerHTML = "Veuillez vérifier l'objet";
    event.preventDefault();
    return false;
  } else if (mail.value === "") {
    mail.style.border = "1px solid red";
    e.innerHTML = "Votre message est vide !";
    event.preventDefault();
    return false;
  } else {
    event.preventDefault();
    emailjs
      .sendForm('service_n4an0tk', 'template_kdjrh8a', form.current, {
        publicKey: 'wTXfC6kl7P1oCdoWu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  
    nom.value = "";
    prenom.value = "";
    email.value = "";
    obj.value = "";
    mail.value = "";
    e.innerHTML = 'Message envoyé';
    e.style.color='red';
    return true;
  }
}

  return (
    <div className="Contact">
<h1 className='Titre'>Contact</h1>
<div className='cnt'>
    <h3 className='contactez'>Contactez-Nous</h3>
<form action='' onSubmit={verif} ref={form}>
<p className='error'>&nbsp;</p>
    <div className='item-form'>
<input type='text' className='nom' placeholder='Nom' />
</div>
<div className='item-form'>
<input type='text' className='prenom' placeholder='Prenom' />
</div>
<div className='item-form'>
<input type='email' className='email' placeholder='Email' />
</div>
<div className='item-form'>
<input type='text' className='objet' placeholder='Objet' />
</div>
<div className='item-form'>
<textarea className='mail' placeholder='Description'>

</textarea>
</div>

<button type='submit' className='env'>Envoyer</button>
</form>


</div>
<div className='cnt'>

    <div className='contect'>
    <h3 className='contactez'>Contactez-Nous</h3>
    <div className='cent'>
<h3 className='items'><i class="fa-solid fa-phone"></i><span className='mail'>&nbsp; +216 28 815 988</span> </h3>
<h3 className='items'><i class="fa-solid fa-phone"></i><span className='mail'>&nbsp; +216 70 038 568</span> </h3>
<h3 className='items'><i class="fa-solid fa-envelope"></i> <span className='mail'>lim_commercial@outlook.com</span></h3>
</div>
<br/>
<br/>
<h3 className='contactez'>Visitez</h3>
<div className='media'>
<div className='items sm'><div className='it'><a href='https://www.facebook.com/profile.php?id=100085379020261' target='_blank'><i class="fa-brands fa-facebook"></i></a></div></div>
<div className='items sm'><div className='it'><a href=''><i class="fa-brands fa-linkedin"></i></a></div></div>
</div>
<h3 className='items'><i class="fa-solid fa-location-dot"></i> <span className='mail'>Rue Elanbar N°8 Sidi Boulbaba, Gabes</span></h3>
</div>
</div>

    </div>
  );
}

export default Contact;
