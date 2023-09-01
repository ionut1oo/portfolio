const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();  // <-- Make sure this line is here

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post("/api/sendEmail", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"Portfolio 👻" <${process.env.EMAIL}>`,
      to: "ciorneiionut94@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    res.send("Email sent");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
