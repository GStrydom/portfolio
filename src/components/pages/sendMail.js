import * as transporter from "@babel/traverse";

let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');

nodemailer.createTransport({
  host: "smtp.example.com", //replace with your email provider
  port: 587,
  auth: {
    user: "username", //replace with the email address
    pass: "password" //replace with the password
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let subject = req.body.subject
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`
  let mail = {
    from: name,
    to: 'greg@gmail.com',
    subject: subject,
    text: content
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})