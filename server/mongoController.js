const {MongoClient} = require('mongodb');
const { MONGO_URI} = process.env;
const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = {
    listDatabases: async (req, res) => {
        await client.connect();
        // await client.db().admin().listDatabases()
        await client.db("test_mongo").collection("testCollection").findOne()
        // await client.db("test_mongo").collection("testCollection").findOne({ name: "stephen"})
        .then( result => {
            res.status(200).send(result)
        })
        .catch(err => console.log(err))

    }
}