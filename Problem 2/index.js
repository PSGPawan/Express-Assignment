const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.get("/student/studentsList", (req, res) => {
  const students = ["Rajesh", "Ramesh", "Sayali", "Sanjana"];
  res.json({ results: students });
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
