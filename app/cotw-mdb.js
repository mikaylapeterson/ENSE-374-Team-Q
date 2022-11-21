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

// Vegetarian -> 26 Recipes
var recipe = new Recipe ({
    name: "Carrot Stew",
    desc: "This simple stew sat simmering for a long time to bring out the sweetness of the carrots.",
    ingred1: "Swift Carrot or Endura Carrot",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Copious Mushroom Skewers",
    desc: "Fans of fungal cuisine can't resist this simple mushroom-skewer dish. Very filling.",
    ingred1: "Any four different mushrooms",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Copious Fried Wild Greens",
    desc: "A healthy dish made by cooking mixed greens over a strong flame.",
    ingred1: "Any four different herbs, vegetables, or flowers",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Creamy Heart Soup",
    desc: "Enjoying this sweet soup with another person will bring you both closer together.",
    ingred1: "Hearty Radish or Big Hearty Radish",
    ingred2: "Hydromelon",
    ingred3: "Voltfruit",
    ingred4: "Fresh Milk",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Cream of Mushroom Soup",
    desc: "The creamy mushroom and vegetable soup is so chunky it eats like a meal!",
    ingred1: "Any mushroom",
    ingred2: "Any herb, vegetable, or flower",
    ingred3: "Fresh Milk",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Cream of Vegetable Soup",
    desc: "Made by simmering vegetables in milk, this healthy dish is as simple as the ingredients.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Fresh Milk",
    ingred3: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Curry Pilaf",
    desc: "The Goron spice used in this pilaf has given it a rich, spicy aroma.",
    ingred1: "Goron Spice",
    ingred2: "Goat Butter",
    ingred3: "Hylian Rice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Curry Rice",
    desc: "A favorite all over Hyrule, this simple dish has a flavor you just won't get tired of.",
    ingred1: "Goron Spice",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fragrant Mushroom Saute",
    desc: "The fragrant aroma of this sautéed spice and mushroom dish makes your mouth water.",
    ingred1: "Any mushroom",
    ingred2: "Goron Spice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fried Egg and Rice",
    desc: "The soft egg yolk pairs well with the fresh rice in this simple dish.",
    ingred1: "Bird Egg",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fried Wild Greens",
    desc: "A basic vegetable dish made by sautéing fresh wild plants.",
    ingred1: "Any herb, vegetable, or flower",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Herb Saute",
    desc: "A fragrant mixture of herbs and spices. It's easily recognized by its unique aroma.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Goron Spice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Mushroom Omelet",
    desc: "The fluffy texture of this omelet is one of the great joys of this dish, as well as life.",
    ingred1: "Any mushroom",
    ingred2: "Bird Egg",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Mushroom Rice Balls",
    desc: "The aroma of the mushrooms tickles your nose as you peel back the leafy wrapping.",
    ingred1: "Any mushroom",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Mushroom Risotto",
    desc: "The tantalizing aroma of mushrooms and butter beckons you to the table.",
    ingred1: "Any mushroom",
    ingred2: "Hylian Rice",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Mushroom Skewer",
    desc: "This simple mushroom packed skewer has its colorful presentation to thank for its appeal.",
    ingred1: "Any mushroom",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Omelet",
    desc: "This simple dish is common all over Hyrule. Simply fry egg until it's nice and plump.",
    ingred1: "Bird Egg",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Pumpkin Stew",
    desc: "Simply simmer a fortified pumpkin to make this dish. A favorite in Kakariko Village.",
    ingred1: "Fortified Pumpkin",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salt-Grilled Greens",
    desc: "A health-boosting dish made with leafy greens and a touch of salt.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salt-Grilled Mushrooms",
    desc: "A basic mushroom dish made by lightly salting mushrooms and grilling them.",
    ingred1: "Any mushroom",
    ingred2: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Steamed Mushrooms",
    desc: "A healthy vegetable dish achieved by steaming mushrooms in plant leaves.",
    ingred1: "Any mushroom",
    ingred2: "Any herb, vegetable, or flower",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Veggie Cream Soup",
    desc: "This creamy soup showcases the sweetness of vegetables in a veritable taste explosion.",
    ingred1: "Any carrot or pumpkin",
    ingred2: "Fresh Milk",
    ingred3: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Vegetable Curry",
    desc: "This healthy curry is popular for its mild flavor and moderate spiciness.",
    ingred1: "Any carrot or pumpkin",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Vegetable Omelet",
    desc: "This home-style dish mixes fluffy eggs with chopped vegetables for nutritional balance.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Bird Egg",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Veggie Rice Balls",
    desc: "This home-style dish of Kakariko Village is stuffed with the bounty of the mountains.",
    ingred1: "Any herb, vegetable, or flower",
    ingred2: "Hylian Rice",
    category: "vegetarian"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Vegetable Risotto",
    desc: "The sweetness of the ingredients gives this risotto a mild flavor.",
    ingred1: "Any carrot or pumpkin",
    ingred2: "Hylian Rice",
    ingred3: "Goat Butter",
    ingred4: "Rock Salt",
    category: "vegetarian"
});
SaveData(recipe);

// Meat & Poultry -> 31 Recipes
var recipe = new Recipe ({
    name: "Copious Meat Skewers",
    desc: "Just shove a bunch of meat on to a skewer and you're good to go.",
    ingred1: "Any four different meats",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Creamy Meat Soup",
    desc: "This nutritious soup contains serious portions of lightly-braised meat and many vegetables.",
    ingred1: "Any meat",
    ingred2: "Any herb, vegetable, or flower",
    ingred3: "Fresh Milk",
    ingred4: "Rock Salt",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Glazed Meat",
    desc: "The sweetness of the honey permeates the meat, giving it a complex taste profile.",
    ingred1: "Any meat",
    ingred2: "Courser Bee Honey",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Gourmet Meat Curry",
    desc: "The high-quality meat used in this prized dish satisfies meat and curry lovers alike.",
    ingred1: "Raw Gourmet Meat",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Gourmet Meat Stew",
    desc: "The meat has simmered for so long it melts in your mouth. A true bucket-list meal!",
    ingred1: "Raw Gourmet Meat or Raw Whole Bird",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Gourmet Meat & Rice Bowl",
    desc: "Only the most carefully selected cuts of high-quality meats go into this dish.",
    ingred1: "Raw Gourmet Meat or Raw Whole Bird",
    ingred2: "Rock Salt",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Gourmet Poultry Curry",
    desc: "Once served in Hyrule Castle, the poultry used in this dish is of immensely high quality.",
    ingred1: "Raw Whole Bird",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Gourmet Poultry Pilaf",
    desc: "Made with the highest-quality poultry, every bite of this pilaf floods your mouth with flavor.",
    ingred1: "Raw Whole Bird",
    ingred2: "Bird Egg",
    ingred3: "Goat Butter",
    ingred4: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Gourmet Spiced Meat Skewer",
    desc: "The rich aroma and juicy texture of this high-quality meat puts it in a league of its own.",
    ingred1: "Raw Gourmet Meat",
    ingred2: "Goron Spice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat Curry",
    desc: "The heat from the spice allows you to enjoy the large portion of the meat's savoriness.",
    ingred1: "Raw Meat",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat & Mushroom Skewer",
    desc: "A filling dish made by grilling various mountain ingredients with either steak or bird meat.",
    ingred1: "Any meat",
    ingred2: "Any mushroom",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat Pie",
    desc: "You'll need an extra napkin to deal with this juicy pie of perfectly baked minced meat.",
    ingred1: "Any meat",
    ingred2: "Rock Salt",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat & Rice Bowl",
    desc: "This dish of rice and lightly seared meat is a mainstay all throughout Hyrule.",
    ingred1: "Raw Meat or Raw Bird Drumstick",
    ingred2: "Rock Salt",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meaty Rice Balls",
    desc: "The sweet and spicy meat stuffed into these rice balls will keep you full for some time.",
    ingred1: "Any meat",
    ingred2: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat Skewer",
    desc: "A juicy, filling snack made by grilling small chunks of meat on a skewer.",
    ingred1: "Any meat",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat Stew",
    desc: "The hearty meat in this mainstay dish leaves bellies satisfied all throughout Hyrule.",
    ingred1: "Raw Meat or Raw Bird Drumstick",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat-Stuffed Pumpkin",
    desc: "This hollow, meat-filled fortified pumpkin is a local specialty or Kakariko Village.",
    ingred1: "Any meat",
    ingred2: "Fortified Pumpkin",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Pepper Steak",
    desc: "A dish made by cooking meat in crushed peppers, suppressing the gamy taste while accentuating its flavor.",
    ingred1: "Any meat",
    ingred2: "Spicy Pepper",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Poultry Curry",
    desc: "The savory meat pairs well with the aroma of spice in this common curry.",
    ingred1: "Raw Bird Drumstick",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Poultry Pilaf",
    desc: "Sautéed Hylian rice steamed in poultry broth. Cook on low heat until the rice is fluffy.",
    ingred1: "Raw Bird Drumstick",
    ingred2: "Bird Egg",
    ingred3: "Goat Butter",
    ingred4: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Prime Meat Curry",
    desc: "The high-quality meat in this curry has given it a deeper taste than most other curries.",
    ingred1: "Raw Prime Meat",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Prime Poultry Curry",
    desc: "The secret to this curry's flavor is taking it off the heat while you add the spices.",
    ingred1: "Raw Bird Thigh",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Prime Poultry Pilaf",
    desc: "The rice permeates the savory taste of the poultry in this Gerudo-region favorite.",
    ingred1: "Raw Bird Thigh",
    ingred2: "Bird Egg",
    ingred3: "Goat Butter",
    ingred4: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Prime Meat Stew",
    desc: "Letting the large portions of choice cuts of meat simmer brought out their savoriness.",
    ingred1: "Raw Prime Meat or Raw Bird Thigh",
    ingred2: "Fresh Milk",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Prime Meat & Rice Bowl",
    desc: "This bowl is loaded with high-quality meat. Your hunt for a serious meal ends here.",
    ingred1: "Raw Prime Meat or Raw Bird Thigh",
    ingred2: "Rock Salt",
    ingred3: "Hylian Rice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Prime Spiced Meat Skewer",
    desc: "The simple preparation of this steak dish belies its complex taste profile.",
    ingred1: "Raw Prime Meat",
    ingred2: "Goron Spice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salt-Grilled Meat",
    desc: "Short on ingredients? Just rub some meat in salt and cook it for a simple, tasty dish.",
    ingred1: "Raw Meat or Raw Bird Drumstick",
    ingred2: "Rock Salt",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salt-Grilled Gourmet Meat",
    desc: "This lavish grilled dish makes liberal use of high-quality cuts of meat.",
    ingred1: "Raw Gourmet Meat or Raw Whole Bird",
    ingred2: "Rock Salt",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salt-Grilled Prime Meat",
    desc: "A simple yet exquisite dish made by grilling high-quality meat on top of rock salt.",
    ingred1: "Raw Prime Meat or Raw Bird Thigh",
    ingred2: "Rock Salt",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Spiced Meat Skewer",
    desc: "A special Goron spice covers up the scent of the meat, allowing its flavor to shine.",
    ingred1: "Raw Meat",
    ingred2: "Goron Spice",
    category: "meat"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Steamed Meat",
    desc: "This meat dish has been wrapped in fragrant leaves and steamed to preserve its moisture.",
    ingred1: "Any meat",
    ingred2: "Any herb, vegetable, or flower",
    category: "meat"
});
SaveData(recipe);

// Seafood -> 23 Recipes
var recipe = new Recipe ({
    name: "Clam Chowder",
    desc: "The nutritional value of hearty blueshell snail combines with butter and milk in a rich soup.",
    ingred1: "Hearty Blueshell Snail",
    ingred2: "Fresh Milk",
    ingred3: "Tabantha Wheat",
    ingred4: "Goat Butter",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Copious Fish Skewers",
    desc: "It's just a whole heap of stuff shoved on to a skewer, but it's still a pretty tasty dish.",
    ingred1: "Any four different fish",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Crab Omelet with Rice",
    desc: "The fluffy crab legs pair perfectly with the rice for a truly scrumptious dish.",
    ingred1: "Any crab",
    ingred2: "Bird Egg",
    ingred3: "Rock Salt",
    ingred4: "Hylian Rice",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Crab Risotto",
    desc: "An everyday staple of seaside villages, the secret to its delicious flavor lies in crab fat.",
    ingred1: "Any crab",
    ingred2: "Rock Salt",
    ingred3: "Hylian Rice",
    ingred4: "Goat Butter",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Crab Stir-Fry",
    desc: "The Goron spice used in preparing this crab pairs perfectly with the flavor of the meat.",
    ingred1: "Any crab",
    ingred2: "Goron Spice",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Creamy Seafood Soup",
    desc: "Thick-cut chunks of seafood and stock provides a satisfying savoriness.",
    ingred1: "Any seafood",
    ingred2: "Any herb, vegetable, or flower",
    ingred3: "Rock Salt",
    ingred4: "Fresh Milk",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fish & Mushroom Skewer",
    desc: "A simple dish made by cooking skewered, fresh fish alongside fragrant mushrooms.",
    ingred1: "Any fish",
    ingred2: "Any mushroom",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fish Pie",
    desc: "A mainstay in any fisherman's home, the crisp crust pairs well with the fishy flavor.",
    ingred1: "Any seafood",
    ingred2: "Rock Salt",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fish Skewer",
    desc: "A simple dish made by cooking chunks of fresh fish on a skewer.",
    ingred1: "Any fish",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Glazed Seafood",
    desc: "A seafood dish that you can actually wolf down whole!",
    ingred1: "Any seafood",
    ingred2: "Courser Bee Honey",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Porgy Meuniere",
    desc: "Popular among residents of coastal regions, this juicy porgy is a delish dish.",
    ingred1: "Any Porgy",
    ingred2: "Tabantha Wheat",
    ingred3: "Goat Butter",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salmon Meuniere",
    desc: "The crispy skin of this fried hearty salmon puts its texture in a class all its own.",
    ingred1: "Hearty Salmon",
    ingred2: "Tabantha Wheat",
    ingred3: "Goat Butter",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salmon Risotto",
    desc: "The rice used in this rich risotto permeates the light flavor of the salmon.",
    ingred1: "Hearty Salmon",
    ingred2: "Rock Salt",
    ingred3: "Hylian Rice",
    ingred4: "Goat Butter",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salt-Grilled Crab",
    desc: "Nine out of ten fishermen agree: crab is best enjoyed grilled and with just a bit of salt.",
    ingred1: "Any crab",
    ingred2: "Rock Salt",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Salt-Grilled Fish",
    desc: "A simple dish made by rolling a whole fish in natural rock salt before grilling it.",
    ingred1: "Any fish",
    ingred2: "Rock Salt",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Seafood Curry",
    desc: "This dish brims with treasures from the sea. Its spice packs a kick, so it's not for kids.",
    ingred1: "Hearty Blueshell Snail or any Porgy",
    ingred2: "Hylian Rice",
    ingred3: "Goron Spice",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Seafood Fried Rice",
    desc: "Various seafood has been sautéed with rice. The stronger the flame, the tastier the dish!",
    ingred1: "Hearty Blueshell Snail or any Porgy",
    ingred2: "Hylian Rice",
    ingred3: "Rock Salt",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Seafood Meuniere",
    desc: "Rich butter flanks fresh seafood. The secret ingredient is lots and lots of love.",
    ingred1: "Any seafood except Hearty Salmon or any Porgy",
    ingred2: "Tabantha Wheat",
    ingred3: "Goat Butter",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Seafood Paella",
    desc: "No fisherman's birthday bash would be complete without this top-shelf seafood dish.",
    ingred1: "Any Porgy",
    ingred2: "Hearty Blueshell Snail",
    ingred3: "Rock Salt",
    ingred4: "Goat Butter",
    ingred5: "Hylian Rice",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Seafood Rice Balls",
    desc: "Stuffed with aromatic seafood, the flavor can vary by ingredients but never disappoints.",
    ingred1: "Any fish",
    ingred2: "Hylian Rice",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Seafood Skewer",
    desc: "The natural water in this medley of seafaring creatures makes for a delicious broth.",
    ingred1: "Any snail or crab",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Spicy Peppered Seafood",
    desc: "It's just a whole heap of stuff shoved on to a skewer, but it's still a pretty tasty dish.",
    ingred1: "Any seafood",
    ingred2: "Spicy Pepper",
    category: "seafood"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Steamed Seafood",
    desc: "A refined dish made by wrapping a fresh fish in fragrant wild greens and cooking it.",
    ingred1: "Any fish",
    ingred2: "Any herb, vegetable, or flower",
    category: "seafood"
});
SaveData(recipe);

// Surf&Turf -> 4 Recipes
var recipe = new Recipe ({
    name: "Gourmet Meat & Seafood Fry",
    desc: "A marriage of the choicest cuts of meat and seafood. As delicious as it is filling!",
    ingred1: "Raw Gourmet Meat or Raw Whole Bird",
    ingred2: "Any seafood item",
    category: "surfnturf"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Meat & Seafood Fry",
    desc: "A filling dish made by cooking fresh seafood and meat together.",
    ingred1: "Raw Meat or Raw Bird Drumstick",
    ingred2: "Any seafood item",
    category: "surfnturf"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Prime Meat & Seafood Fry",
    desc: "A filling dish made by cooking fresh seafood and meat together.",
    ingred1: "Raw Prime Meat or Raw Bird Thigh",
    ingred2: "Any seafood item",
    category: "surfnturf"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Spicy Meat & Seafood Fry",
    desc: "A filling dish made by cooking fresh seafood and meat together.",
    ingred1: "Hyrule Bass",
    ingred2: "Raw Meat",
    ingred3: "Spicy Pepper",
    category: "surfnturf"
});
SaveData(recipe);

// Monster -> 5 Recipes
var recipe = new Recipe ({
    name: "Monster Cake",
    desc: "It's said that once you have a taste of this cake, you'll never forget its sweetness.",
    ingred1: "Monster Extract",
    ingred2: "Cane Sugar",
    ingred3: "Goat Butter",
    ingred4: "Tabantha Wheat",
    category: "monster"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Monster Curry",
    desc: "This unusual take on curry uses monster extract and doesn't rely on spices.",
    ingred1: "Monster Extract",
    ingred2: "Goron Spice",
    ingred3: "Hylian Rice",
    category: "monster"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Monster Soup",
    desc: "Using monster extract as a base, this soup's distinct gaminess is either loved or hated.",
    ingred1: "Monster Extract",
    ingred2: "Goat Butter",
    ingred3: "Fresh Milk",
    ingred4: "Tabantha Wheat",
    category: "monster"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Monster Stew",
    desc: "Meat and seafood simmered in monster extract. A savory dish despite its ingredients.",
    ingred1: "Monster Extract",
    ingred2: "Any meat",
    ingred3: "Any seafood",
    category: "monster"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Monster Rice Balls",
    desc: "Rice balls flavored with monster extract. Their unique aroma is not for everyone.",
    ingred1: "Monster Extract",
    ingred2: "Hylian Rice",
    ingred3: "Rock Salt",
    category: "monster"
});
SaveData(recipe);

// Snacks -> 12 Recipes
var recipe = new Recipe ({
    name: "Copious Simmered Fruit",
    desc: "The flavors of the various fruits in this simmered dish exist in perfect harmony.",
    ingred1: "Any four different fruit",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Dubious Food",
    desc: "It's too gross to even look at. A bizarre smell issues forth from this heap. Eating it won't hurt you, though...probably.",
    ingred1: "2+ foods with any effects",
    ingred2: "Any monster part",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fruit & Mushroom Mix",
    desc: "This dish contrasts the sweetness of fruit with the savoriness of mushrooms.",
    ingred1: "Any fruit",
    ingred2: "Any mushroom",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Glazed Mushrooms",
    desc: "The honey in this mushroom dish gives it a sweet, complex taste and a savory finish.",
    ingred1: "Any mushroom",
    ingred2: "Courser Bee Honey",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Glazed Veggies",
    desc: "Don't like the taste of vegetables? Simply sauté them in honey for a salty-sweet flavor!",
    ingred1: "Any vegetable",
    ingred2: "Courser Bee Honey",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Rock-Hard Food",
    desc: "A dish gone awry after adding the wrong ingredient. Chewing your way through this won't be fun, but it will fill you up when you're between a rock and a hard place.",
    ingred1: "Any wood or ore",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Sauteed Nuts",
    desc: "These sautéed tree seeds are the perfect snack for the busy adventurer on the go!",
    ingred1: "Any nut",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Sauteed Peppers",
    desc: "The spiciness of these sautéed peppers has been broken by the heat for a sweeter taste.",
    ingred1: "Spicy Pepper",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Simmered Fruit",
    desc: "This sweet dish is made by heaping tasty fruits into a pan and simmering until tender.",
    ingred1: "Any fruit",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Steamed Fruit",
    desc: "A regional dish made by steaming near-ripened fruits in the leaves of fragrant plants.",
    ingred1: "Any fruit",
    ingred2: "Any herb, vegetable, or flower",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Warm Milk",
    desc: "Make this by heating up some milk. Drink it before bed to ensure a good night's sleep.",
    ingred1: "Fresh Milk",
    category: "snack"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Wheat Bread",
    desc: "Made with wheat from the Tabantha region, this soft, springy bread smells just heavenly.",
    ingred1: "Tabantha Wheat",
    ingred2: "Rock Salt",
    category: "snack"
});
SaveData(recipe);

// Desserts -> 16 Recipes
var recipe = new Recipe ({
    name: "Apple Pie",
    desc: "The crispy, flaky pie crust and sweet apples are a match made in heaven.",
    ingred1: "Apple",
    ingred2: "Goat Butter",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Carrot Cake",
    desc: "Even those who don't like carrots tend to enjoy the mild sweetness of this cake.",
    ingred1: "Any carrot",
    ingred2: "Goat Butter",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Egg Pudding",
    desc: "Made by cooking eggs and milk in a special mold, its soft texture melts in your mouth.",
    ingred1: "Bird Egg",
    ingred2: "Fresh Milk",
    ingred3: "Cane Sugar",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Egg Tart",
    desc: "You'll know this simple dessert is done baking when it smells just delightful.",
    ingred1: "Bird Egg",
    ingred2: "Goat Butter",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fried Bananas",
    desc: "Children love fried mighty bananas. The trick is frying them over very high heat.",
    ingred1: "Mighty Bananas",
    ingred2: "Tabantha Wheat",
    ingred3: "Cane Sugar",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fruitcake",
    desc: "Making ample use of fruits found all over Hyrule, this cake is a must for celebrations.",
    ingred1: "Wildberry or Apple",
    ingred2: "Any other fruit",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fruit Pie",
    desc: "A celebration isn't a celebration until this fruit-filled crust hits the table!",
    ingred1: "Any fruit except apple or pumpkin",
    ingred2: "Goat Butter",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Honey Crepe",
    desc: "Honey has been drizzled over thin crepes to bring out their natural sweetness and flavor.",
    ingred1: "Bird Egg",
    ingred2: "Fresh Milk",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    ingred5: "Courser Bee Honey",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Honeyed Apple",
    desc: "A juicy sweet-and-sour dish combining newly ripened apples with honey.",
    ingred1: "Apple",
    ingred2: "Courser Bee Honey",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Honey Candy",
    desc: "A natural sweet, brimming with nutrition and made by stewing fresh honey.",
    ingred1: "Courser Bee Honey",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Honeyed Fruits",
    desc: "A dish that combines the thick sweetness of honey with the acidity of sour fruits.",
    ingred1: "Any fruit except apples",
    ingred2: "Courser Bee Honey",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Hot Buttered Apple",
    desc: "The apple's sweetness has been enhanced by smothering it with butter and baking it.",
    ingred1: "Apple",
    ingred2: "Goat Butter",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Nutcake",
    desc: "Forest nuts give this cake a pleasant texture and a simple, understated sweetness.",
    ingred1: "Any nut",
    ingred2: "Goat Butter",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Pumpkin Pie",
    desc: "The intense sweetness of fortified pumpkins makes this dessert popular among children.",
    ingred1: "Fortified Pumpkin",
    ingred2: "Goat Butter",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Plain Crepe",
    desc: "The simplicity of this dish lets the flavor of its ingredients shine.",
    ingred1: "Bird Egg",
    ingred2: "Fresh Milk",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    category: "dessert"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Wildberry Crepe",
    desc: "Sweet, tart wildberries are folded into thin, springy dough to make this dessert.",
    ingred1: "Bird Egg",
    ingred2: "Fresh Milk",
    ingred3: "Cane Sugar",
    ingred4: "Tabantha Wheat",
    ingred5: "Wildberry",
    category: "dessert"
});
SaveData(recipe);

// Elixir
var recipe = new Recipe ({
    name: "Hearty Elixir",
    //desc: "The crispy, flaky pie crust and sweet apples are a match made in heaven.",
    ingred1: "Any monster part",
    ingred2: "Hearty food item (ie, hearty bass, hearty blueshell snail)",
    category: "elixir"
});
SaveData(recipe);

var recipe = new Recipe ({
    name: "Fairy Tonic",
    //desc: "The crispy, flaky pie crust and sweet apples are a match made in heaven.",
    ingred1: "Fairy",
    ingred2: "Any gem, animal, or monster part",
    category: "elixir"
});
SaveData(recipe);

async function SaveData(recipe) {
    try {await recipe.save();} catch (e) {console.log(e);}
}