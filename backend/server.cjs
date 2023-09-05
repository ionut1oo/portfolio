const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');

// Environment Config
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

// Logging Middleware for Debugging CORS
app.use((req, res, next) => {
  console.log('Request Origin:', req.get('origin'));
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);
  next();
});

// Configure and Enable CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'https://ionut1oo.github.io',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));

// Serve static files from the React app
const buildPath = path.join(__dirname, 'client/build');
if (path.resolve(__dirname, buildPath)) {
  app.use(express.static(buildPath));
} else {
  console.error(`The directory ${buildPath} does not exist!`);
  process.exit(1);
}

// Add a GET route for "/"
app.get('/', (req, res) => {
  res.send('Server is functional.');
});

// Code for sending an email
app.post("/api/sendEmail", async (req, res) => {
  // Your email-sending code here
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
