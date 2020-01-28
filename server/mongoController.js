const {MongoClient} = require('mongodb');
const { MONGO_URI} = process.env;


module.exports = {
    listDatabases: async (req, res) => {
        const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        // await client.db().admin().listDatabases()
        await client.db().testCollection().find()
        .then( result => {
            res.status(200).send(result)
        })
        .catch(err => console.log(err))

    }
}