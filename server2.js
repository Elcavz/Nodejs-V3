import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Elcavz",
    password: "hahaha24",
    database: "first_database"
});

app.post('/register', function (request, response) {
    const firstNameFromFrontEnd = request.body.firstname;
    const lastNameFromFrontEnd = request.body.lastname;
    const emailFromFrontEnd = request.body.email;
    const usernameFromFrontEnd = request.body.username;
    const passwordFromFrontEnd = request.body.password;
    
    bcrypt.hash(passwordFromFrontEnd , 10 , function(err , hashedPassword) {
        if (err) throw err;
        const exisitingUsername = `SELECT * FROM first_database.users WHERE username = "${usernameFromFrontEnd}"`;
        con.query(exisitingUsername , function (err, usernameValue) {
            if (err) throw err;
            console.log(usernameValue)
            if (usernameValue == "") {
                const myQuery = `INSERT INTO first_database.users (FirstName , LastName , Email , Username , Password) VALUES ("${firstNameFromFrontEnd}" , "${lastNameFromFrontEnd}" , "${emailFromFrontEnd}" , "${usernameFromFrontEnd}" , "${hashedPassword}")`
                con.query(myQuery, function (err, result) {
                    if (err) throw err;
                    console.log('Result from database' , result);
                    response.send({"success": true})
                });
            } else {
                response.send({"success": false})
            }
        });
    });
});

app.post('/login', function (request, response) {
    const usernameFromFrontEnd = request.body.username;

    const myQuery = `SELECT * FROM first_database.users WHERE username = "${usernameFromFrontEnd}"`;

    con.query(myQuery , function (err, result) {
        if (err) throw err;
        if (result && result[0] && result[0].id) {
            const passwordFromFrontEnd = request.body.password;
            const matched = bcrypt.compareSync(passwordFromFrontEnd, result[0].Password);
            response.send({"success": matched});
        } else {
            response.send({"success": false});
        }
    });
});



con.connect(function(err) {
    if (err) throw err;
    console.log('MYSQL DB CONNECTION SUCCESS!')
    app.listen(3000)
    console.log('App is now running on port' , 3000)
});