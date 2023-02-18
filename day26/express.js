const express=require(
    "express")
const app=express()

app.get("/",function(req,res){
    res.send('welcome to my channel 8000');
} );
app.get("/about",function(req,res){
    res.send('welcome to my about channel ');
} );
app.get("/contact",function(req,res){
    res.send('welcome to my contact channel ');
} );
app.get("/calculator",function(req,res){
    console.log()
    res.sendFile(__dirname+'/index.html');
} );
app.listen(7000,function(req,res){
    console.log('server is running at 7000');
});