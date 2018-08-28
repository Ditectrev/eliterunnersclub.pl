const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.post('/kontakt', function (req, res) {
  var mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'mail25.mydevil.net',
    port: 465,
    secure: true,
    auth: {
      user: 'kontakt@eliterunnersclub.pl',
      pass: 'dASfxcverrt3S'
    }
  });
  mailOpts = {
    from: '${req.body.email}',
    to: 'kontakt@eliterunnersclub.pl',
    subject: '${req.body.subject}',
    text: '${req.body.message}',
    replyTo: '${req.body.email}'
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    } else {
      res.render('contact-success');
    }
  });
});
