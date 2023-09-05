const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');

console.log("Directory:", __dirname);

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

// Configure CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'https://ionut1oo.github.io',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Enable CORS
app.use(cors(corsOptions));

// Logging Middleware for Debugging CORS
app.use((req, res, next) => {
  console.log('CORS Headers:', res.getHeaders());
  console.log('Request Origin:', req.get('origin'));
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);
  next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Add a GET route for "/"
app.get('/', (req, res) => {
  res.send('Server is functional.');
});

// Code for sending an email
app.post("/api/sendEmail", async (req, res) => {

});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));    
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
