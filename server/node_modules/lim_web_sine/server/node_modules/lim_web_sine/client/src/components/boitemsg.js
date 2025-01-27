import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '../App.css';
function Boitemsg() {
    
    const location = useLocation();

    const [selectedMessage, setSelectedMessage] = useState("Aucun message sélectionné");
    const [selectedemail, setSelectedemail] = useState("");
    const [selectedobject, setSelectedobject] = useState("");


    const [messages, setMessages] = useState([]);

    const handleClick = (object, email, message) => {
        setSelectedMessage(message);
        setSelectedemail("De: " + email);
        setSelectedobject(object);
    };
    useEffect(() => {
        // Faites la requête pour récupérer les messages depuis le backend
        fetch('http://localhost:3002/api/get_msg')
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);
    // Ajouter un effet pour détecter la sortie de la page
    useEffect(() => {
        const handleUnload = () => {
            // Pas d'alerte ici, juste un envoi de requête pour la déconnexion
            alert("aaaa")
            navigator.sendBeacon('/api/logout', JSON.stringify({ action: 'logout' }));
        };

        // Ajouter l'événement "unload"
        window.addEventListener('unload', handleUnload);

        // Nettoyage de l'événement pour éviter les fuites de mémoire
        return () => {
            window.removeEventListener('unload', handleUnload);
        };
    }, [location]); // Utiliser location pour savoir si la page a changé

    return (
        <div className='boite'>
            <div className='msg'>
                {messages.map((row) => (
                    <div key={row.id} className='element' onClick={() => handleClick(row.object, row.email, row.message)}>
                        <div className='temps'>
                            <p>{row.temps}</p>
                        </div>
                        <h2>
                            {row.nom} {row.prenom}
                        </h2>
                        <div className='Date'>
                            <p>{row.jour}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='contenu'>
                <h1 className='object'>{selectedobject}</h1>
                <p className='email'>{selectedemail}</p>
                <p className='message'>{selectedMessage}</p>
            </div>
        </div>
    );
}

export default Boitemsg;
