const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require("path");

router.get('/', (req, res) => {
    sendMail();
    res.send("SENT");
});

function sendMail() {
    let mailInfo = {
        from: '"Your Business Support"',
        to: 'khatabbilal12@gmail.com',
        subject: 'Business',
        template: 'email',
        context:{
            name: "Test", 
            company: 'My Company'
        }
}

    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
     });

     // point to the template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./'),
    };

    // use a template file with nodemailer
    transport.use('compile', hbs(handlebarOptions));

     transport.sendMail(mailInfo, (err, data) => {
        if (err) {
            console.log(err);
        }else {
            console.log(data);
        }
    });
}

module.exports = router;