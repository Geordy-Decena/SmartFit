const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()

app.use(express.json({ extended: false }));

app.post('/api/form', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `
    const nodemailer = require('nodemailer')

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'geordysportfolio@gmail.com',
            pass: 'geordy456'
        }
    })

    let mailOptions = {
        from: 'geordysportfolio@gmail.com',
        to: 'geordysportfolio@gmail.com',
        subject: 'Inquiry from Portfolio',
        text: '',
        html: output
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error occurs")
        }
        else {
            console.log("Email sent")
        }
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));