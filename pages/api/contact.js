// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;

    // Set up the transporter using SMTP (replace with your SMTP server settings)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP server
      port: 587, // Use the correct port for your SMTP server (587 for TLS)
      secure: false, // Set to true if using SSL (465 for SSL)
      auth: {
        user: 'www.nisalanimesh12@gmail.com', // Your email address
        pass: 'xjyp nxse fifl hjvi', // Your email password (or app-specific password)
      },
    });

    // Define email options
    const mailOptions = {
      from: email, // From the user's email
      to: 'www.nisalanimesh12@gmail.com', // Your email address to receive the contact form
      subject: 'New Contact Form Submission',
      text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    // Handle invalid request method
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
