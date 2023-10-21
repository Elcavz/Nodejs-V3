import express from "express";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/register', function (request, response) {
    response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Form</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
        <style>
            .bg-dark .d-flex .flex-column {
                background-color: rgb(64, 71, 85);
            }

            .bg-dark .flex-column .w-100 .w-50 {
                width: 60%!important;
            }

            .input-group-append button {
                border: none;
                background-color: transparent;
                cursor: pointer;
            }

            .fade-scale {
                transform: scale(0);
                opacity: 0;
                -webkit-transition: all .25s linear;
                -o-transition: all .25s linear;
                transition: all .25s linear;
            }

            .fade-scale.show {
                opacity: 1;
                transform: scale(1);
            }

            .inputtext {
                width: 30%;
            }
        </style>

    </head>
    <body>
    <section class="bg-dark d-flex flex-row w-100 vh-100 m-auto justify-content-center align-items-center text-white">
        <div class="d-flex flex-row w-50 justify-content-center">
            <div class="flex-column rounded-4 p-5 w-75 text-center">
                <div class="mb-4 mt-3">
                    <h1>Registration Form</h1>
                </div>
                <hr>
                <div class="w-100 d-flex flex-column align-items-center">
                    <div class="py-5 w-50 text-start">
                        <label for="first_name" class="fs-4">First Name:</label>&nbsp;
                        <input style="width: -webkit-fill-available;" autocomplete="off" id="fname" type="text" name="first_name" class="inputtext" required><br><br>

                        <label for="last_name" class="fs-4">Last Name:</label>&nbsp;
                        <input style="width: -webkit-fill-available;" autocomplete="off" id="lname" type="text" name="last_name" class="inputtext" required><br><br>

                        <label for="username" class="fs-4">Username:</label>&nbsp;
                        <input style="width: -webkit-fill-available;" id="uname" type="text" name="username" class="inputtext" required><br><br>
                        
                        <label for="email" class="fs-4">Email:</label>&nbsp;
                        <input style="width: -webkit-fill-available;" type="email" id="email" name="email" class="inputtext" required><br><br>
                        
                        <div class="input-group-append">
                            <label for="password" class="fs-4">Password:</label>&nbsp;
                            <input style="width: 354px;" type="password" id="password" aria-label="Password" aria-describedby="password-toggle" class="inputtext" required>
                            <button class="btn btn-white" type="button" id="password-toggle" onclick="togglePasswordVisibility()">
                                <i class="bi bi-eye text-white" id="eye-icon"></i>
                            </button>
                        </div><br>
                        
                        <div class="input-group-append">
                            <label for="confirm_password" class="fs-4">Confirm Password:</label>&nbsp;
                            <input style="width: 354px;" type="password" id="confirm_password" name="confirm_password" aria-label="Password" aria-describedby="password-toggle" class="inputtext" required>
                            <button class="btn btn-outline-secondary" type="button" id="cPassword-toggle" onclick="togglecPasswordVisibility()">
                                <i class="bi bi-eye text-white" id="eye-icon"></i>
                            </button><br>
                            <div class="d-flex flex-row justify-content-center">
                                <span id="confirm-password-span" class="text-danger fw-medium"></span><br><br>
                            </div>
                        </div>
                        
                        <input type="checkbox" id="terms" name="terms" required>&nbsp;
                        <label for="terms" class="fs-6">I agree to the Terms and Conditions</label><br><br>
                        
                        <div class="d-flex flex-nowrap justify-content-center">
                            <button id="submitBtn" type="button" class="btn btn-info w-75 fs-4" data-bs-target="#infoModal">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="fw-normal"><a href="/login">Already Have Account?</a></h4>
                </div>
            </div>
        </div>
    </section>
    
    <div class="modal fade-scale" id="infoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-secondary">
                <div class="modal-header border-bottom-0 p-4">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmation:</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <hr class="m-0">
                <div class="modal-body p-4">
                    <div class="flex-column">
                        <h3>Is your data is correct?</h2>
                        
                        <div class="py-4">
                            <div style="width: fit-content; display: flex; flex-direction: row;">
                                <h4>Full Name:</h4>&nbsp;<h4 id="dataName" class="fw-normal text-decoration-underline text-white"></h4>
                            </div>
                            <div style="width: fit-content; display: flex; flex-direction: row;">
                                <h4>Username:</h4>&nbsp;<h4 id="dataUname" class="fw-normal text-decoration-underline text-white"></h4>
                            </div>
                            <div style="width: fit-content; display: flex; flex-direction: row;">
                                <h4>Email:</h4>&nbsp;<h4 id="dataEmail" class="fw-normal text-decoration-underline text-white"></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button id="confirm" type="button" class="btn btn-info" data-bs-target="#successModal">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade-scale" id="successModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-secondary">
                <div class="modal-header border-bottom-0 p-4">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Successful!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <hr class="m-0">
                <div class="modal-body p-4">
                    <h1>Successfully Registered as <span id="regUname" class="text-decoration-underline text-white"></span></h1>
                </div>
                <div class="modal-footer border-top-0">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button id="confirm" type="button" class="btn btn-info">
                        <a class="text-decoration-none text-black" href="/login">LOGIN NOW</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <script>
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
        const eyeIcon2 = document.getElementById('eye-icon2');
    
        if (cPasswordInput.type === 'password') {
            cPasswordInput.type = 'text';
            eyeIcon2.classList.remove('bi-eye');
            eyeIcon2.classList.add('bi-eye-slash');
        } else {
            cPasswordInput.type = 'password';
            eyeIcon2.classList.remove('bi-eye-slash');
            eyeIcon2.classList.add('bi-eye');
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
                let confirmBtn = document.getElementById('confirm')
                $('#infoModal').modal('show');
                dataName.innerHTML = (fname + " " + lname)
                dataUname.innerHTML = (uname)
                dataEmail.innerHTML = (email)
    
                confirmBtn.addEventListener('click' , function(){
                    let uname = document.getElementById('uname').value
                    let password = document.getElementById('password').value
                    let regUname = document.getElementById('regUname')
                    fetch('http://localhost:3000/user', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "username": uname,
                            "password": password,
                        })
                    })
                    $('#infoModal').modal('hide');
                    $('#successModal').modal('show');
                    regUname.innerHTML = uname
                })
            } else {
                alert("Agree to the Terms & Conditions")
            }
        }
    })
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    </body>
    </html>
    
    `)
})


const sampleDataBase = [];

app.post('/user', function (request, response) { //eto post sa /user ibig sabihin gagawa ka ng new user
    //dito meron
    //gawa ka muna temporary dito

    console.log('request body: ', request.body)
    console.log('request username: ', request.body.username)
    console.log('request password: ', request.body.password)

    //so dito pagka magrerergister ka isasave natin yung data sa array
    sampleDataBase.push({
        username: request.body.username,
        password: request.body.password
    });
    //process data and save to the database...
    response.send('done creating user...')
}) 

app.get('/user', function (request, response) {
    //pagka app.get walang values tlga ang request at respose na body, pang post lang yun
    
    //process data and save to the database...
    response.send(JSON.stringify(sampleDataBase))
})


app.get('/login', function (request, response) {
    response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
        <style>
            .bg-dark .d-flex .flex-column {
                background-color: rgb(64, 71, 85);
            }
    
            .input-group-append button {
                border: none;
                background-color: transparent;
                cursor: pointer;
            }
    
            .fade-scale {
                transform: scale(0);
                opacity: 0;
                -webkit-transition: all .25s linear;
                -o-transition: all .25s linear;
                transition: all .25s linear;
            }
    
            .fade-scale.show {
                opacity: 1;
                transform: scale(1);
            }
    
            .inputtext {
                width: 30%;
            }
        </style>
    
    </head>
    <body>
    <section class="bg-dark d-flex flex-row w-100 vh-100 m-auto justify-content-center align-items-center text-white">
        <div class="d-flex flex-row w-50 justify-content-center">
            <div class="flex-column rounded-4 p-5 w-75 text-center">
                <div class="mb-4 mt-3">
                    <h1>LOGIN</h1>
                </div>
                <hr>
                <div class="pt-5">
                    <p id="loginFailed" class="text-danger fw-normal"></p>
                    <div>
                        <label for="username" class="fs-4">Username:</label>&nbsp;
                        <input autocomplete="off" id="uname" type="text" name="username" class="inputtext" required>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br>
                    </div>
                    
                    <div class="input-group-append">
                        <label for="password" class="fs-4">Password:</label>&nbsp;
                        <input type="password" id="password" aria-label="Password" aria-describedby="password-toggle" class="inputtext" required>
                        <button class="btn btn-outline-secondary" type="button" id="password-toggle" onclick="togglePasswordVisibility()">
                            <i class="bi bi-eye text-white" id="eye-icon"></i>
                        </button>
                    </div><br>
                    
                    <div class="mt-5">
                        <button id="loginBtn" type="button" class="btn btn-info w-25 fs-4" data-bs-target="#successLoginModal">
                            Login
                        </button>
                    </div>
                </div>
                <div class="pt-5">
                    <h4 class="fw-normal">Don't have an account? <span><a href="/register">Register</a></span></h4>
                </div>
            </div>
        </div>
    </section>
    
    <div class="modal fade-scale" id="successLoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-secondary">
                <div class="modal-header border-bottom-0 p-4">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Successful!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <hr class="m-0">
                <div class="modal-body p-4">
                    <h1>Successfully Login!</h1>
                </div>
                <div class="modal-footer border-top-0">
                    <button id="confirm" type="button" class="btn btn-info" data-bs-dismiss="modal">Confirm</button>
                </div>
            </div>
        </div>
    </div>
    
    <script>
    const loginBtn = document.getElementById('loginBtn')

    loginBtn.onclick = function() {
        fetch('http://localhost:3000/user').then(function(credential) {
            return credential.json()
        }).then(function(credentials) {
            let uName = document.getElementById('uname').value
            let pass = document.getElementById('password').value
            let loginFailed = document.getElementById('loginFailed')
            let matchFound = false;

            for (let i = 0; i < credentials.length; i++) {
                if (uName === credentials[i].username && pass === credentials[i].password) {
                    matchFound = true;
                    break; // Exit the loop once a match is found
                }
            }

            if (matchFound) {
                $('#successLoginModal').modal('show')
                loginFailed.innerHTML = ""
            } else {
                loginFailed.innerHTML = "Wrong Username or Password"
            }
        })
    }

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
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    </body>
    </html>
    `)
})
app.listen(3000) 
﻿