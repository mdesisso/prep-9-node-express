var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.set('views', __dirname + '/views')
app.get('/', function(request, response){
    response.render('home.ejs')
})
app.get('/', function(request, response){
    response.render('profile.ejs')
})
var port = process.env.PORT
app.listen(port,function(){
    console.log(`App running on ${port} cats`)
})

