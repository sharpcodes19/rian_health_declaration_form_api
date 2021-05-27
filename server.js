const express = require ('express')
const cors = require ('cors')
const bp = require ('body-parser')
const nodemailer = require ('nodemailer')

const port = process.env.PORT || 4432
const app = express ()
app.use (bp.json ())
app.use (bp.urlencoded({ extended: false }))
app.use (cors ())

app.post ('/api/sendMail', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'misopsriancom@gmail.com',
            pass: 'dg@dmin89'
        }
    });

    const mailOptions = {
    from: 'misopsriancom@gmail.com',
    to: 'misopsriancom@gmail.com',
    subject: 'RCi Health Checklist Form',
    text: req.body.msg
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
        res.send (info.response)
    }
    });
})

app.listen (port, () => {
    console.log ('Server is listening at port', port)
})