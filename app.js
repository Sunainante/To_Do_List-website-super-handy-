const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date);

// console.log(date());//here when we add parenthesis then the function gets activated and hence we get the date

const app = express();
const todo_input = [ "buy food","cook food","have fun"];//we are able to push items to the array even though its a const but we cannot assign a new item to the array
const todo_list_atWork = ["work","work"];

app.set('view engine', 'ejs');
// or u can also write app.use("view engine","ejs");
//" " or ' ' dosent matter both are used for strings only

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/",function(req,res)
{

  let date_day = date.getDate();
  res.render("list",{listTitle:date_day,todo_inputs:todo_input});//this ejs template where u take these data and put in html files
})

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work",todo_inputs:todo_list_atWork});
})

app.get("/about",function(req,res){
  res.render("about");
})



app.post("/",function(req,res){
   let newList = req.body.input1_todo;
  if(req.body.list === "Work")
  {
    todo_list_atWork.push(newList);
    res.redirect("/work");
  }
  else
  {
    todo_input.push(newList);
    res.redirect("/");
  }



})
app.post("/work",function(req,res){
  let work_toDo = req.body.input1_todo;
  todo_list_atWork.push(work_toDo);
  res.redirect("/work");

})


app.listen(3000,function(){
  console.log("server is listening in port 3000");
})
