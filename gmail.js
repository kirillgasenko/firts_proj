


const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'gasenkokirill97@gmail.com',
        pass: 'somepassword'
    }
});

let mailOptions = {
    from: 'gasenkokirill97@gmail.com',
    to: '80974878806cok@gmail.com',
    subject: 'Test',
    text: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
});