
var express = require('express')
var bodyParser = require('body-parser')

var app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.send("Welcome")
})


app.post("/book",(res,req)=>{

var bname=req.body.name ;   
var bprice=parseInt(req.body.num);
var bauthor=req.body.bname;


res.status(200).json({"Name":bname,"Price":bprice,"Author":bauthor})


})


app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})