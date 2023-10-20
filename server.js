import express from "express";
const app = express();

app.use(express.json());

app.get('/', function (request, response) {
    response.send(`
        <input type="text" id="username"/>
        <input type="text" id="password"/>
        <button id="submit">submit</button>

        <script>
        const submitBtn = document.getElementById('submit')
        submitBtn.onclick = function(){
            const username = document.getElementById('username')
            const password = document.getElementById('password')
            fetch('http://localhost:3000/user', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                })
            })
        }
        </script>
    `)
})

app.post('/register', function (request, response) {
    console.log('request body: ', request.body)
    console.log('request username: ', request.body.username)
    console.log('request password: ', request.body.password)
    //process data and save to the database...
    response.send('done creating user...')
})

app.post('/login', function (request, response) {
    const validUsername = "test";
    const validPassword = "pass";
    //if username === validUsername && password === validPassword
    //response.send('congratulations, you have logged in!')
    //else 
    //response.send('invalid username and password')
    response.send('')
})
app.listen(3000) 
﻿