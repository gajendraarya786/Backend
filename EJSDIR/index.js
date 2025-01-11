const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs"); 
// if we want to access views folder and if we have started our nodemon server from backend folder ie the parent folder then we have to require path and set path.
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req,res) => {
    // const followers = ["adam", "bob", "Aman"];
    // let {username} = req.params;
    // insta page with EJS
    let {username} = req.params;
   const instaData = require("./data (1).json");
   const data = instaData[username];
   res.render("instagram.ejs", {data});
});

app.get("/hello", (req,res) => {
    res.send("hello");
});

app.get("/rollDice", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) +1 ;
    res.render("rolldice.ejs", {diceVal});
});
app.get("/gajendra", (req,res) => {
    res.send("Hi my name is gajendra");
})

app.listen(port, () => {
    console.log(`app is listening on port: ${port}` )
});


  