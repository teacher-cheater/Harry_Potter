//import { data } from './person.js';

//получение введенных данных через input
const inputEnter = document.querySelector('input')

const createBlockContent = document.createElement('div')

// переменная для cart
const carts = document.querySelector('.cart')

//переменная для контента, в котором находятся карточки
const mainContent = document.querySelector('.main__content')

//переменная, в которой находится .main__content(ограничительный div)
const mainContainer = document.querySelector('.main__container')

//переменная для выбора школы
const school = document.querySelector('.header__school')

// name, actor, gender, house, wand, alive
async function showPerson() {
   let response = await fetch('http://hp-api.herokuapp.com/api/characters', {
      method: 'GET',
   });
   let personAll = await response.json();

   //data.forEach((item) => (searchCart(item.image, item.name, item.actor, item.gender, item.house, item.wand, item.alive))) //для сервера

   personAll.forEach((item) => (searchCart(item.image, item.name, item.actor, item.gender, item.house, item.wand, item.alive)))

   inputEnter.addEventListener('input', () => searchPerson(personAll)) //повесли прослушку на input
   school.addEventListener('change', () => searchPerson(personAll))
}

showPerson()
//вывод в консоль введенных значений в input
function searchPerson(personAll) {
   let inputSearch = document.querySelector('input');
   let selectSearch = document.querySelector('select');

   //let searchData = data.filter((carts) => carts.house.includes((selectSearch.value)) && carts.name.toLowerCase().includes(inputSearch.value.trim().toLowerCase())) //для сервера

   let searchData = personAll.filter((carts) => carts.house.includes((selectSearch.value)) && carts.name.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))

   //создали переменную, в которую вложили отфильтрованные карты. (includes ищет по введенным данным)
   mainContent.innerHTML = ''; //очистили поле. показ нов карт

   searchData.forEach((item) => searchCart(item.image, item.name, item.actor, item.gender, item.house, item.wand, item.alive))//вернули новые карты, которые перебрали с помощью forEach, присвоив через аргумент значения из объекта data
}


//функция для создания карты
function searchCart(images, names, actors, genderes, houses, wands, alives) {
   //переменная для блока с картами
   const cartContainer = document.createElement('div')
   cartContainer.className = 'carts'

   //переменная для всех карт
   const cart = document.createElement('div')
   cart.className = 'cart'
   cartContainer.append(cart)

   //переменная с картинками карт
   const imageCart = document.createElement('div')
   imageCart.className = 'cart__image'
   let imgCart = new Image(334, 192);
   imgCart.src = images;
   imgCart.className = 'cart__picture'
   cart.append(imageCart)
   imageCart.append(imgCart)

   //контент для ввода данных карты(имя, школа, гендерность...)
   const cartContent = document.createElement('div')
   cartContent.className = 'cart__content'
   cart.append(cartContent)

   //создание titl'oв
   const cartName = document.createElement('h2')
   cartName.classList = 'cart__title';
   cartName.textContent = names
   cartContent.append(cartName)

   //создание параграфов (имя, школа...)
   const cartList = document.createElement('div')
   cartList.classList = 'cart__list';
   cartList.insertAdjacentHTML('afterbegin', `<p>Actor: ${actors}</p><p>Gender: ${genderes}</p><p>House: ${houses}</p><p>Wand core: ${wands.core}</p><p>Alive: ${alives}</p>`)

   cartContent.append(cartName)
   cartContent.append(cartList)

   createBlockContent.append(cartContainer)
   mainContent.append(cartContainer)
   mainContent.append(createBlockContent)
}