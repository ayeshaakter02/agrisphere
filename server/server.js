require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConnection = require("./src/config/dbconfig");


const app = express();
const port = process.env.PORT || 4000;
dbConnection();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});