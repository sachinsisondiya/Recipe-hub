const specialDish = document.getElementById("special");

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const meal = data.meals[0];
    const ingredients = [];
    console.log(meal.strIngredient1);
    for(let i =1;i<=10;i++){
      let ingredient  = meal[`strIngredient${i}`];
      ingredients.push(ingredient);

    }
    console.log(ingredients);

    specialDish.innerHTML += `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="cover-image" />
      <div class="blur"></div>
      <div class="spec-intro">
      <h3 class="dish-name"> Name:${meal.strMeal}</h3>
      <p class="type">Category: ${meal.strCategory}</p>
      <p class="origin">Origin: ${meal.strArea}</p>
      </div>
      <div class="meal-info">
      <div class="ingredients">
        <h4>Ingredients:</h4>
        <div class="ingredient-list">
          ${ingredients.map(i =>{
            return `<span>${i}</span>`
          }).join(",")}
        </div>
      </div>
      </div>
          <div class="process">
         <h4>Cooking Instructions:</h4>
         <p>${meal.strInstructions}</p>
       </div>
     
    `
   
    // // console.log(data.meals[0].strYoutube)
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