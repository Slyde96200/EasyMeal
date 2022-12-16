const cont = document.querySelector(".recipe-container"); /* I select in my HTML the class tag ".recipe-container" */


let id = window.location.search.split('?')[1];
console.log(id);
let meal = JSON.parse(localStorage.getItem(id));
console.log(meal);


function addMeal(meal) {                /* Function that constitutes the meal */
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = meal;
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {  

        if (meal[`strIngredient${i}`]) {         /* Ingredient insert */
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`

            );

        } else {
            break;


        }

    }
    console.log(ingredients);               /* Addition in HTML BELOW */
    cont.innerHTML = `          
<h2>${strMeal}</h2>
<div class="image">
    <img src="${strMealThumb}" alt="${strMeal}">


</div>
<div class="recipe-info">
    <div class="ingredients">
        <h3>Ingredients</h3>
        <ul> 
  
   ${ingredients.map(
        ing => `
       <li>${ing}</li>
       `

    ).join('')}
    
     </ul>
    </div>
    <div class="description">
        <h3>Instruction</h3>
        <p>${strInstructions}</p>
    </div>
</div>


`;



}
async function getIdapi(id) {      /*  FOR ID  */
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data;
}
window.onload = () => {
    getIdapi(id).then(res => {
        const meals = res.meals[0];
        addMeal(meals);
    })

}