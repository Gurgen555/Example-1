function login() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let errorMsg = document.getElementsByClassName('error')[0]

    if (username == 'admin' && password == '1234') {
        localStorage.setItem('admin', 'loged')
        location.href = 'admin.html'
    } else {
        errorMsg.innerHTML = 'Wrong uresname or password ! ! !'
    }

}