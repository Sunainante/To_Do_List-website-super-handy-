const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var todo_input = [ "buy food","cook food","have fun"];
var todo_list_atWork = ["work","work"];

app.set('view engine', 'ejs');
// or u can also write app.use("view engine","ejs");
//" " or ' ' dosent matter both are used for strings only

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/",function(req,res)
{

  var todayDate = new Date();
  var options = {
    weekday: "long",
    day:"numeric",
    month:"long"
    };

  var day = todayDate.toLocaleDateString("en-US",options);
  res.render("list",{listTitle:day,todo_inputs:todo_input});
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
