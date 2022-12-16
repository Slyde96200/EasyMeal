

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const randomMeal = document.getElementById("randomMeal");
const randomWMeal = document.getElementById("randomWMeal");
const results2 = document.getElementById("results2");
const results3 = document.getElementById("results3");
const results4 = document.getElementById("results4");
const results5 = document.getElementById("results5");
const results6 = document.getElementById("results6");
const results7 = document.getElementById("results7");

let urlSearch = "";
//GET
const fetchSearch = async (url) => {
  meals = await fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
    .then((res) => res.json())
    .then((res) => res.meals);
};

const searchDisplay = async () => {
  await fetchSearch(urlSearch);

  if (meals == null) {
    results.innerHTML = `<span class="noResult">No results</span>`;
  }

  results.innerHTML = meals
    .map(
      (meal) =>
        `
      <div class="searchContainer">
        <h2>${meal.strMeal}</h2>
        <div class="infos">
          <div>origin : ${meal.strArea}</div>
          <div>category : ${meal.strCategory}</div>
        </div>
        <img src='${meal.strMealThumb}' /></br>
        <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
      </div>
      `
    )
    .join("");
};

searchInput.addEventListener("input", (e) => {
  urlSearch = `search.php?s=${e.target.value}`;
  searchDisplay();
});

// GET RANDOM FIRST MEAL OF WEEK

console.log(fetchSearch("random.php"));

const randomMealWDisplay = async () => {
  await fetchSearch("random.php");
  /* alert("Mangez-bougez") */

  results.innerHTML = meals.map(
    (meal) =>
      `
          <div class="randomContainerW">
            <p>Today</p>
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strIngredients}</p>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
  );
};

randomWMeal.addEventListener("click", randomMealWDisplay);
randomMealWDisplay();

// GET RANDOM x2 MEAL

console.log(fetchSearch("random.php"));

const randomMealWDisplay2 = async () => {
  await fetchSearch("random.php");

  results2.innerHTML = meals.map(
    (meal) =>
      `
          <div class="randomContainerW2">
          <p>Tomorrow</p> 
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strIngredients}</p>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
  );
};

randomWMeal.addEventListener("click", randomMealWDisplay2);
randomMealWDisplay2();

// GET RANDOM x3 MEAL

console.log(fetchSearch("random.php"));
const randomMealWDisplay3 = async () => {
  await fetchSearch("random.php");

  results3.innerHTML = meals.map(
    (meal) =>
      `
          <div class="randomContainerW3">
          <p>In three days</p> 
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strIngredients}</p>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
  );
};

randomWMeal.addEventListener("click", randomMealWDisplay3);
randomMealWDisplay3();

// GET RANDOM x4 MEAL

console.log(fetchSearch("random.php"));
const randomMealWDisplay4 = async () => {
  await fetchSearch("random.php");

  results4.innerHTML = meals.map(
    (meal) =>
      `
          <div class="randomContainerW4">
          <p>In four days</p> 
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strIngredients}</p>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
  );
};

randomWMeal.addEventListener("click", randomMealWDisplay4);
randomMealWDisplay4();

// GET RANDOM x5 MEAL

console.log(fetchSearch("random.php"));
const randomMealWDisplay5 = async () => {
  await fetchSearch("random.php");

  results5.innerHTML = meals.map(
    (meal) =>
      `
          <div class="randomContainerW5">
          <p>In five days</p> 
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strIngredients}</p>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
  );
};

randomWMeal.addEventListener("click", randomMealWDisplay5);
randomMealWDisplay5();

// GET RANDOM x6 MEAL

console.log(fetchSearch("random.php"));
const randomMealWDisplay6 = async () => {
  await fetchSearch("random.php");

  results6.innerHTML = meals.map(
    (meal) =>
      `
          <div class="randomContainerW6">
          <p>In six days</p> 
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strIngredients}</p>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
  );
};

randomWMeal.addEventListener("click", randomMealWDisplay6);
randomMealWDisplay6();

// GET RANDOM x7 MEAL

console.log(fetch("random.php"));
const randomMealWDisplay7 = async () => {
  await fetchSearch("random.php");
 



  results7.innerHTML = meals.map(
    (meal) =>
      `w
          <div class="randomContainerW7">
          <p>In seven days</p> 
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>catégory : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strIngredients}</p>
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
  );
};

randomWMeal.addEventListener("click", randomMealWDisplay7);
randomMealWDisplay7();

// GET RANDOM MEAL
const randomMealDisplay = async () => {
  await fetchSearch("random.php");
  

  results.innerHTML = meals.map(
    (meal) =>
      `
        <div class="randomContainer">
        <p>Today</p> 
          <h2>${meal.strMeal}</h2>
          <div class="infos">
            <div>origin : ${meal.strArea}</div>
            <div>catégory : ${meal.strCategory}</div>
          </div>
          <img src='${meal.strMealThumb}' />
          <p>${meal.strIngredients}</p>
          <p>${meal.strInstructions}</p>
          <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
      `
  );
  results2.innerHTML = ``;
  results3.innerHTML = ``;
  results4.innerHTML = ``;
  results5.innerHTML = ``;
  results6.innerHTML = ``;
  results7.innerHTML = ``;
};

randomMeal.addEventListener("click", randomMealDisplay);
randomMealDisplay();

