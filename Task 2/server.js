const express = require("express");
const mongoose = require("mongoose");
var expressLayouts = require("express-ejs-layouts");
//if you dont have node_modules folder then run below command
// npm install

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);

app.use("/", require("./routes/site/photo"));
app.use("/", require("./routes/api/photo"));

app.get("/contact-us", (req, res) => {
  res.render("contact-us");
});
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(2000, () => {
  console.log("Server started at 2000");
});

mongoose
  .connect("mongodb://localhost/sp20-bcs-b")
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => {
    console.log("Unable to connect");
  });

//execute this file with following command
// node server

//for auto refresh of the code install nodemon globally
//npm install nodemon -g
// then run the file with nodemon
//nodemon server
