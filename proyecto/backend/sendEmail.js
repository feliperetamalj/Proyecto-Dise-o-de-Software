import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar cualquier servicio de correo compatible
  auth: {
    user: process.env.EMAIL_USER, // Reemplaza con tu email
    pass: process.env.EMAIL_PASS  // Reemplaza con tu contraseña
  }
});

const sendEmail = (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, // Reemplaza con tu email
    to: 'felretamal@alumnos.uai.cl',
    subject: 'Contacto Camiseta Store',
    text: `${name}, envia el siguiente mensaje:\n${message}\n\nPara comunicarse de vuelta, su email es ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
};

export default sendEmail;