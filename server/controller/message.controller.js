const MessageModel=require('../model/message.model')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})
exports.envoyer = async (req, res) => {
    const currentDate = new Date();
    
    // Formater l'heure au format "hh:mm"
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;  // Format "hh:mm"
    
    // Formater la date au format "jj/mm/aaaa"
    const day = String(currentDate.getDate()).padStart(2, '0');  // Jour avec zéro devant si nécessaire
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');  // Mois (les mois commencent à 0, donc on ajoute 1)
    const year = currentDate.getFullYear();  // Année
    const formattedDate = `${day}/${month}/${year}`;
    try {
      // Créer un nouveau message et le sauvegarder
      const message = new MessageModel({
...req.body,
jour:formattedDate,
temps:formattedTime
         }
      );
      
      await message.save();
  
      // Contenu de l'email
      const mailContent = {
        from: 'Louay Industrie et Maintenance <lim_commercial@outlook.com>',
        to: req.body.email,
        subject: 'Nous avons reçu votre message',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
              <!-- Header Section -->
              <div style="background-color: #004080; color: #fff; padding: 20px; text-align: center;">
                  <img src="https://i.ibb.co/SrvtkmK/logo-original.png" alt="Logo" style="max-width: 100px; margin-bottom: 10px;" />
                  <h1 style="margin: 0; font-size: 24px;">Louay Industrie et Maintenance</h1>
              </div>
              
              <!-- Body Section -->
              <div style="padding: 20px;">
                  <h4 style="color: #004080; text-align: center;">Merci de nous avoir contactés !</h4>
                  <p>Nous avons bien reçu votre message. Un membre de notre équipe vous répondra dans les plus brefs délais. En attendant, n'hésitez pas à consulter nos coordonnées ci-dessous :</p>
                  
                  <!-- Contact Info -->
                  <div style="border: 1px solid #eee; padding: 15px; border-radius: 5px; background-color: #f9f9f9; margin-top: 15px;">
                      <h4 style="color: #004080; margin: 0;">Contactez-nous :</h4>
                      <p style="margin: 5px 0;">📞 <strong>+216 28 815 988</strong></p>
                      <p style="margin: 5px 0;">📞 <strong>+216 29 947 739</strong></p>
                      <p style="margin: 5px 0;">✉️ <strong>lim_commercial@outlook.com</strong></p>
                      <p style="margin: 5px 0;">📍 Rue Elanbar N°8, Sidi Boulbaba, Gabès</p>
                  </div>
              </div>
              
              <!-- Footer Section -->
              <div style="background-color: #f0f0f0; padding: 10px 20px; text-align: center; font-size: 12px; color: #666666;">
                  <p style="margin: 0;">&copy; 2025 Louay Industrie et Maintenance. Tous droits réservés.</p>
              </div>
          </div>
        `,
      };
  
      // Envoyer l'email
      await transporter.sendMail(mailContent);
  
      // Envoyer une réponse au client après succès
      res.status(200).send({ message: message });
    } catch (error) {
      // Gérer les erreurs et répondre au client
      console.error('Erreur lors de l\'envoi du message :', error);
      res.status(500).send({ error: 'Une erreur est survenue lors de l\'envoi du message.' });
    }
  };
  
exports.getMSG=async(req,res)=>{
    try {
        const msgs = await MessageModel.find();
        res.send(msgs);
    } catch (err) {
        res.status(500).send({ message: 'An error occurred', error: err.message });
    }

}
exports.delete = async (req, res) => {
    try {
        // Supprimer tous les documents de la collection MessageModel
        await MessageModel.deleteMany({}); 

        res.send({ message: 'Tous les messages ont été supprimés avec succès.' });
    } catch (err) {
        // Gérer les erreurs et retourner une réponse appropriée
        res.status(500).send({ message: 'Une erreur est survenue lors de la suppression des messages.', error: err.message });
    }
};


