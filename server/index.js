const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000


// middleware 
app.use(cors())
app.use(express.json())




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.umvg5wn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();


        const usersCollection = client.db('tourza').collection('users')
        const spotsCollection = client.db('tourza').collection('spots')


        // Save user email and role in DB
        app.put('/users/:email', async (req, res) => {
            const email = req.params.email
            const user = req.body
            const query = { email: email }
            const options = { upsert: true }
            const updateDoc = {
                $set: user,
            }
            const result = await usersCollection.updateOne(query, updateDoc, options)
            console.log(result)
            res.send(result)
        })

        // get trending tourist spot
        app.get('/spots/trending', async (req, res) => {
            const query = { trending: true }
            const result = await spotsCollection.find(query).toArray()
            res.send(result)
        })
        // get best selling tours
        app.get('/spots/bestSelling', async (req, res) => {
            const result = await spotsCollection.find().sort({ booked: -1 }).limit(6).toArray()
            res.send(result)
        })
        // get low price tours 
        app.get('/spots/lowPrice', async (req, res) => {
            const result = await spotsCollection.find().sort({ price: 1 }).limit(6).toArray()
            res.send(result)
        })
        // get tour details by id
        app.get('/spot/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await spotsCollection.findOne(query)
            res.send(result)
        })








        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('tourza server is running')
})

app.listen(port, () => {
    console.log(`tourza server running on port ${port}`)
})