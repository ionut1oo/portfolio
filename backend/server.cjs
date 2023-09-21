const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');

// Configurare de mediu
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

if (!process.env.EMAIL || !process.env.PASSWORD) {
  console.error("Variabilele de mediu EMAIL și PASSWORD trebuie setate!");
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Configurare și activare CORS
const whitelist = ['http://localhost:3000', 'https://ionut1oo.github.io', 'https://ionut1oo.github.io/portfolio/'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Nu este permis de CORS'));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware de logare pentru depanarea CORS
app.use((req, res, next) => {
  console.log('Originea cererii:', req.get('origin'));
  console.log('Metoda cererii:', req.method);
  console.log('Antetele cererii:', req.headers);
  next();
});

// Inițializare transporter nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// Servirea fișierelor statice din aplicația React
const buildPath = path.join(__dirname, 'client/build');
if (path.resolve(__dirname, buildPath)) {
  app.use(express.static(buildPath));
} else {
  console.error(`Directorul ${buildPath} nu există!`);
  process.exit(1);
}

// Adăugare rută GET pentru "/"
app.get('/', (req, res) => {
  res.send('Serverul este funcțional.');
});

// Cod pentru trimiterea unui email
app.post("/api/sendEmail", async (req, res) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: 'Mesaj de pe formularul de contact',
      text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send('error');
      } else {
        console.log('Email trimis: ' + info.response);
        res.status(200).send('Succes');
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Eroare internă de server');
  }
});

// Rută de tip catch-all pentru servirea aplicației React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Middleware pentru gestionarea erorilor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ceva nu a funcționat!');
});

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});
