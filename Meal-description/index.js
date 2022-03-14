const URL_MEAL_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const section__meal= document.querySelector('.section__meal')
let category__arr = []
const mealId = localStorage.getItem('mealId')

const getAllCategory = async () => {
  const req = await fetch(URL_MEAL_ID + mealId)
  const resp = await req.json()
  category__arr = resp.meals
  category__arr.map(item => {
    let block = document.createElement('div')
    block.innerHTML = `
    <div class='aboutMealDescription' >
      <div class='aboutMealDescriptionLeft'>
        <h2>${item.strMeal}</h2>
        <img src=${item.strMealThumb} alt={item.strMeal} />
      </div>
      <div class='aboutMealDescriptionIngridients'>
        <div class="ingridientTitle">
          <h2>Ingredients</h2>
        </div>
        <div class="ingridientElement">
          ${item.strIngredient1 ? `<div>${item.strMeasure1} ${item.strIngredient1}</div>` : ''}
          ${item.strIngredient2 ? `<div>${item.strMeasure2} ${item.strIngredient2}</div>` : ''}
          ${item.strIngredient3 ? `<div>${item.strMeasure3} ${item.strIngredient3}</div>` : ''}
          ${item.strIngredient4 ? `<div>${item.strMeasure4} ${item.strIngredient4}</div>` : ''}
          ${item.strIngredient5 ? `<div>${item.strMeasure5} ${item.strIngredient5}</div>` : ''}
          ${item.strIngredient6 ? `<div>${item.strMeasure6} ${item.strIngredient6}</div>` : ''}
          ${item.strIngredient7 ? `<div>${item.strMeasure7} ${item.strIngredient7}</div>` : ''}
          ${item.strIngredient8 ? `<div>${item.strMeasure8} ${item.strIngredient8}</div>` : ''}
          ${item.strIngredient9 ? `<div>${item.strMeasure9} ${item.strIngredient9}</div>` : ''}
          ${item.strIngredient10 ? `<div>${item.strMeasure10} ${item.strIngredient10}</div>` : ''}
          ${item.strIngredient11 ? `<div>${item.strMeasure11} ${item.strIngredient11}</div>` : ''}
          ${item.strIngredient12 ? `<div>${item.strMeasure12} ${item.strIngredient12}</div>` : ''}
          ${item.strIngredient13 ? `<div>${item.strMeasure13} ${item.strIngredient13}</div>` : ''}
          ${item.strIngredient14 ? `<div>${item.strMeasure14} ${item.strIngredient14}</div>` : ''}
          ${item.strIngredient15 ? `<div>${item.strMeasure15} ${item.strIngredient15}</div>` : ''}
          ${item.strIngredient16 ? `<div>${item.strMeasure16} ${item.strIngredient16}</div>` : ''}
          ${item.strIngredient17 ? `<div>${item.strMeasure17} ${item.strIngredient17}</div>` : ''}
          ${item.strIngredient18 ? `<div>${item.strMeasure18} ${item.strIngredient18}</div>` : ''}
          ${item.strIngredient19 ? `<div>${item.strMeasure19} ${item.strIngredient19}</div>` : ''}
          ${item.strIngredient20 ? `<div>${item.strMeasure20} ${item.strIngredient20}</div>` : ''}
        </div>
      </div>
      <div class='abouteMealDescr'>
        <h2>Method</h2>
        ${item.strInstructions}
      </div>
    </div>
    `
    section__meal.append(block)
  })

}
getAllCategory()