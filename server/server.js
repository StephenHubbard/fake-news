
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require('express-session')
const authCtrl = require('./authController')
const mongoCtrl = require('./mongoController')
const {MongoClient} = require('mongodb');

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, MONGO_URI} = process.env;

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect();


app.use(express.json());

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

// END POINTS 
app.get('/api/getMongo', mongoCtrl.listDatabases);
app.post('/api/post', mongoCtrl.newPost);

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
		console.log("PostgreSQL database connected.")
		connectMongo().catch(console.error);
    app.listen(SERVER_PORT, () => {
        console.log(`Server is listening on port ${SERVER_PORT}.`)
    });
})
.catch(err => console.log(err));

async function connectMongo(){
    const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        // Connect to the MongoDB cluster
				await client.connect();
        console.log("MongoDB database connected")
        // await  mongoCtrl.listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

// async function listDatabases(client){
// 	databasesList = await client.db().admin().listDatabases();

// 	console.log("Databases:");
// 	databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };