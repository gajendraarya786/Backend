const express = require('express');
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//making data because we are not use DB right now

let posts = [
    {
        username: "ApnaCollege",
        content: "I love coding",
    },
    {
        username: "gajendraarya",
        content: "I love playing guitar",
    },
    {
        username: "rahulkumar",
        content: "I love cooking",
    },
]; 

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.send("working");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 