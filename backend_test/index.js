// Require libraries
const express = require("express");

// Imports
let dbConector = require("./dbConector");
let cors = require("cors");
let bodyParser = require("body-parser");

// Configuration app
const port = 8080;
// Initialization
const app = express();

// Accept "all" headers
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Regist routs
app.post("/users", async (req, res) => {
  let data = await dbConector.findData("users", {
    username: req.body.username,
    password: req.body.password,
  });
  res.send(data);
});

// Awake server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
