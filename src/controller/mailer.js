const nodemailer = require('nodemailer');

const mailer = async (req, res) => {
    try {
        console.log('Data from the client:', req.body);

        
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: 'shubhansusb90@gmail.com', 
                pass: 'tppt eftw hbtb tgao', 
            },
        });

        
        const mailOptions = {
					from: 'shubhansusb90@gmail.com',
					to: 'Customerservices@techzick.com',
					subject: 'New Contact Form Submission',
					text: `You have a new submission with the following details: \n
                First Name: ${req.body.firstName} \n
                Last Name: ${req.body.lastName} \n
                Email: ${req.body.email} \n
                Contact Number: ${req.body.contactNumber} \n
                Requirements: ${req.body.requirements}`,
				};

        
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return res.status(200).send({ message: 'Email sent successfully', info });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).send({ message: 'Failed to send email', error });
    }
};

module.exports = mailer;
