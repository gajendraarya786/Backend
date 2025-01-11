const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});

// we use app.get method to define various routes

app.get("/", (req, res) => {
    res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/banana", (req, res) => {
    res.send("you contacted banana path");
});

// if the user requests for a path/route that is not defined in app.get then we can use * 

// app.get("*", (req, res) => {
//     res.send("This page does not exists");
// });

// we cant alot every single path for each request so we use path variables

app.get("/:username/:id", (req, res) => {
    let { username, id }= req.params;
    let htmlStr = `<h1>welcome to the page @${username} </h1>`;
    res.send(htmlStr);
});

// query strings for search requests

app.get("/search", (req, res) => {
   let {q} = req.query;
   if(!q){
    res.send(`<h1>Nothing searched</h1>`);
   }
    res.send(`<h1>search results for query: ${q}</h1>`);
});


