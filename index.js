const specialDish = document.getElementById("special");

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const meal = data.meals[0];
    specialDish.innerHTML += `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h3 class="dish-name">${meal.strMeal}</h3>
      <p class="type">${meal.strCategory}</p>
      <p class="origin">${meal.strArea}</p>
      <div class="ingredients">
        <h4>Ingredients:</h4>
        <ul class="ingredient-list">
          ${Object.keys(meal)
            .filter(key => key.startsWith("strIngredient") && meal[key])
            .map(key => `<li>${meal[key]}</li>`)
            .join("")}
        </ul>
      </div>
      <div class="process">
        <h4>Cooking Instructions:</h4>
        <p>${meal.strInstructions}</p>
      </div>
    `;

    // console.log(data.meals[0].strYoutube)
  })
  .catch("not allowed")
// fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1', {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
// 		'x-rapidapi-key': '80378f0' // Replace with your actual RapidAPI key
// 	}
// })
// .then(res => res.json())
// .then(data => {
// 	console.log(data);
// })
// .catch(error => {
// 	console.error(error);
// });

// const url = '';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }