function add(){
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    let image = document.getElementById('image').files[0]['name']
    
    let id = 1

    if(localStorage.getItem('id') != null){
        id = (+localStorage.getItem('id') + 1)
    }
    
    let product = {
        id: id,
        name: name,
        price: price,
        image: image
    }

    localStorage.setItem('id', id)
    localStorage.setItem(`product_${id}`, JSON.stringify(product))

    location.href = 'admin.html'
}