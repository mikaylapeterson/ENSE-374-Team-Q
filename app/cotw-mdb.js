const fs = require("fs");
const express = require ("express");
const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost:27017/cotw', 
                  { useNewUrlParser: true, useUnifiedTopology: true });

const recipeSchema = new mongoose.Schema ({
    //_id: Number,
    name: String,
    desc: String,
    ingred1: String,
    ingred2: String,
    ingred3: String,
    ingred4: String,
    ingred5: String,
    //effect: String,		// Hearty, Energizing, Enduring, Hasty, Fireproof, Spicy, Electro, Mighty, Tough, Sneaky, Chilly
    category: String 		// Vegetarian, Meat, Seafood, Surf&Turf, Monster, Snack, Dessert, Elixir
});
const Recipe = mongoose.model ( "Recipe", recipeSchema );

// Vegetarian
var recipe = new Recipe ({
    name: "Cream of Vegetable Soup",
    desc: "Made by simmering vegetables in milk, this healthy dish is as simple as the ingredients.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Fresh Milk",
    ingred3: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

// Meat & Poultry
var recipe = new Recipe ({
    name: "Gourment Meat Stew",
    desc: "The meat has simmered for so long it melts in your mouth. A true bucket-list meal!",
    ingred1: "Raw Gourmet Meat or Raw Whole Bird",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "meat"
});
recipe.save();

// Seafood
var recipe = new Recipe ({
    name: "Salmon Risotto",
    desc: "The rice used in this rich risotto permeates the light flavor of the salmon.",
    ingred1: "Hearty Salmon",
    ingred2: "Rock Salt",
    ingred3: "Hylian Rice",
    ingred4: "Goat Butter",
    category: "seafood"
});
recipe.save();

// Surf&Turf
var recipe = new Recipe ({
    name: "Meat & Seafood Fry",
    desc: "A filling dish made by cooking fresh seafood and meat together.",
    ingred1: "Raw Meat or Raw Bird Drumstick",
    ingred2: "Any seafood item",
    category: "surfnturf"
});
recipe.save();

// Monster 
var recipe = new Recipe ({
    name: "Monster Rice Balls",
    desc: "Rice balls flavored with monster extract. Their unique aroma is not for everyone.",
    ingred1: "Monster Extract",
    ingred2: "Hylian Rice",
    ingred3: "Rock Salt",
    category: "monster"
});
recipe.save();

// Snacks
var recipe = new Recipe ({
    name: "Dubious Food",
    desc: "It's too gross to even look at. A bizarre smell issues forth from this heap. Eating it won't hurt you, though...probably.",
    ingred1: "2+ foods with any effects",
    ingred2: "Any monster part",
    category: "snack"
});
recipe.save();

// Desserts
var recipe = new Recipe ({
    name: "Apple Pie",
    desc: "The crispy, flaky pie crust and sweet apples are a match made in heaven.",
    ingred1: "Goat Butter",
    ingred2: "Cane Sugar",
    ingred3: "Tabantha Wheat",
    category: "dessert"
});
recipe.save();

// Elixir