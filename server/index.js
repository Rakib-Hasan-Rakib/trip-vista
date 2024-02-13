const express = require("express");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz-lts");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.umvg5wn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const usersCollection = client.db("tourza").collection("users");
    const spotsCollection = client.db("tourza").collection("spots");
    const favSpotsCollection = client.db("tourza").collection("favSpot");
    const bookingsCollection = client.db("tourza").collection("bookings");
    const blogCollection = client.db("tourza").collection("blogs");

    // const indexKey = { name: 1 };
    // const indexOption = { name: "title" };
    // const indexResult = await blogCollection.createIndex(indexKey, indexOption);

    // Save user email and role in DB
    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };
      const result = await usersCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    app.get("/spots", async (req, res) => {
      const result = await spotsCollection.find().sort({ _id: -1 }).toArray();
      res.send(result);
    });
    app.get("/place/:category", async (req, res) => {
      const category = req.params.category;
      const result = await spotsCollection
        .find({ category: category })
        .sort({ _id: -1 })
        .toArray();
      res.send(result);
    });
    // get trending tourist spot
    app.get("/spots/trending", async (req, res) => {
      const query = { trending: true };
      const result = await spotsCollection.find(query).limit(3).toArray();
      res.send(result);
    });
    // get best selling tours
    app.get("/spots/bestSelling", async (req, res) => {
      const result = await spotsCollection
        .find()
        .sort({ booked: -1 })
        .limit(4)
        .toArray();
      res.send(result);
    });
    // get low price tours
    app.get("/spots/lowPrice", async (req, res) => {
      const result = await spotsCollection
        .find()
        .sort({ price: 1 })
        .limit(6)
        .toArray();
      res.send(result);
    });
    // get tour details by id
    app.get("/spot/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spotsCollection.findOne(query);
      res.send(result);
    });

    app.post("/favSpot/:email", async (req, res) => {
      const email = req.params.email;
      const spot = req.body;
      console.log(spot)
      const query ={spot,["email"]:spot["email"],}
      const existFavSpot = await favSpotsCollection.findOne({
        email: email,
        // place[_id]: placeId,
      });
      if (existFavSpot) {
        res.send({
          exist: "This place is already added to your favourite list",
        });
      } else {
        let likedPlace = { email, placeId };
        const result = await favSpotsCollection.insertOne(likedPlace);
        res.send(result);
      }
    });

    app.get("/favPlace/:email", async (req, res) => {
      const email = req.params.email;
      const result = await favSpotsCollection.find({ email: email }).toArray();
      res.send(result);
    });

    app.put("/like/:email", async (req, res) => {
      const email = req.params.email;
      const id = req.body;
      const user = await usersCollection.findOne({ email: email });
      // let likedPlace = []
      // if (user?.likedPlace) {
      //     user.likedPlace.push = id
      // } else {
      // likedPlace.push = id
      // }
      let likedObj = id;
      const query = { email: user.email };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...likedObj,
        },
      };
      const result = await usersCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    // order
    const tranId = new ObjectId().toString();
    app.post("/book", async (req, res) => {
      const userData = req.body;
      const tourDetails = await spotsCollection.findOne({
        _id: new ObjectId(userData?.productId),
      });
      const amount = tourDetails?.price * userData?.quantity;
      const data = {
        total_amount: amount,
        currency: "BDT",
        tran_id: tranId,
        success_url: `${process.env.BASE_URL}booking/success/${tranId}`,
        fail_url: `${process.env.BASE_URL}booking/fail/${tranId}`,
        cancel_url: "http://localhost:3030/cancel",
        ipn_url: "http://localhost:3030/ipn",
        shipping_method: "Courier",
        product_name: tourDetails?.name,
        product_category: "Electronic",
        product_profile: "general",
        cus_name: userData?.name,
        cus_email: userData?.email,
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: userData?.phone,
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,
        ship_country: "Bangladesh",
      };
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      sslcz.init(data).then((apiResponse) => {
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.send({ url: GatewayPageURL, transactionId: tranId });
        const finalBook = {
          tourDetails,
          isPaid: false,
          transactionId: tranId,
          booked_by: userData?.email,
        };
        const insertedBook = bookingsCollection.insertOne(finalBook);
      });

      app.post("/booking/success/:tranId", async (req, res) => {
        const id = req.params.tranId;
        const result = await bookingsCollection.updateOne(
          { transactionId: id },
          { $set: { isPaid: true } }
        );
        if (result.modifiedCount > 0) {
          res.redirect(`${process.env.CLIENT_URL}payment/success/${id}`);
        }
      });

      app.post("/booking/fail/:tranId", async (req, res) => {
        const id = req.params.tranId;
        const result = await bookingsCollection.deleteOne({
          transactionId: id,
        });
        if (result.deletedCount > 0) {
          res.redirect(
            `${process.env.CLIENT_URL}payment/fail/${id}`
          );
        }
      });
    });

    app.post("/blogs", async (req, res) => {
      const blogData = req.body;
      const result = await blogCollection.insertOne(blogData);
      res.send(result);
    });
    app.get("/blogs", async (req, res) => {
      const result = await blogCollection.find().sort({ _id: -1 }).toArray();
      res.send(result);
    });
    app.get("/blogs/:id", async (req, res) => {
      const id = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await blogCollection.findOne(query);
      res.send(result);
    });
    app.get("/blogSerch/:text", async (req, res) => {
      const searchText = req.params.text;
      const result = await blogCollection
        .find({ title: { $regex: searchText, $options: "i" } })
        .toArray();

      if (result.length < 1) {
        res.send({ message: "No data found" });
      } else {
        res.send(result);
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("tourza server is running");
});

app.listen(port, () => {
  console.log(`tourza server running on port ${port}`);
});
