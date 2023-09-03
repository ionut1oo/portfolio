const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Verifică dacă variabilele de mediu sunt setate
if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("EMAIL and PASSWORD environment variables must be set!");
    process.exit(1);
}

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Configurează CORS
const corsOptions = {
  origin: 'https://ionut1oo.github.io',
  methods: "GET,HEAD,POST",
};

app.use(cors(corsOptions));

// Adaugă o rută GET pentru "/"
app.get('/', (req, res) => {
  res.send('Serverul este funcțional.');
});

// Codul pentru trimitere email
app.post("/api/sendEmail", async (req, res) => {
  console.log("Request received:", req.body);
  const { name, email, message } = req.body;

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
    console.log("Email:", process.env.EMAIL, "Password:", process.env.PASSWORD);
    res.send("Email sent");

  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
