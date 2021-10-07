let card = document.getElementById('card');
let tot = document.getElementById('total')
let items = document.getElementsByClassName('items')[0]
let total = 0;
function showCard() {
    card.classList.toggle('show-card');
}

let id = localStorage.getItem('id')

for (let i = 0; i <= id; i++) {

    let car = JSON.parse(localStorage.getItem(`product_${i+1}`))

    if(car != null){

        items.innerHTML += 
        `
            <div class="item">
                <div class="item-img">
                    <img src="images/${car.image}" alt="img">
                </div>
                <div class="item-info">
                    <h3>${car.name}</h3>
                    <hr>
                </div>
                <a href="#" class="add" onclick="addStorage(${car.id}, this)">Add to card <i class="fa fa-shopping-cart"></i></a>
                <p class="item-price"><span>${car.price}</span>$</p>
            </div>
        `
    }
}


function addStorage(id, item) {
    let name = item.previousElementSibling.firstElementChild.innerText;
    let price = item.nextElementSibling.firstElementChild.innerText;
    let img = item.previousElementSibling.previousElementSibling.firstElementChild.getAttribute("src")

    let count = 1

    if (localStorage.getItem(`car_${id}`) != null) {
        let newCar = JSON.parse(localStorage.getItem(`car_${id}`))
        count = (+newCar.count + 1)
    }

    newPrice = count * price

    let car = {
        id: id,
        name: name,
        price: newPrice,
        img: img,
        count: count
    }

    localStorage.setItem(`car_${id}`, JSON.stringify(car))
    cardRefresh()
}

function cardRefresh() {
    card.innerHTML = ''
    total = 0;

    for (let i = 1; i <= localStorage.length; i++) {

        let car = JSON.parse(localStorage.getItem(`car_${i}`))

        if (car != null) {

            total += (+car.price)
            tot.innerHTML = total

            card.innerHTML += `
                <div class="card-item">
                <div class="card-item-img">
                    <img src="${car.img}" alt="img">
                    </div>
                    <p>${car.name} <sup>${car.price}</sup></p>
                    <span  id ="carDelete" onclick = "deleteProduct(${car.id}, this)"><i class = "fa fa-times"></i></span>
                    <span id = "carCount">${car.count}X</span>
                    <span class = "changeCount">
                    <i class= "fa fa-chevron-up" data-name="up" onclick= "changeCount(this,${car.id})"></i>
                    <i class= "fa fa-chevron-down" data-name="down" onclick= "changeCount(this,${car.id})"></i>
                    </span>
                </div>  
            `
        }
    }
    if (document.getElementsByClassName('card-item').length == 0) {
        tot.innerHTML = ''

    }

}


function changeCount(item, id) {
    let newCar = JSON.parse(localStorage.getItem(`car_${id}`))
    let adminCar = JSON.parse(localStorage.getItem(`product_${id}`))

    let count = newCar.count
    if (item.dataset.name == 'up') {
        count++
    } else {
        count--
        if (count === 0) {
            localStorage.removeItem(`car_${id}`)
            cardRefresh()
            return
        }
    }
    newPrice = count * adminCar.price
    let car = {
        id: id,
        name: newCar.name,
        price: newPrice,
        img: newCar.img,
        count: count
    }
    localStorage.setItem(`car_${id}`, JSON.stringify(car))
    cardRefresh()
}

function deleteProduct(id, item) {

    let car = JSON.parse(localStorage.getItem(`car_${id}`))


    if (car != null) {
        total -= (+car.price)
        tot.innerHTML = total
    }


    localStorage.removeItem(`car_${id}`)
    item.parentElement.remove()


    if (document.getElementsByClassName('card-item').length == 0) {
        localStorage.clear()

    }

}

cardRefresh()