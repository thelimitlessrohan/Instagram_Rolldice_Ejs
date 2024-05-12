const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

const port = 8080;

app.set("view engine","ejs");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get("/",(req,res) => {
  res.render("home.ejs");
});

app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random()*6 )+1;
    res.render("rolldice.ejs",{diceVal});
  });

  app.get("/ig/:username",(req,res) => {
  let {username} = req.params;
  const instaData = require('./data.json');
  //const followers = ["rohan","rahul","juie"];

  const data = instaData[username];
  if(data){
    res.render("instagram.ejs", {data});
  }else{
    res.render("error");
  }
  
});