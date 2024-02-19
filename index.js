const PORT = 3000;
const express = require('express');
const posts = require('./model/posts')

const app = express();

app.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()));
})

app.post("/new", express.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title, description);


    res.send("Post adicionado");
})

app.delete("/del", express.json(), (req, res) => {
    const id = req.query.id
    posts.deletePost(id);

    res.send("Post apagado");
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}!`)
})