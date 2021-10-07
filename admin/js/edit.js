let hash = location.hash
let id = hash.slice(1, hash.length)

let oldProduct = JSON.parse(localStorage.getItem(`product_${id}`))

document.getElementById('name').value = oldProduct.name
document.getElementById('price').value = oldProduct.price
document.getElementById('img').setAttribute('src', `images/${oldProduct.image}`)    

function edit(){
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    let img = document.getElementById('img').getAttribute("src")

    let image = img.slice(7, img.length)
    if(document.getElementById('image').files.length > 0){
        image = document.getElementById('image').files[0]['name']
    }

    let car = {
        id: id,
        name:name,
        price: price,
        image: image
    }

    localStorage.setItem(`product_${id}`, JSON.stringify(car))
    location.href = 'admin.html'
    
}
