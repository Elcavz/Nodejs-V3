const regBtn = document.getElementById('registerBtn');

regBtn.onclick = function() {
    const uName = document.getElementById('userName');
    const fName = document.getElementById('firstName');
    const lName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('pwd');
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: fName.value,
            lastname: lName.value,
            email: email.value,
            username: uName.value,
            password: password.value,
        })
    }).then(function(data) {
        return data.json()
    }).then(function(data) {
        const usernameExist = document.getElementById('usernameExist')
        const username = document.getElementById('username')
        if (data.success) {
            usernameExist.innerHTML = ""
            alert('Successfuly Registered')
        } else {
            username.classList.add('m-0');
            usernameExist.innerHTML = "Username already exists"
        }
    })
}