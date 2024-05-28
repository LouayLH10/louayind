import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import cer1 from '../img/imgs/Logo-norme-ISO-14001.png';
import cer2 from '../img/imgs/Logo-norme-ISO-45001.png';
import cer3 from '../img/imgs/png-transparent-organization-iso-9000-iso-9001-2015-certification-iso-9001-text-trademark-logo-thumbnail.png';
function Propos() {
  const [isVisible, setIsVisible] = useState(false);
  const aproposRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 0.5 signifie que l'élément devient visible dès qu'au moins 50% de celui-ci est visible à l'écran
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Une fois que l'élément est visible, on n'a plus besoin de l'observer
        }
      });
    }, options);

    if (aproposRef.current) {
      observer.observe(aproposRef.current);
    }

    // Nettoyage de l'observer lorsque le composant est démonté
    return () => {
      if (aproposRef.current) {
        observer.unobserve(aproposRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && window.innerWidth > 950) {
      const lstes = document.querySelectorAll(".lste li");
      lstes.forEach(li => {
        li.setAttribute("style", "animation: deplacer 2s;");
      });
    }
  }, [isVisible]);
  const certificates = document.querySelectorAll('.certificat');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && window.innerWidth > 950) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust this value for triggering the animation earlier or later
  });

  certificates.forEach(cert => {
    observer.observe(cert);
  });  

  return (
    <div className="Apropos" ref={aproposRef}>
<h1 className='Titre'>A Propos</h1>
<p className='prp'>La société de Maintenance Industriels et Construction Métallique « Louay Industrie et Maintenance », est une S.A.R.L, créé en 2005, représentée par son Gérant Monsieur Samir Hcine.
L.I.M vous propose des services de Maintenance Industrielle dans toute la Tunisie et à l'étranger.
Nous avons l'honneur de vous présenter notre entreprise pour vous permettre d'avoir une appréciation des moyens humaines ,matériels ,techniques et financiers de manière à vous rendre compte de notre capacité à faire face à toute sorte de commandes se rapportant à notre secteur d'activité:
</p>
<ul className='lste' >
  <li>Fabrication et montage charpente</li>
  <li>Travaux mécanique industrielle</li>
  <li>Fabrication et montage réservoir</li>
  <li>Travaux tuyauterie</li>
</ul>
<div className='ceritfications'>
<h1>Ceritfications</h1>
<div className='certificat'>
<img src={cer1} alt='' />
<h3>ISO 14001</h3>
<p className="descrip">
Le certificat ISO 14001 est une norme internationale qui établit des critères pour un système de management environnemental afin d'aider les organisations à améliorer leurs performances environnementales et à se conformer aux obligations réglementaires.</p>
</div>
<div className='certificat'>
<img src={cer2} alt='' />
<h3>ISO 45001 </h3>
<p className="descrip">
Le certificat ISO 45001 est une norme internationale qui établit des critères pour un système de management de la santé et de la sécurité au travail, visant à améliorer la sécurité des employés et à réduire les risques sur le lieu de travail.</p>

</div>
<div className='certificat'>
<img src={cer3} alt='' />
<h3>ISO 9001 </h3> 
<p className="descrip">
Le certificat ISO 9001 est une norme internationale qui établit des critères pour un système de management de la qualité afin d'assurer que les entreprises répondent aux exigences des clients et améliorent continuellement leurs processus et performances.</p>

</div>

</div>


    </div>
  );
}

export default Propos;
