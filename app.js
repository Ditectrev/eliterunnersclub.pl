const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const nodemailer = require('nodemailer');
const app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular output folder
app.use(express.static(path.join(__dirname, 'public')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/kontakt', (req, res) => {
  const output = `
    <p>Wysłano wiadomość z formularza kontaktowego Elite Runners Club</p>
    <h3>Dane kontaktowe</h3>
    <ul>
      <li>Imię: ${req.body.name}</li>
      <li>E-mail: ${req.body.email}</li>
      <li>Temat: ${req.body.subject}</li>
    </ul>
    <h3>Wiadomość</h3>
    <p>${req.body.message}</p>
  `;

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail25.mydevil.net',
    port: 465,
    secure: true, // Use TLS.
    auth: {
      user: 'kontakt@eliterunnersclub.pl', // generated ethereal user
      pass: 'dASfxcverrt3S'  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

// setup email data with unicode symbols
  let mailOptions = {
    from: req.body.email, // sender address
    to: 'kontakt@eliterunnersclub.pl', // list of receivers
    subject: 'Formularz kontaktowy Elite Runners Club', // Subject line
    html: output // html body
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // return console.log(error);
      res.render('kontakt', {msg: 'Email nie został wysłany'});
    }
    res.render('kontakt', {msg: 'E-mail został wysłany'});
  });
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
