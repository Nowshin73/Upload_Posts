const express = require('express');
const app = express();
const cors = require('cors');
//const bodyParser = require("body-parser");
require('dotenv').config()

const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zmagebg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect the client to the server	(optional starting in v4.7)
//await client.connect();
const userCollection = client.db("fantasygram").collection("users");
const postCollection = client.db("fantasygram").collection("posts");

app.post('/posts', async (req, res) => {
  const post = req.body;
  const result = await postCollection.insertOne(post);
  res.send(result);
});

app.get('/posts', async (req, res) => {
  const result = await postCollection.find().toArray();
  res.send(result);
});

app.post('/users', async (req, res) => {
  const user = req.body;
  const query = { email: user.email }
  const existingUser = await userCollection.findOne(query);

  if (existingUser) {
    return res.send({ message: 'user already exists' })
  }

  const result = await userCollection.insertOne(user);
  res.send(result);
});

app.get('/users', async (req, res) => {
  const result = await userCollection.find().toArray();
  res.send(result);
});
// delete user --admin
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await userCollection.deleteOne(query);
  res.send(result);
})

//users update
app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updatedUser = req.body;
  const result = await userCollection.replaceOne(filter, updatedUser);
  res.send(result);
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) }

  const options = {
    // Include only the `title` and `imdb` fields in the returned document
    projection: {
      _id: 1, email: 1, fullname: 1, username: 1, createdAt: 1, role: 1, 
    },
  };
  const result = await userCollection.findOne(query, options);
  res.send(result);
})

app.post("/", async (req, res) => {
  const { userId, mediaUrl, mediaType, caption } = req.body;

  const post = {
    userId,
    mediaUrl,
    mediaType,
    caption,
  };

  await postCollection.insertOne(post);
  res.json(post);
});


// Send a ping to confirm a successful connection
//await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");

//run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('fantasygram  is running')
})

app.listen(port, () => {
  console.log(`fantasygram is running on port ${port}`);
})