//Set up express
const express = require(`express`);
const app = express();
//Include the file system functions
const fs =require(`fs`);
//Include and set the hbs (handlebars) view engine
const hbs = require(`hbs`)
app.set(`view engine`,`hbs`)
//register the location of partial snippets for the view engine
hbs.registerPartials(__dirname + `/views/partials`,(err)=>{})
//Uses extended url capability
app.use(express.urlencoded({extended:true}));
//add the static asset folder
app.use(express.static(`${__dirname}/public`));
//allow express json functionality
app.use(express.json())


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error(`Not Found`);
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // render the error page
        res.status(err.status || 80);
        res.render(`error`);
});


//path to the data folder
const data = `./data`


//Runs the server when npm app.js is run in the terminal
let port = process.env.PORT || 80;
app.listen(port, ()=>{
    console.log(`Server Running at localhost:${port}`)
});
