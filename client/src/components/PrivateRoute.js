import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Authcontext'; // Assurez-vous que le chemin est correct

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, role } = useAuth(); // Vérifiez l'état d'authentification

  // Si l'utilisateur n'est pas connecté ou n'a pas le rôle admin, redirigez vers la page de connexion
  if (!isAuthenticated || role !== 'admin') {
    return <Navigate to="/lim_adm_connect" replace />;
  }

  // Sinon, affichez le composant protégé
  return <Component {...rest} />;
};

export default PrivateRoute;
