const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  console.log("hi");
  //res.status(500).send("error occurred");
  //res.json({express:"learning express"});
  //res.send('hello world');
  res.send("hello world");
});
const userRoute = require('./route/user');
app.use('/user',userRoute);
app.listen(3000);