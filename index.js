require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
