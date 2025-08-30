
import data from "./add.js"
console.log(data)
const recipes = JSON.parse(localStorage.getItem('recipes')) || []
console.log(recipes)
const recipeCard = document.getElementById('recipie-card')
if(recipes.length === 0){
  recipeCard.innerHTML = "<p class='no-recipes'>No recipes found.</p>"
}

if(recipeCard && recipes.length > 0){

  recipes.map((p)=>{
     recipeCard.innerHTML +=`
     <div class="recipe-container">
      <img src="${p.recipeImage}" alt="Recipe Image" id="recipe-image" class="recipe-image" />
      <h2 id="recipe-title" class="recipe-title">${p.recipeName}</h2>
      <p id="recipe-ingredients" class="recipe-ingredients"><span>Ingredients: </span>${p.ingredients}</p>
      <p id="recipe-description" class="recipe-description"><span>Description: </span>${p.instructions}</p>
    </div>
    `
  })
    
   
}