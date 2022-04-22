const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@kiron.ripcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err) => {
  const usersCollection = client.db("geniusCar").collection("service");
  console.log('Genius Car Service is running on MongoDB...');
  client.close();
});

app.get("/", (req, res) => {
  res.send("Genius Car Services");
});

app.listen(port, () => {
  console.log("Genius Car Services Server is running", port);
});
