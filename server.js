const express=require('express')
const app= express();
const PORT= process.env.PORT || 3000


const articlesInfo= {
    "learn-react" : {
        comments: [],
    },
    "learn-node" : {
        comments: [],
    },
    "my-thoughts-on-learning-react" : {
        comments: [],
    },
};

//built in middleware
app.use(express.json({extended:false}));

app.post("/api/articles/:name/add-comments", (req,res) => {
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(200).send(articlesInfo[articleName]);
});

//route to check connection
//app.get('/', (req, res) => res.send("Assalamu alaikum!"));
//app.post("/", (req, res) => res.send(`Assalamu alaikum ${req.body.name}`));

//route parameter
//app.get('/greet/:name', (req, res) => res.send(`Assalamu alaikum ${req.params.name}!`));

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));