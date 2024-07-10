import { MongoClient, ServerApiVersion } from "mongodb"
require("dotenv").config()

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const dbname = "test"
const collection_name = "services"

const servicesCollection = client.db(dbname).collection(collection_name)

const connectToDatabase = async () => {
    try {
        await client.connect()
        console.log('Connected to the ${dbname} database')
    } catch (err) {
        console.error('Error connecting to the database: ${err}')
    }
}

const sampleService = {
    id: 1,
    name: "Full Body OG Bronze",
    description: "Original solution, 4 options to choose from depending on desired depth.",
    processingTime: "8 hours",
    price: 60,
}


const main = async () => {
    try {
        await connectToDatabase()
        let result = await servicesCollection.intertOne(sampleService)
        console.log('Inserted document: ${result.insertedId}')
    } catch (err) {
        console.error('Error inserting document: ${err}')
    } finally {
        await client.close()
    }
}

main()