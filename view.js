console.log("dasd")
import data from "./add.js"
console.log(data)
const recipes = JSON.parse(localStorage.getItem('recipes')) || []
console.log(recipes[0])
const recipeCard = document.getElementById('recipie-card')

if(recipeCard && recipes.length > 0){
 recipeCard.innerHTML +=`
   <img src="${recipes[0].recipeImage}" alt="Recipe Image" id="recipe-image" />
   <h2 id="recipe-title">${recipes[0].recipeName}</h2>
   <p id="recipe-ingredients">${recipes[0].ingredients}</p>
   <p id="recipe-description">${recipes[0].instructions}</p>
 `
}