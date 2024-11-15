const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 3000;

//built in middleware
app.use(express.json({ extended: false }));

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog");
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "ERror connecting to Database", error });
  }
}

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog");
    const articlesInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articlesInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "ERror connecting to Database", error });
  }
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

//route to check connection
//app.get('/', (req, res) => res.send("Assalamu alaikum!"));
//app.post("/", (req, res) => res.send(`Assalamu alaikum ${req.body.name}`));

//route parameter
//app.get('/greet/:name', (req, res) => res.send(`Assalamu alaikum ${req.params.name}!`));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));