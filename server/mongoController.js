const {MongoClient} = require('mongodb');
const { MONGO_URI} = process.env;


module.exports = {
    listDatabases: async (req, res) => {
        const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        databasesList = await client.db().admin().listDatabases()
        .then( result => {
            res.status(200).send(result)
        })
        .catch(err => console.log(err))

        // console.log("Databases:");
        // databasesList.databases.forEach(database => console.log(` - ${database.name}`))
    }
}