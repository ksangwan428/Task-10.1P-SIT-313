const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const cors = require('cors');


const app = express();
// Mailgun configuration
const domain = 'sandbox3e9653aa87d140789c46cb1c18044026.mailgun.org'; // sandboxbda986c5bc5b4733bf59c2238ba8951a.mailgun.org
const api_key = 'c85f3b1bec819076fc75f775beb35ca3-5465e583-3f72d385'; // 827bdf6df309c234ed7c1af18aaaab39-5465e583-a5b6fcfd
const mailgunInstance = mailgun({ apiKey: api_key, domain: domain });

const corseOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corseOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint for subscription
app.post('/', (req, res) => {
    const email = req.body;
    const mailData = {
        from: 'Kartik <ksangwan428@gmail.com>',
        to:'ksangwan428@gmail.com',
        subject: 'Welcome to Our Newsletter!',
        text: 'Dear subscriber,\n\nThank you for signing up for our newsletter. We are excited to have you on board!\n\nBest regards,\nThe Newsletter Team',
    };

    mailgunInstance.messages().send(mailData, function (error, body) {
        if (error) {
            console.error(error);
            return res.status(500).send("Error sending email");
        } else {
            console.log(body);
            res.status(200).send("Email sent successfully");
        }
    });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`The Server is running at port ${PORT}!`);
});