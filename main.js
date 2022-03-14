const formSearch = document.querySelector('.button-search')

console.log(formSearch);
formSearch.addEventListener('click',(e)=>{
 e.preventDefault()
 const formInput = document.querySelector('.search-input').value;
 localStorage.setItem('searchName',formInput)
 console.log(formInput);
 if(formInput !== ''){
    window.location.href = "../Search-render/search.html";
     
 }
}
)

