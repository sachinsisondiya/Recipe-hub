
const categorySelect = document.getElementById('category-select')

const recipeName = document.getElementById('recipe-name')
const form = document.getElementById('add-recipe-form')
const recipeImage = document.getElementById('recipe-image')
const ingredients = document.getElementById('ingredients')
const instructions = document.getElementById('instructions')
let img = ""

const data = JSON.parse(localStorage.getItem('recipes')) || []
if(recipeImage){
recipeImage.addEventListener('change' , (e) =>{
  const file  =e.target.files[0]
   const reader = new FileReader()
   reader.onload = () =>{
     img = reader.result
      console.log(img)
   }
   reader.readAsDataURL(file)
 
})
}



if(form){ 

form.addEventListener('submit' , (e) =>{
  e.preventDefault()
    const formData = {
    recipeName: recipeName.value,
    category: categorySelect.value,
    recipeImage: img,
    ingredients: ingredients.value,
    instructions: instructions.value
  }
 
  data.unshift(formData)
   localStorage.setItem('recipes', JSON.stringify(data))
     
    alert("Recipe added successfully!")
    form.reset()
  
})
}


export default data





