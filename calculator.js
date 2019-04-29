//jshint esversion:6
const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
 });
app.post("/",function(req,res){
  weight = Number(req.body.weight);
  height = Number(req.body.height);

  var bmiCalculatorvar= bmiCalculator(weight,height);
  var bmi = bmiCalculatorvar[1];
  var result = bmiCalculatorvar[0];


  function bmiCalculator (weight, height) {
      var bmi = weight/Math.pow(height, 2);
      if(bmi<18.5){
          interpretation ="underweight";
      }
      else if(bmi>18.5 && bmi<25){
          interpretation ="normal";
      }
      else if(bmi>=25 && bmi<35){
          interpretation ="overweight";
      }
      else if(bmi>=30 && bmi<34){
          interpretation ="obese";
      }
      else{
          interpretation ="extremely obese";
      }
      return [interpretation,Math.floor(bmi)] ;
  }

  res.send("Result = "+result+" your bmi is equal to "+bmi);
});
 app.listen(3000,function(){
  console.log("Server is running on port 3000");
 });
