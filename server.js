var express = require('express')
var app = express()
var ejs = require('ejs');
var qs = require('qs');
var connection = require('./mysql');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')


connection.connect(function(err){  
    if(!err) {  
        console.log("Database is connected ...");    
    } else {  
        console.log("Error connecting database ... ");    
    }  
});

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/db', (req,res)=>{
    connection.query('SELECT * from CLUB_OLD', (error, result) => {
        if (error) throw error;
        var reader = JSON.stringify(result)
        res.render("db", {data:reader})
      });
})

app.listen( 8000, function(){
    console.log('connected to port')
})