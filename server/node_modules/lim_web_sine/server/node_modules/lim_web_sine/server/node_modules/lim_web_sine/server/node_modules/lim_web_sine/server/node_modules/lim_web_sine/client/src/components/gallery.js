import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img1 from '../img/qq/448948920_2351813105024380_8089309549687949757_n.jpg'
import img2 from '../img/qq/448950463_1195122918309938_6478207158724499985_n.jpg';
import img3 from '../img/qq/449176808_2055772204816609_4323812945297030382_n.jpg';
import img4 from '../img/qq/449626188_444195275239702_4730601301765446573_n.jpg';
import img5 from '../img/qq/449665207_783344360307700_5871136384043032416_n.jpg';
import img6 from '../img/qq/Cheminée 018.jpg';

function Gallery() {
  const Images = [[img1, img2, img3],[img4,img5,img6]]
  const desc = [["Image 1","Image 2","Image 3"],["Image 4","Image 5","Image 6"]]
  return (
    <div className="Gallery">
      <h1 className='Titre'>Gallerie</h1>
      <div className='imgs-container'>
      {Images.map((row, rowIndex) => (
<div className='line_img'>
{row.map((item, colIndex) => (
            <div className='col_img'>
    <img src={item} alt=''/>  
    <p>
      {
        desc[rowIndex][colIndex]
      }
      </p>        
            </div>
          ))}
  </div>

      ))}
      </div>
    </div>
  );
}

export default Gallery;
