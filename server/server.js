// /server/app.js  
const express = require('express');  
const cors = require('cors');  
const session = require('express-session');  
const dotenv = require('dotenv');  
const mongoose = require('mongoose');  
const path = require('path');

dotenv.config();  

mongoose.connect(process.env.DB)  
    .then(() => console.log("MongoDB connecté"))  
    .catch(err => console.error("MongoDB connection error:", err));  

const app = express();  

// Middleware  
app.use(express.json());  
app.use(cors({  
    origin: 'http://localhost:3000', // Permettre l'accès depuis l'application React  
    credentials: true, // Permet l'envoi de cookies avec les requêtes  
}));  
app.use(session({  
    secret: process.env.SCRT,  
    resave: false,  
    saveUninitialized: true,  
    cookie: { httpOnly: true, secure: false, maxAge: 3600000 }  
}));  

// Intégration des routes d'authentification  
const authRoutes = require('./routes/auth.routes'); 
const msgRoutes = require('./routes/msg.routes');// Assurez-vous que le chemin est correct  
app.use('/api', authRoutes);
app.use('/api', msgRoutes);

// Préfixe les routes d'authentification avec '/api'  
function adminMiddleware(req, res, next) {
    if (req.session.isAdmin) {
        next(); // Passe au middleware ou à la route suivante
    } else {
        res.status(403).send('Accès refusé : Vous devez être administrateur.');
    }
}

// Route protégée
app.get('/message_admin_lim', adminMiddleware, (req, res) => {
    res.send('Bienvenue, administrateur. Voici vos messages.');
});
app.use(express.static(path.join(__dirname, '../client/build')));

// Pour toute route non définie, renvoyer index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// Démarrer le serveur  
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {  
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);  
});