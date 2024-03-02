const  loadData =  async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log();
    const navContainer = document.getElementById('nav-button');
    data.data.news_category.forEach((item) => {
        // console.log(item)

        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="loadNews('${item.category_id}')">${item.category_name}</button>`
        navContainer.appendChild(div);
       
    });
}

const loadNews = async(catId) =>{
const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
const data = await response.json();
const newsContainer = document.getElementById('main-news-container');
newsContainer.innerHTML = '';
data.data.forEach((item) =>{
    console.log(item)
const div = document.createElement('div');
div.innerHTML = `
<div id="main-button" class="card  bg-base-100 shadow-2xl">
<figure><img src="${item.image_url}" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">${item.title}</h2>
  <p>${item.rating.badge}</p>
  <p>${item.rating.number}</p>
  <p>${item.details.slice(0,200)}</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>`
newsContainer.appendChild(div);
});
}

const handelSearch = () =>{
    const value = document.getElementById('search-box').value;
    if(value){
        loadNews(value);
    }
    else{
        alert('invaild value');
    }
}

loadNews('01');
loadData();
