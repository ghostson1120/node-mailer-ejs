var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');
var ejs = require('ejs')

var transport = {
  service: 'gmail',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

router.get('/', (req, res, next) => {
  res.render('master-estimate.ejs');
})

router.post('/send', (req, res, next) => {

  res.render('email-template.ejs', req.body)

  // var mail = {
  //   from: name,
  //   to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  //Change to email address that you want to receive messages on
  //   subject: 'New Message from Contact Form',
  //   text: content
  // }
  // transporter.sendMail(mail, (err, data) => {
  //   if (err) {
  //     res.json({
  //       msg: 'fail'
  //     })
  //   } else {
  //     res.json({
  //       msg: 'success'
  //     })
  //   }
  // })
})

module.exports = router;
