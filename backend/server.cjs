const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("EMAIL and PASSWORD environment variables must be set!");
    process.exit(1);
}

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Configurează CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'https://ionut1oo.github.io',
  methods: "GET,HEAD,POST,OPTIONS",
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type']
};

// Adăugat pentru a permite CORS
app.use(cors(corsOptions));

// Middleware pentru diagnosticarea problemelor CORS
app.use((req, res, next) => {
  console.log('CORS Headers:', res.getHeaders());
  console.log('Request Origin:', req.get('origin'));
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);
  next();
});

// Servește fișierele statice din aplicația React

app.use(express.static(path.join(__dirname, '../client/build')));

// Adaugă o rută GET pentru "/"
app.get('/', (req, res) => {
  res.send('Serverul este funcțional.');
});

// Codul pentru trimitere email
app.post("/api/sendEmail", async (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    console.log("Attempting to send an email...");
    let info = await transporter.sendMail({
      from: `"Portfolio 👻" <${process.env.EMAIL}>`,
      to: "ciorneiionut94@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email sent successfully");
    res.send("Email sent");

  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Ruta catch-all pentru a servi aplicația React
app.get('*', (req, res) => {
  console.log("Serving file from: ", path.join(__dirname, '../client/build/index.html'));

  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
