require("dotenv").config();
const express = require("express");
const connect = require("./services/mongodb");
const app = express();
const port = 3001;

app.get("/user", (req, res) =>
  res.send(JSON.stringify({ userId: "asdsadsa", firstName: "Stefan" }))
);

app.get("/abc", (req, res) => res.send("Hello World!"));

connect()
  .then(db => {
    console.log("connected to mongodb");
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch(err => {
    console.error("mongodb connection failed", err);
  });
