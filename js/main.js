const meals = [
  {
    name: "Chicken Stir-Fry",
    desc: "Delicious chicken stir-fry with vegetables and a tangy sauce.",
    imageSrc: "./images/photo-1603133872878-684f208fb84b.jpg",
    rating: 4.5,
    reviews: "(324 reviews)",
    region: "Asian",
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    servings: "4 people",
    extendedMeal: false,
    easy: "Easy",
    ingredients: [
      "2 tablespoons olive oil",
      "1 pound boneless chicken breast, cut into bite-size pieces",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tablespoon soy sauce",
      "1 tablespoon brown sugar",
      "1 tablespoon garlic powder",
      "1 tablespoon paprika",
      "1 tablespoon cumin",
    ],
    instructions: [
      "Heat olive oil in a skillet over medium heat.",
      "Add chicken pieces and cook until browned, about 5 minutes.",
      "Add diced onion and minced garlic to the skillet and cook until translucent.",
      "Stir in soy sauce, brown sugar, garlic powder, paprika, and cumin.",
    ],
    calories: 400,
    carbs: 25,
    protein: 30,
    fat: 10,
    fiber: 5,
    sodium: "100mg",
    tip1: "Use a non-stick cooking spray to prevent sticking.",
    tip2: "Season the chicken with salt and pepper to taste.",
    tip3: "Cook the chicken until it's cooked through.",
    tip4: "Serve the chicken stir-fry with your favorite side dishes, such as rice, vegetables, or noodles.",
  },
  {
    name: "Beef Tacos",
    desc: "Crispy tacos filled with seasoned beef, fresh veggies, and cheese.",
    imageSrc: "./images/tacos.avif",
    rating: 4.7,
    reviews: "(410 reviews)",
    region: "Mexican",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    servings: "3 people",
    extendedMeal: true,
    easy: "Medium",
    ingredients: [
      "300g ground beef",
      "1 tablespoon olive oil",
      "1 onion, diced",
      "1 teaspoon chili powder",
      "1 teaspoon paprika",
      "1 teaspoon cumin",
      "1 teaspoon garlic powder",
      "Salt and pepper to taste",
      "6 taco shells",
    ],
    instructions: [
      "Heat olive oil in a pan and cook the onion until softened.",
      "Add ground beef and cook until browned.",
      "Season with chili powder, cumin, paprika, garlic powder.",
      "Fill taco shells with beef, lettuce, and cheese.",
    ],
    calories: 480,
    carbs: 35,
    protein: 28,
    fat: 22,
    fiber: 4,
    sodium: "180mg",
    tip1: "Warm taco shells in the oven for extra crispiness.",
    tip2: "Add salsa or guacamole for richer flavor.",
    tip3: "Use lean ground beef to reduce fat.",
    tip4: "Don’t overfill tacos to avoid breaking.",
  },
  {
    name: "Creamy Alfredo Pasta",
    desc: "Rich and creamy Alfredo pasta with parmesan and garlic.",
    imageSrc: "./images/photo-1565557623262-b51c2513a641.jpg",
    rating: 4.6,
    reviews: "(298 reviews)",
    region: "Italian",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    servings: "2 people",
    extendedMeal: false,
    easy: "Medium",
    ingredients: [
      "200g fettuccine pasta",
      "2 tablespoons butter",
      "1 cup heavy cream",
      "2 cloves garlic, minced",
      "1 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Parsley for garnish",
      "Grilled chicken for serving",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Boil pasta until al dente.",
      "In a pan, melt butter and sauté garlic.",
      "Add heavy cream and simmer for 3 minutes.",
      "Stir in parmesan until creamy.",
    ],
    calories: 650,
    carbs: 55,
    protein: 18,
    fat: 40,
    fiber: 3,
    sodium: "220mg",
    tip1: "Use freshly grated parmesan for best results.",
    tip2: "Do not overcook pasta.",
    tip3: "Add grilled chicken for extra protein.",
    tip4: "Add pasta water if sauce thickens.",
  },
  {
    name: "Grilled Lemon Chicken",
    desc: "Tender grilled chicken marinated with lemon and herbs.",
    imageSrc: "./images/photo-1633504581786-316c8002b1b9.jpg",
    rating: 4.8,
    reviews: "(512 reviews)",
    region: "Mediterranean",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    servings: "4 people",
    extendedMeal: false,
    easy: "Difficult",
    ingredients: [
      "4 chicken breasts",
      "2 tablespoons olive oil",
      "1 lemon, juiced",
      "1 teaspoon garlic powder",
      "Salt and pepper to taste",
      "Grilled vegetables for serving",
      "Salt and pepper to taste",
      "1 teaspoon oregano",
      "Lemon slices for garnish",
    ],
    instructions: [
      "Mix olive oil, lemon juice, oregano, garlic powder.",
      "Marinate chicken for at least 15 minutes.",
      "Grill chicken for 6–7 minutes per side.",
      "Serve warm with vegetables or rice.",
    ],
    calories: 390,
    carbs: 8,
    protein: 35,
    fat: 18,
    fiber: 2,
    sodium: "120mg",
    tip1: "Marinate longer for deeper flavor.",
    tip2: "Don't overcook to keep it tender.",
    tip3: "Add lemon slices while grilling for aroma.",
    tip4: "Use a meat thermometer for perfect doneness.",
  },
  {
    name: "Vegetable Soup",
    desc: "Healthy and hearty vegetable soup packed with nutrients.",
    imageSrc: "./images/photo-1546069901-ba9599a7e63c.jpg",
    rating: 4.4,
    reviews: "(189 reviews)",
    region: "International",
    prepTime: "10 minutes",
    cookTime: "25 minutes",
    servings: "3 people",
    extendedMeal: true,
    easy: "Easy",
    ingredients: [
      "2 carrots, chopped",
      "1 potato, diced",
      "1 onion, diced",
      "1 zucchini, chopped",
      "1 cup spinach",
      "3 cups vegetable broth",
      "1 tablespoon olive oil",
      "Salt and pepper to taste",
      "Chili flakes (optional)",
    ],
    instructions: [
      "Heat olive oil and sauté onion until soft.",
      "Add carrots, potato, and zucchini and cook for 5 minutes.",
      "Pour vegetable broth and simmer for 15 minutes.",
      "Add spinach and cook 3 more minutes.",
    ],
    calories: 210,
    carbs: 35,
    protein: 6,
    fat: 5,
    fiber: 8,
    sodium: "90mg",
    tip1: "Add chili flakes for spice.",
    tip2: "Blend half of the soup for a thicker texture.",
    tip3: "Use fresh vegetables for best flavor.",
    tip4: "Serve with toasted bread.",
  },
  {
    name: "Butter Chicken",
    desc: "Creamy Indian-style chicken cooked in a rich tomato and butter sauce.",
    imageSrc: "./images/photo-1546069901-eacef0df6022.jpg",
    rating: 4.9,
    reviews: "(620 reviews)",
    region: "Indian",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: "4 people",
    extendedMeal: false,
    easy: "easy",
    ingredients: [
      "500g chicken breast, cubed",
      "2 tablespoons butter",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 cup tomato puree",
      "1 cup heavy cream",
      "1 teaspoon garam masala",
      "1 teaspoon paprika",
      "1 teaspoon ginger powder",
    ],
    instructions: [
      "Melt butter in a skillet and sauté onions until golden.",
      "Add garlic and chicken cubes and cook until lightly browned.",
      "Stir in tomato puree, spices, and simmer for 10 minutes.",
      "Add heavy cream and cook for another 5 minutes.",
    ],
    calories: 520,
    carbs: 20,
    protein: 32,
    fat: 30,
    fiber: 4,
    sodium: "160mg",
    tip1: "Use fresh cream for a smoother texture.",
    tip2: "Marinate chicken in yogurt for extra tenderness.",
    tip3: "Serve with basmati rice or naan.",
    tip4: "Add chili powder if you prefer it spicy.",
  },
  {
    name: "Salmon Teriyaki",
    desc: "Glazed teriyaki salmon with a sweet and savory sauce.",
    imageSrc: "./images/photo-1547592166-23ac45744acd.jpg",
    rating: 4.8,
    reviews: "(378 reviews)",
    region: "Japanese",
    prepTime: "10 minutes",
    cookTime: "12 minutes",
    servings: "2 people",
    extendedMeal: true,
    easy: "Easy",
    ingredients: [
      "2 salmon fillets",
      "2 tablespoons soy sauce",
      "1 tablespoon honey",
      "1 tablespoon brown sugar",
      "1 teaspoon garlic powder",
      "1 teaspoon ginger powder",
      "1 teaspoon olive oil",
      "Sesame seeds",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Mix soy sauce, honey, brown sugar, garlic.",
      "Marinate salmon for 10 minutes.",
      "Heat olive oil in a pan and cook salmon 4–5 minutes .",
      "Pour remaining sauce over salmon and simmer until thickened.",
    ],
    calories: 430,
    carbs: 18,
    protein: 34,
    fat: 23,
    fiber: 1,
    sodium: "140mg",
    tip1: "Don’t overcook salmon to keep it juicy.",
    tip2: "Add sesame seeds for extra crunch.",
    tip3: "Use low-sodium soy sauce for a lighter version.",
    tip4: "Great when served with steamed rice.",
  },
];

function showRecipe(meal) {
  document.getElementById("card-img").src = meal.imageSrc;
  document.getElementById("title").innerHTML = meal.name;
  document.getElementById("desc").innerHTML = meal.desc;
  document.getElementById("rate").innerHTML = meal.rating;
  document.getElementById("easy").innerHTML = meal.easy;
  document.getElementById("reviews").innerHTML = meal.reviews;
  document.getElementById("region").innerHTML = meal.region;
  document.getElementById("prep-time").innerHTML = meal.prepTime;
  document.getElementById("cook-time").innerHTML = meal.cookTime;
  document.getElementById("servings").innerHTML = meal.servings;
  document.getElementById("calories").innerHTML = meal.calories;
  document.getElementById("carbs").innerHTML = meal.carbs;
  document.getElementById("protein").innerHTML = meal.protein;
  document.getElementById("fat").innerHTML = meal.fat;
  document.getElementById("fibers").innerHTML = meal.fiber;
  document.getElementById("sodium").innerHTML = meal.sodium;
  document.getElementById("tip1").innerHTML = meal.tip1;
  document.getElementById("tip2").innerHTML = meal.tip2;
  document.getElementById("tip3").innerHTML = meal.tip3;
  document.getElementById("tip4").innerHTML = meal.tip4;

  let ingredientsHTML = "";
  for (let i = 0; i < meal.ingredients.length; i++) {
    ingredientsHTML += `<li style="margin-bottom: 17px;">${meal.ingredients[i]} </li>`;
  }
  document.getElementById("ingredients").innerHTML = ingredientsHTML;

  let instructionsHTML = "";
  for (let i = 0; i < meal.instructions.length; i++) {
    instructionsHTML += `<li style="margin-bottom: 32px;">${meal.instructions[i]} </li>`;
  }
  document.getElementById("instructions").innerHTML = instructionsHTML;

  if (meal.extendedMeal === true) {
    document.getElementById("extended-message").classList.remove("d-none");
  } else {
    document.getElementById("extended-message").classList.add("d-none");
  }
}

var lastRandom;

document.getElementById("change-btn").onclick = function () {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * meals.length);
  } while (randomIndex === lastRandom);
  lastRandom = randomIndex;
  showRecipe(meals[randomIndex]);
};

showRecipe(meals[0]);
console.log("hi");
