// fetch(`https://fakestoreapi.com/products?limit=${2}`)
// .then(( res) => res.json())
// .then((res) => console.log(res))
// .catch((err) => console.log(err))




let row = document.querySelector('.row')
const menu = document.querySelector('.menu')

// const getCategories = () => {
//     fetch('https://dummyjson.com/products/categories')
//     .then((res) => res.json())
//     .then((res) => {
//         res.forEach((item) => {
//             menu.innerHTML += `<li class="menu-item">${item}</li>`
//         })
//         let menuItems = document.querySelectorAll('.menu-item')

//         Array.from(menuItems).forEach((item) => {
//             item.addEventListener('click' , () => {
//                 row.innerHTML = ''
//                 getProducts(item.textContent)
//             })
//         })
//     })
// }

// getCategories()

// const getProducts = (cotegory) => {
//     fetch(`https://dummyjson.com/products${cotegory === 'all' ? '' : 'cotegory/' + cotegory}`)
//     .then((res) => res.json())
//     .then((res) => {
//         res.forEach((items) => {
//             row.innerHTML += `
//                        <div class = 'card'>
//                        <img class = 'card__img' src='${items.image}' alt = ''>
//                        <h2 class = 'card__title'>${items.title}</h2>
//                        <p class = 'card__subtitle'>${items.description}</p>
//                        <p class = 'card__category'> Категория: ${items.category}</p>
//                        <p class = ' card__price'>цена: ${items.price}</p>
//                        <p class = 'card__rating'>Рейтинг: ${items.rating}</p>
//                        </div>                
//             `
//         })
//     })
// }

// getProducts('all'




//products
const getProducts = (category) => {
    fetch(`https://dummyjson.com/products/category/smartphones/${category === 'all' ?  '' : 'category/' + category}`)
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
    fetch('https://dummyjson.com/products/categories')
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