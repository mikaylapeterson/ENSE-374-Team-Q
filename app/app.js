// Requirements
const express = require("express");
const mongo = require("mongoose");
const { getCategories, findByCategory, findByName } = require("./cotw-mdb");

// Create Express App and Setup
const app = express();

const recipesList = {};

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.listen(port, async () => {
  console.log("App has started at ", port, "!");
});

app.get("/", async (req, res) => {
  const recipeCategories = await getCategories();

  await Promise.all(
    recipeCategories.map(async (category) => {
      const currentCategoryRecipes = await findByCategory(category);
      recipesList[category] = currentCategoryRecipes;
    })
  );

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

  res.render("recipe-detail", {
    categories: categories,
    recipe: queriedRecipe,
  });
});

app.get("/login-or-signup", (req, res) => {
  res.render("login-or-signup");
});

app.post("/filter", async (req, res) => {
  // Checks if any inputs were selected, and returns to home page if not
  const search = req.body.search;

  if (Object.keys(req.body).length === 1 && search == "") {
    res.redirect("/");
    return;
  }
  const filteredRecipesList = {};

  const formData = Object.keys(req.body).filter(
    (checkedInput) => checkedInput != "search"
  );
  console.log("formData", formData);
  let recipeCategories = await getCategories();

  await Promise.all(
    formData.map(async (category) => {
      const currentCategoryRecipes = await findByCategory(category);
      filteredRecipesList[category] = currentCategoryRecipes;
    })
  );

  if (search) {
    const queriedRecipe = await findByName(search);
    if (queriedRecipe) {
      filteredRecipesList["searched"] = [queriedRecipe];
      recipeCategories = ["searched", ...recipeCategories];
    }
  }

  res.render("recipes", {
    recipes: filteredRecipesList,
    categories: recipeCategories,
  });
});
