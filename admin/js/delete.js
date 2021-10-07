function deleteProduct(id, item){
    localStorage.removeItem(`product_${id}`)
    item.parentElement.parentElement.parentElement.remove()

    let tr = document.getElementsByTagName('tr')

    if(tr.length == 1){
        localStorage.removeItem('id')
    }
}