const express = require("express");
const app = express();

const port = 8080;

//we use this statement whenever we use POST request
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req,res) => {
    let {user, password} = req.query;
       res.send(`Standard GET response. Welcome: ${user}`);
    });

    app.post("/register", (req,res) => {
        let {username, password} = req.body;
      res.send(`Standard POST response. Welcome ${username}, your password is ${password}`);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});