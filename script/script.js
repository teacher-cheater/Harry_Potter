import {data} from './person.js';

//получение введенных данных через input
const inputEnter = document.querySelector('input')

const mainContainer = document.querySelector('.main__container')

// переменная для cart
const carts = document.querySelector('.cart')

//переменная для выбора школы
const school = document.querySelector('.header__school')

//функция для создания карты
function searchCart (images,names, actors, genderes, houses, wands, alives){
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

   mainContainer.append(cartContainer)
}

// name, actor, gender, house, wand, alive

data.forEach((item)=>(searchCart(item.image, item.name, item.actor, item.gender, item.house, item.wand, item.alive)))

//вывод в консоль введенных значений в input
function searchPerson(event){
   let inputSearch = document.querySelector('input');
   let selectSearch = document.querySelector('select');

   let searchData = data.filter((carts)=> carts.house.includes((selectSearch.value)) && carts.name.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))

   //создали переменную, в которую вложили отфильтрованные карты. (includes ищет по введенным данным)
   mainContainer.innerHTML = ''; //очистили поле. показ нов карт
   return searchData.forEach((item)=> searchCart(item.image, item.name, item.actor, item.gender, item.house, item.wand, item.alive))//вернули новые карты, которые перебрали с помощью forEach, присвоив через аргумент значения из объекта data

}
inputEnter.addEventListener('input', (event) => searchPerson(event)) //повесли прослушку на input
school.addEventListener('change', (event)=> searchPerson(event))
