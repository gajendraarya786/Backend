// this file will act as a server
const express = require("express");
const app = express();

let port = 8080; //8080
 
//.listen makes the web server which listens the upcoming requests from the client side
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

//always start the server fist in git bash by (node index.js) and then type localhost:port in chrome

//app.use takes the incoming request adn then gives response

app.use((req, res) => { 
    console.log("request recieved");
    // res.send is a method to send back response to the website 
    
    //If we pass data in response in form of object then it is stored in json format
     // if we pass in html tags then it is stored in form of html
   
    // Passing response as object
    //  res.send({
    //     name: "apple",
    //     color: "red"
    // });
    
    // Passing in form of html tags
    let code ="<h1>Fruits<ul><li>Apple</li><li>Orange</li><li>Banana</li></ul></h1>"
    res.send(code);

});