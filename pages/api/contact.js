export default function contact(req, res) {
    if (req.method === 'POST') {
        require("dotenv").config();
        let nodemailer = require("nodemailer");
        const PASSWORD = process.env.password;
        const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
            user: "noreply.ahmadridhoni@gmail.com",
            pass: PASSWORD,
          },
          secure: true,
        });
        
        const mailData = {
          from: "noreply.ahmadridhoni@gmail.com",
          to: "dhoniaridho@gmail.com",
          subject: `Message From ${req.body.name}`,
          text: req.body.message + " | Sent from: " + req.body.email,
          html: `<div>${req.body.message}</div><p>Sent from:
              ${req.body.email}</p>`,
        };
        transporter.sendMail(mailData, function (err, info) {
          if (err) res.status(400).json(err);
          else res.status(400).json(info);
        });
        console.log();
        res.status(200).json('message has been sent')
    }else{
        res.status(404);
    }
  }