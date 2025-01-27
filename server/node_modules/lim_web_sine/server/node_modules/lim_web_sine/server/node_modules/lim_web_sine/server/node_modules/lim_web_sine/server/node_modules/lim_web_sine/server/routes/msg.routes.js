const express = require('express');  
const router = express.Router();  
const msgController = require('../controller/message.controller');  

// Route pour la connexion  
router.post('/submit', msgController.envoyer);  
router.get('/get_msg', msgController.getMSG); 
module.exports = router; // Exporter le routeur