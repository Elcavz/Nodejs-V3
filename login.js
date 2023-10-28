const loginBtn = document.getElementById('loginBtn');

loginBtn.onclick = function() {
    const loginUserName = document.getElementById('userName');
    const loginPassword = document.getElementById('pwd');
    var declar = document.getElementById('declaration')
    fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: loginUserName.value,
            password: loginPassword.value,
        })
    }).then(function(data) {
        return data.json()
    }).then(function(data) {
        console.log('data: ' , data)
        if (data.success) {
            declar.innerHTML = ""
            alert('Login Successfully!')
        } else {
            declar.innerHTML = "Incorrect Username or Password"
        }
    })
}
