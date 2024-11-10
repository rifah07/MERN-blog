const express=require('express')
const app= express();
const PORT= process.env.PORT || 3000

app.use(express.json({extended:false}));

app.get('/', (req, res) => res.send("Assalamu alaikum!"));
app.post("/", (req, res) => res.send(`Assalamu alaikum ${req.body.name}`));

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));