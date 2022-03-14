const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/categories.php?_limit=5'
const section__category = document.querySelector('.section__category')
let category__arr = []

const getAllCategory = async () => {
  const req = await fetch(URL_CATEGORY)
  const resp = await req.json()
  
  category__arr = resp.categories
 
  category__arr.map(card => {
    let block = document.createElement('div')
    block.innerHTML = `
                   <a href='./Catalogs/catalogs.html'><div class="card" value=${card.strCategory}>
                      <img src=${card.strCategoryThumb} alt="Avatar" style="width:100%"/>
                      <div class="container">
                        <h4><b>${card.strCategory}</b></h4>
                        
                      </div>
                    </div></a>
    `
    section__category.append(block)
  })

  const card = document.querySelectorAll('.card')
  card.forEach(card=>{
     card.addEventListener('click',(e)=>{
      localStorage.setItem('categoryName', e.path[1].outerText)
        console.log(e.path[1].outerText);
     })
  })
  
}
getAllCategory()


