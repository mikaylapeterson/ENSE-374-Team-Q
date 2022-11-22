// Requirements
const express = require("express");
const mongo = require("mongoose");
const {
  getCategories,
  findByCategory,
  findByName,
  populateDatabase,
} = require("./cotw-mdb");

// Create Express App and Setup
const app = express();

const recipesList = {};

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, async () => {
  console.log("App has started at ", port, "!");
  // Uncomment to populate database
  // populateDatabase();
});

app.get("/", async (req, res) => {
  const recipeCategories = await getCategories();

  recipeCategories.map(async (category) => {
    const currentCategoryRecipes = await findByCategory(category);
    recipesList[category] = currentCategoryRecipes;
  });

  res.render("recipes", { recipes: recipesList, categories: recipeCategories });
});

app.post("/", (req, res) => {
  // placeholders so that the login and sign up buttons take you to the recipes page
  res.render("recipes");
});

app.post("/get-recipe", async (req, res) => {
  const recipeName = req.body.name;
  const queriedRecipe = await findByName(recipeName);
  const categories = await getCategories();
  console.log("queriedRecipe", queriedRecipe);
  res.render("recipe-detail", {
    categories: categories,
    recipe: queriedRecipe,
  });
});

app.get("/login-or-signup", (req, res) => {
  res.render("login-or-signup");
});
