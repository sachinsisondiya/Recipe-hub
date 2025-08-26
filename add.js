
const categorySelect = document.getElementById('category-select')

const recipeName = document.getElementById('recipe-name')
const form = document.getElementById('add-recipe-form')
const recipeImage = document.getElementById('recipe-image')
const ingredients = document.getElementById('ingredients')
const instructions = document.getElementById('instructions')

const data = []

form.addEventListener('submit' , (e) =>{
  e.preventDefault()
  console.log("saadd")
  const formData = {
    recipeName: recipeName.value,
    category: categorySelect.value,
    recipeImage: recipeImage.files[0],
    ingredients: ingredients.value,
    instructions: instructions.value
  }
  console.log(formData)
  data.push(formData)
  console.log(data)
})

categorySelect.addEventListener('change',(e) =>{
  console.log(e.target.value)
})
export default data





