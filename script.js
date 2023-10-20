let cPassword = document.getElementById('confirm_password')
let btn = document.getElementById('submitBtn')
let cBox = document.getElementById('terms')

cPassword.addEventListener('input' , function() {
    let password = document.getElementById('password').value
    let cPassword = document.getElementById('confirm_password').value
    let cPasswordSpan = document.getElementById('confirm-password-span')

    if (password === cPassword) {
        cPasswordSpan.innerHTML = ""
    } else {
        cPasswordSpan.innerHTML = "Password Do Not Match"
    }
})

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('bi-eye');
        eyeIcon.classList.add('bi-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('bi-eye-slash');
        eyeIcon.classList.add('bi-eye');
    }
}

function togglecPasswordVisibility() {
    const cPasswordInput = document.getElementById('confirm_password');
    const eyeIcon = document.getElementById('eye-icon');

    if (cPasswordInput.type === 'password') {
        cPasswordInput.type = 'text';
        eyeIcon.classList.remove('bi-eye');
        eyeIcon.classList.add('bi-eye-slash');
    } else {
        cPasswordInput.type = 'password';
        eyeIcon.classList.remove('bi-eye-slash');
        eyeIcon.classList.add('bi-eye');
    }
}

btn.addEventListener('click' , function() {
    let cBox = document.getElementById('terms')
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let uname = document.getElementById('uname').value
    let email = document.getElementById('email').value
    let dataName = document.getElementById('dataName')
    let dataUname = document.getElementById('dataUname')
    let dataEmail = document.getElementById('dataEmail')
    let cPassword = document.getElementById('confirm_password')
    let cPasswordSpan = document.getElementById('confirm-password-span')

    if (cPassword.value == "") {
        cPasswordSpan.innerHTML = "The password is blank"
    } else {
        if (cBox.checked == true && cPasswordSpan.innerHTML !== "Password Do Not Match" && cPassword.value !== "" ) {
            $('#infoModal').modal('show');
            dataName.innerHTML = (fname + " " + lname)
            dataUname.innerHTML = (uname)
            dataEmail.innerHTML = (email)
        } else {
            alert("try")
        }
    }
})