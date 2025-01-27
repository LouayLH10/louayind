// /server/routes/auth.routes.js  
const express = require('express');  
const router = express.Router();  
const authController = require('../controller/auth.controller');  

// Route pour la connexion  
router.post('/login', authController.login);  
router.post('/logout', authController.logout); 
module.exports = router; // Exporter le routeur