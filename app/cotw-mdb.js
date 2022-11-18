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
    name: "Carrot Stew",
    desc: "This simple stew sat simmering for a long time to bring out the sweetness of the carrots.",
    ingred1: "Swift Carrot or Endura Carrot",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Copious Mushroom Skewers",
    desc: "Fans of fungal cuisine can't resist this simple mushroom-skewer dish. Very filling.",
    ingred1: "Any four different mushrooms",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Copious Fried Wild Greens",
    desc: "A healthy dish made by cooking mixed greens over a strong flame.",
    ingred1: "Any four different herbs, vegetables, or flowers",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Creamy Heart Soup",
    desc: "Enjoying this sweet soup with another person will bring you both closer together.",
    ingred1: "Hearty Radish or Big Hearty Radish",
    ingred2: "Hydromelon",
    ingred3: "Voltfruit",
    ingred4: "Fresh Milk",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Cream of Mushroom Soup",
    desc: "The creamy mushroom and vegetable soup is so chunky it eats like a meal!",
    ingred1: "Any mushroom",
    ingred2: "Any herb, vegetable, or flower",
    ingred3: "Fresh Milk",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Cream of Vegetable Soup",
    desc: "Made by simmering vegetables in milk, this healthy dish is as simple as the ingredients.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Fresh Milk",
    ingred3: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Curry Pilaf",
    desc: "The Goron spice used in this pilaf has given it a rich, spicy aroma.",
    ingred1: "Goron Spice",
    ingred2: "Goat Butter",
    ingred3: "Hylian Rice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Curry Rice",
    desc: "A favorite all over Hyrule, this simple dish has a flavor you just won't get tired of.",
    ingred1: "Goron Spice",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Fragrant Mushroom Saute",
    desc: "The fragrant aroma of this sautéed spice and mushroom dish makes your mouth water.",
    ingred1: "Any mushroom",
    ingred2: "Goron Spice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Fried Egg and Rice",
    desc: "The soft egg yolk pairs well with the fresh rice in this simple dish.",
    ingred1: "Bird Egg",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Fried Wild Greens",
    desc: "A basic vegetable dish made by sautéing fresh wild plants.",
    ingred1: "Any herb, vegetable, or flower",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Herb Saute",
    desc: "A fragrant mixture of herbs and spices. It's easily recognized by its unique aroma.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Goron Spice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Mushroom Omelet",
    desc: "The fluffy texture of this omelet is one of the great joys of this dish, as well as life.",
    ingred1: "Any mushroom",
    ingred2: "Bird Egg",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Mushroom Rice Balls",
    desc: "The aroma of the mushrooms tickles your nose as you peel back the leafy wrapping.",
    ingred1: "Any mushroom",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Mushroom Risotto",
    desc: "The tantalizing aroma of mushrooms and butter beckons you to the table.",
    ingred1: "Any mushroom",
    ingred2: "Hylian Rice",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Mushroom Skewer",
    desc: "This simple mushroom packed skewer has its colorful presentation to thank for its appeal.",
    ingred1: "Any mushroom",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Omelet",
    desc: "This simple dish is common all over Hyrule. Simply fry egg until it's nice and plump.",
    ingred1: "Bird Egg",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Pumpkin Stew",
    desc: "Simply simmer a fortified pumpkin to make this dish. A favorite in Kakariko Village.",
    ingred1: "Fortified Pumpkin",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Salt-Grilled Greens",
    desc: "A health-boosting dish made with leafy greens and a touch of salt.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Salt-Grilled Mushrooms",
    desc: "A basic mushroom dish made by lightly salting mushrooms and grilling them.",
    ingred1: "Any mushroom",
    ingred2: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Steamed Mushrooms",
    desc: "A healthy vegetable dish achieved by steaming mushrooms in plant leaves.",
    ingred1: "Any mushroom",
    ingred2: "Any herb, vegetable, or flower",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Veggie Cream Soup",
    desc: "This creamy soup showcases the sweetness of vegetables in a veritable taste explosion.",
    ingred1: "Any carrot or pumpkin",
    ingred2: "Fresh Milk",
    ingred3: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Vegetable Curry",
    desc: "This healthy curry is popular for its mild flavor and moderate spiciness.",
    ingred1: "Any carrot or pumpkin",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Vegetable Omelet",
    desc: "This home-style dish mixes fluffy eggs with chopped vegetables for nutritional balance.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Bird Egg",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Veggie Rice Balls",
    desc: "This home-style dish of Kakariko Village is stuffed with the bounty of the mountains.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
recipe.save();

var recipe = new Recipe ({
    name: "Vegetable Risotto",
    desc: "The sweetness of the ingredients gives this risotto a mild flavor.",
    ingred1: "Any carrot or pumpkin",
    ingred2: "Hylian Rice",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
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
var recipe = new Recipe ({
    name: "Hearty Elixir",
    //desc: "The crispy, flaky pie crust and sweet apples are a match made in heaven.",
    ingred1: "Any monster part",
    ingred2: "Hearty food item (ie, hearty bass, hearty blueshell snail)",
    category: "elixir"
});
recipe.save();