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

  app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "public", "index.html");
    res.sendFile(filePath);
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
