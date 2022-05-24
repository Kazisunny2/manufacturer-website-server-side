const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://tools_admin:<password>@cluster0.js4afvq.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Hello From Tools Manufacturer!");
});

app.listen(port, () => {
  console.log(`Manufacturer app listening on port ${port}`);
});
