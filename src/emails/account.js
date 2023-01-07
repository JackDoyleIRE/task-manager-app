const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jack.doyle.environment@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how it goes!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jack.doyle.environment@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}, hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail

}