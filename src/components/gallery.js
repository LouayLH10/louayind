import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img1 from '../img/imgs/image1.jpg';
import img2 from '../img/imgs/image2.jpg';
import img3 from '../img/imgs/image3.jpg';
import img4 from '../img/imgs/image4.jpg';

function Gallery() {
  const slideImages = [img1, img2, img3, img4];
  const slideTitles = [
    "Réparation des fissures ",
    "Entretien broyer ciment vertical",
    "Changement gain hgzor",
    "Changement de gaine de gaze et calarofigage"
  ];
  return (
    <div className="Gallery">
      <h1 className='Titre'>Gallery</h1>
      <div className='imgs-container'>
        <div className='slide-container'>
          <Slide>
            {slideImages.map((each, index) => (
              <div key={index} className='imge'>
                <img src={each} alt={`Image ${index}`} />
                <h1 className='tite'>{slideTitles[index]}</h1>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
