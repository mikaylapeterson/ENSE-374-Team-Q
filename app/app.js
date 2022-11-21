// Requirements
const express = require("express");
const mongo = require("mongoose");
const { getCategories, findByCategory } = require("./cotw-mdb");


// Create Express App and Setup
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, () => {
  console.log("App has started at ", port, "!");
});

app.get("/", async (req, res) => {
  const recipeCategories = await getCategories();
  console.log("recipeCategories", recipesCategories);
  const recipesList = {};
  
  recipeCategories.map(category => {
    const currentCategoryRecipes = findByCategory(category);
    recipesList[category] = currentCategoryRecipes;
  })

  console.log("recipesList", recipesList);
  res.render("recipes");
});

app.post("/", (req, res) => {
  // placeholders so that the login and sign up buttons take you to the recipes page
  res.render("recipes");
});

app.get("/login-or-signup", (req, res) => {
  res.render("login-or-signup");
});
