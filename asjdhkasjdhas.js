//синтаксис fetch
// let promise = fetch(url, [options])

// fetch('')


//пример запроса
// fetch('https://jsonplaceholder.typicode.com/users')
//     // .then((response) => console.log(response))
//     .then ((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))




//1 проект
// let row = document.querySelector('.row')

// fetch('https://api.escuelajs.co/api/v1/users')
//     .then((response) => response.json())
//     .then((json) => json.forEach((item) => {
//         // console.log(item);
//         let image = document.createElement('img')
//         image.setAttribute('src', item.avatar)
//         image.setAttribute('alt', item.name)

//         image.style.cssText = 'width: 30%; height: 400px'
//         row.append(image)
//     }))
//     .catch((err) => console.log(err))








//2проект
let menu = document.querySelector('.menu')
let row = document.querySelector('.row')


//products
const getProducts = (category) => {
    fetch(`https://fakestoreapi.com/products/${category === 'all' ?  '' : 'category/' + category}`)
    .then((res) => res.json())
    .then((res) => {
       res.forEach((item) => {
           row.innerHTML += `
           <div class = 'card'>
           <img class = 'card__img' src='${item.image}' alt = ''>
           <h2 class = 'card__title'>${item.title}</h2>
           <p class = 'card__subtitle'>${item.description}</p>
           <p class = 'card__category'> Категория: ${item.category}</p>
           <p class = ' card__price'>цена: ${item.price}</p>
           <p class = 'card__rating'>Рейтинг: ${item.rating.rate}</p>
           </div>
           `
       })
    })
}
getProducts('all')


//categories
const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
     .then((res) => res.json())
     .then((res) => {
        res.forEach((item) => {
            menu.innerHTML += `<li class = 'menu-item'>${item}</li>`
     })


     let menuItems = document.querySelectorAll('.menu-item')

     Array.from(menuItems).forEach((item) => {
       item.addEventListener('click', () => {
             row.innerHTML = ''
             getProducts(item.textContent)
       })
     })
     }  

)}

getCategories()