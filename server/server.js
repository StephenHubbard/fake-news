
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require('express-session')
const authCtrl = require('./authController')

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;


app.use(express.json());

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database connected.")
    app.listen(SERVER_PORT, () => {
        console.log(`Server is listening on port ${SERVER_PORT}.`)
    });
})
.catch(err => console.log(err));