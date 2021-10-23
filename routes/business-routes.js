const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Business = require('../models/Business');

router.post('/', (req, res) => {
    const businesses = req.body.businesses;

    Business.insertMany(businesses).then((result) => {
        businesses.forEach((business) => {
            sendMail(business);
        });
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
});

router.get("/all", (req, res) => {
    Business.find({})
    .populate('category')
    .then((businesses) => {
        res.json(businesses);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    })
});




function sendMail(business) {
    let mailInfo = {
        from: '"Grow Your Business Support" <support@growyourbusiness.tech>',
        to: business.email,
        subject: 'Business',
        text: `
Bonjour Dr.${business.holderName},

J'espère que vous allez bien, Je vous contacte aujourd’hui concernant le côté business pour votre cabinet.

Je suis Bilal EL Khatab le propriétaire de l'agence growyourbusiness.tech, et notre travail consiste à aider les propriétaires des petites et moyennes entreprises comme vous à obtenir plus de trafic et de clients en développant des sites Web de haute qualité. Par exemple, nous venons de finaliser une mission pour elegdom.com dont l’objectif principal était de développer une application web d’achat et vente en ligne.

Pour vous faire une idée de notre travail et notre portfolio, je vous invite à consulter notre site web en suivant ce lien : growyourbusiness.tech.

Je vous propose de discuter de votre projet. Vous pouvez nous contacter sur notre boite mail support@growyourbusiness.tech, ou sur notre whatsapp +212689772913

cordialement, 
Bilal EL KHATAB
`
}

    let transport = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
     });

     transport.sendMail(mailInfo, (err, data) => {
        if (err) {
            console.log(err);
            // res.status(501).json(err);
        }else {
            console.log(data);
            // res.json(order);
        }
    });
}

module.exports = router;