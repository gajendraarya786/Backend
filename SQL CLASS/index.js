const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express  = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//creating connection to databse 
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'guddu@2017'
});


let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  }
  

// Inserting new data 
// let q = "INSERT into user (id, username, email, password) values ?";
// // let user = ["2", "krrishikaTaneja", "krrishika53@gmail.com", "krishu@123"];

// let data =[];
// for (let i = 0; i < 100; i++) {
//     console.log(getRandomUser());
//    data.push(getRandomUser()); // 100 fake users
// } 

// try{
// connection.query(q, [data], (err, result) => {
//     if(err) {
//        console.log(err);
//     }
//     console.log(result);
//     // result is in form of array which has diff objects
// });
// } catch(err){
//     console.log(err); 
// }
// // closing the connection
// connection.end();

app.get("/", (req, res) => {
    let q = "select count(*) from user";
    try{
    connection.query(q, (err, result) => {
    if(err) {
       console.log(err);
    }
    let count = result[0]["count(*)"];
    res.render('home.ejs', {count});
    // result is in form of array which has diff objects
});
} catch(err){
    console.log(err); 
    res.send("some error in DB");
}
});

//Show user route
app.get("/user", (req, res) => {
    let q = "Select * from user";
    try{
        connection.query(q, (err, users) => {
        if(err) {
           console.log(err);
        }
        console.log(users);
        res.render("showusers.ejs", {users});
        // result is in form of array which has diff objects
    });
    } catch(err){
        console.log(err); 
        res.send("some error in DB");
    }
});

//Edit route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `Select * from user where id = '${id}'`;
    
    try{
        connection.query(q, (err, result) => {
        if(err) {
           console.log(err);
        } 
        let user = result[0];
        res.render("edit.ejs", {user});
        // result is in form of array which has diff objects
    });
    } catch(err){
        console.log(err); 
        res.send("some error in DB");
    }
});

//Update (DB) Route
app.patch("/user/:id", (req, res) => {

    let {id} = req.params;
    let {password : formPass, username: newUsername} = req.body;
    let q = `Select * from user where id = '${id}'`;
    
    try{
        connection.query(q, (err, result) => {
        if(err) {
           console.log(err);
        } 
        let user = result[0];
        if(formPass != user.password){
            res.send("Password does not match");
        }
        else{
            let q2 = `UPDATE user SET username = '${newUsername}' where id= '${id}'`
            connection.query(q2, (err, result) => {
                if(err) throw err;
                res.redirect("/user");
            })
        }
    
    });
    } catch(err){
        console.log(err); 
        res.send("some error in DB");
    }
});


app.listen("3001", () => {
    console.log("server is running on port 3001");
});
