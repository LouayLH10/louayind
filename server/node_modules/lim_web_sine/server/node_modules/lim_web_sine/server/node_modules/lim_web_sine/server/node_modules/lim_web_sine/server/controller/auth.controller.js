// /server/controller/auth.controller.js  
const AdminModel = require("../model/admin.model");  
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');  

exports.login = async (req, res) => {  
    try {  
        // Vérifiez si l'utilisateur existe  
        const user = await AdminModel.findOne({ email: req.body.email });  
        if (!user) {  
            return res.status(422).json({ message: 'Invalid Credentials' }); // Utiliser json() pour retourner au format JSON  
        }  
        
        // Vérifiez si le mot de passe est correct  
        const compare = await bcrypt.compare(req.body.password, user.password);  
        if (compare) {  
            // Générer un token JWT  
            const token = jwt.sign(  
                { _id: user._id, email: user.email },  
                process.env.SECRETKEY || 'defaultSecret' // Assurez-vous que Secret est défini  
            );  
            req.session.email = req.body.email; // Utilisez des sessions si nécessaire  
            req.session._id = user._id; 
            req.session.isAdmin=true; 
            return res.json({ token }); // Retourner le token dans une réponse JSON  
        } else {  
            return res.status(422).json({ message: 'Invalid Credentials' }); // Retourner un autre message pour le cas où le mot de passe est incorrect  
        }  
    } catch (err) {  
        console.error(err);  
        return res.status(500).json({ message: 'Server error' }); // Retourner un message d'erreur général  
    }  
};

exports.logout = async (req, res) => {  
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Erreur lors de la déconnexion', err);
                return res.status(500).send('Erreur serveur.');
            }
            console.log("ok");
            
            res.status(200).send('Session terminée avec succès.');

        });
    } else {
        res.status(400).send('Aucune session active.');
    }
};