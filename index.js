



fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pasta")
  .then(res => res.json())
  .then(data => {
    console.log(data.meals[0].strYoutube)
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