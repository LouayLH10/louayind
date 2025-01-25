import React, { useState } from 'react';  
import '@fortawesome/fontawesome-free/css/all.min.css';  
import { useAuth } from "../Authcontext"; // Assurez-vous que ce chemin est correct
import 'react-slideshow-image/dist/styles.css';  
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  
  const navigate = useNavigate();
  
  // Extraction des fonctions du contexte Auth
  const { setIsAuthenticated, setRole } = useAuth();  

  const handleLogin = async (e) => {  
    e.preventDefault(); // Empêcher le rechargement par défaut du formulaire
    setError(''); // Réinitialiser les erreurs précédentes  

    try {  
      const response = await fetch('http://localhost:3002/api/login', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({ email, password }), // Envoi des données sous format JSON  
      });  

      // Vérifier si la réponse est correcte
      if (!response.ok) {  
        const errorData = await response.json(); // Extraire les détails d'erreur
        throw new Error(errorData.message || 'Login failed');  
      }  

      // Récupérer le token ou les informations utilisateur
      const data = await response.json();  
      console.log('Login successful:', data);  

      // Mettre à jour l'état d'authentification
      setIsAuthenticated(true);
      setRole(data.role || "admin"); // Supposons que le rôle est renvoyé par le serveur

      // Rediriger l'utilisateur vers la page d'administration
      navigate('/message_admin_lim');
    } catch (err) {  
      setError(err.message || 'Invalid email or password.'); // Message d'erreur utilisateur  
      console.error('Login failed:', err); // Afficher l'erreur dans la console pour debug  
    }  
  };  

  return (  
    <div className="login">  
      <div className="frm">  
        <h2>Interface Admin</h2>  
        <form onSubmit={handleLogin}>  
          <div className="item">  
            <input   
              type="email"   
              className="email"   
              placeholder="Email"   
              value={email}   
              onChange={(e) => setEmail(e.target.value)}  
              required  
            />  
          </div>  
          <div className="item">  
            <input   
              type="password"   
              className="pwd"   
              placeholder="Password"   
              value={password}   
              onChange={(e) => setPassword(e.target.value)}  
              required  
            />  
          </div>  
          <button type="submit">Connecter</button>  
          {error && <p className="error">{error}</p>}  
        </form>  
      </div>  
    </div>  
  );  
}  

export default Login;
