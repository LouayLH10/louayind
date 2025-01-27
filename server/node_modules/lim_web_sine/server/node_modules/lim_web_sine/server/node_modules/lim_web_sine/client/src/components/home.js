import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { scrl } from '../App';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Assurez-vous d'importer les styles CSS du diaporama
import img1 from '../img/ouvrier-dans-usine.jpg';
import img2 from '../img/portrait-ingenieur-chantier-pendant-heures-travail.jpg';
import img3 from '../img/personne-combinaison-protection-travaillant-dans-centrale-nucleaire.jpg';
import img4 from '../img/portrait-jeune-travailleur-dans-casque-dans-grande-usine-metallurgie.jpg';
import Propos from './APropos';
import Gallery from './gallery';
import Contact from './contact';
function Home() {
  const slideImages = [img1, img2, img3, img4];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = () => {
    scrl(); // Assurez-vous que scrl est défini et fonctionnel
  };

  const properties = {
    duration: 5000, // Durée totale du diaporama en ms
    transitionDuration: 500, // Durée de la transition entre chaque diapositive en ms
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Masquer les flèches

    onChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div>
      <Fade {...properties}>
        {slideImages.map((each, index) => (
          <div key={index} className="Home" style={{ backgroundImage: `url(${each})` }}>
            <h1>
              Bienvenu <br /> dans notre site web <br />
              <div className='flech' onClick={handleClick}>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </h1>
          </div>
        ))}
      </Fade>
      <div className='content'>
        
      
     
        <Propos />
      
     
        <Gallery />
     
      
        <Contact />
     
    </div>
    </div>
  );
}

export default Home;
