const catcontainer = document.querySelector(" .card-container");/* SELECTED IN MY HTML THE DIV ".CARD-CONTAINER" */
const headingCat = document.querySelector(".heading");/* SELECTED IN MY HTML THE DIV ".heading" */

let Mealname = window.location.search.slice(1).split("&")[0].split("=")[1]; /* FOR SPLIT A STRING AND RETURN IN ARRAY */
let Mealharf = window.location.search.slice(1).split("&")[1].split("=")[1];





console.log(Mealname);
console.log(Mealharf);
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${Mealharf}=${Mealname}`;



async function getCatApi(url) {  /* GET THE CATEGORY */
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function showCategory() {     /* Everything is said in the name of the function ahah */
    catcontainer.innerHTML = "";
    getCatApi(url).then(res => {

        headingCat.innerHTML = `${Mealname} category meals`;
        const catmeal = res.meals;

        Meals.showReasult(catmeal, catcontainer);


    }).catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", showCategory);