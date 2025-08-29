const specialDish = document.getElementById("special");
const searchBar = document.getElementById("search-bar")
const menuBar = document.getElementById("menu")
const searchInput = document.getElementById("search-input")
const searchResult = document.getElementById("search-result")

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
    

    specialDish.innerHTML += `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="cover-image" />
      <div class="blur"></div>
      <div class="spec-intro">
      <h3 class="dish-name"> Name: <strong>${meal.strMeal}</strong></h3>
      <p class="type">Category: <strong>${meal.strCategory}</strong></p>
      <p class="origin">Origin: <strong>${meal.strArea}</strong></p>
      </div>
      <div class="meal-info">
      <div class="ingredients">
        <h4>Ingredients:</h4>
        <div class="ingredient-list">
          ${ingredients.filter(i => i && i.trim() !== "").map(i =>{
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
  })
  .catch("not allowed")


document.addEventListener("click" , (e) =>{

  if(e.target.id === "search-icon"){
    
    search()
  } 
  if(e.target.id != "search-icon" && e.target.id != "search-input"){
    searchBar.style.display = "none"
    menuBar.style.display = "block"
    searchInput.value = ""
    searchResult.innerHTML = ""
  }
})


function search(){
 
  searchBar.style.display = "block"
  menuBar.style.display = "none"
  searchInput.addEventListener("input" , (e)=>{
      let value = e.target.value
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then(res => res.json())
      .then(data =>{
        const meal = data.meals
        console.log(meal)
        if(meal){
          searchResult.innerHTML = meal.slice(0,5).map( m =>{
            return `<p class="search-result-item" onclick="selectMeal('${m.idMeal}')">${m.strMeal}</p>`
          }).join("")
        }
      })
  })
  
}
function selectMeal(id){
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then(res => res.json())
  .then(data =>{
    const meal = data.meals[0]
     const ingredients = [];
    console.log(meal.strIngredient1);
    for(let i =1;i<=10;i++){
      let ingredient  = meal[`strIngredient${i}`];
      ingredients.push(ingredient);

    }
    
    specialDish.innerHTML = `
    <h1>Let's Cook</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="cover-image" />
      <div class="blur"></div>
      <div class="spec-intro">
      <h3 class="dish-name"> Name: <strong>${meal.strMeal}</strong></h3>
      <p class="type">Category: <strong>${meal.strCategory}</strong></p>
      <p class="origin">Origin: <strong>${meal.strArea}</strong></p>
      </div>
      <div class="meal-info">
      <div class="ingredients">
        <h4>Ingredients:</h4>
        <div class="ingredient-list">
          ${ingredients.filter(i => i && i.trim() !== "").slice(0, 5).map((i) =>{
            return `<span>${i}</span>`
          }).join("")}
        </div>
      </div>
      </div>
          <div class="process">
         <h4>Cooking Instructions:</h4>
         <p>${meal.strInstructions}</p>
       </div>
       `

       searchInput.value=""
       searchResult.innerHTML = ""
        searchBar.style.display = "none"
        menuBar.style.display = "block"
  })
}

