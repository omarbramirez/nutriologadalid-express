const express = require("express");
const path = require("path"); 
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el transporte de nodemailer (ajusta esto con tus detalles)
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "tu-correo@hotmail.com",
      pass: "tu-contraseña",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

app.get("/services", (req, res) => {
    const filePath = path.join(__dirname, "public", "privacypolicy.html");
    res.sendFile(filePath);
  });

app.get("/testimonials", (req, res) => {
    const filePath = path.join(__dirname, "public", "testimonials.html");
    res.sendFile(filePath);
  });

app.get("/contact", (req, res) => {
    const filePath = path.join(__dirname, "public", "contact.html");
    res.sendFile(filePath);
  });

  app.get("/aboutme", (req, res) => {
    const filePath = path.join(__dirname, "public", "aboutme.html");
    res.sendFile(filePath);
  });

  app.get("/privacypolicy", (req, res) => {
    const filePath = path.join(__dirname, "public", "privacypolicy.html");
    res.sendFile(filePath);
  });

  app.post("/form.php", (req, res)=>{
    const filePath = path.join(__dirname, "public", "mail-sent.html");
    res.sendFile(filePath);
  })
  /*
  app.post("/enviar-correo", (req, res) => {
    const { name, email, message } = req.body;
  
    // Configura el contenido del correo
    const mailOptions = {
      from: email,
      to: "omar.ramirez94@hotmail.es",
      subject: "Formulario de contacto",
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };
  
    // Envía el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.send("Correo enviado exitosamente.");
    });
});
*/

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
