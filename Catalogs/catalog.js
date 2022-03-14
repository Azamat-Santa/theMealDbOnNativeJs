const URL_CATEGORY_NAME = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const section__category = document.querySelector('.section__category')
const categortyName = localStorage.getItem('categoryName')
console.log(categortyName);
let category__arr = []




const getAllCategory = async (categortyName) => {
  const req = await fetch(URL_CATEGORY_NAME + categortyName)
  const resp = await req.json()
  console.log(resp);
  category__arr = resp.meals
 
  category__arr.map(card => {
    let block = document.createElement('div')
    block.innerHTML = `
                    <a href='../Meal-description/meal-description.html'>
                    <div class="card" data=${card.idMeal}>
                      <img src=${card.strMealThumb} alt="Avatar" style="width:100%"/>
                      <div class="container">
                        <h4><b>${card.strMeal}</b></h4>
                        
                      </div>
                    </div></a>
    `
    section__category.append(block)
  })

  const card = document.querySelectorAll('.card')
  card.forEach(card=>{
     card.addEventListener('click',(e)=>{
      localStorage.setItem('mealId',e.path[1].attributes.data.value)
      
      console.log(e.path[1].outerText);
     })
  })
  
}
getAllCategory(categortyName)


