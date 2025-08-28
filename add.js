
const categorySelect = document.getElementById('category-select')

const recipeName = document.getElementById('recipe-name')
const form = document.getElementById('add-recipe-form')
const recipeImage = document.getElementById('recipe-image')
const ingredients = document.getElementById('ingredients')
const instructions = document.getElementById('instructions')
let img = ""

const data = []
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
 
  data.push(formData)
   localStorage.setItem('recipes', JSON.stringify(data))
   form.reset()
})
}

// categorySelect.addEventListener('change',(e) =>{
//   console.log(e.target.value)
// })
export default data





