// Requirements
const express = require("express");
const mongo = require("mongoose");

// Create Express App and Setup
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, () => {
  console.log("App has started at ", port, "!");
});

app.get("/", (req, res) => {
  // TODO: Create actual page (for now will default to test page)
  res.render("test");
});
