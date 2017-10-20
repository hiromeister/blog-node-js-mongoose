const express = require("express");
const app = express();
const port = 3001;
const fs = require('fs');

const mongoose = require("mongoose");

mongoose.Promise =  
global.Promise;mongoose.connect("mongodb://localhost:27017/articles");

app.listen(port, () => {
    console.log("Le serveur est sur le port " + port);
});

fs.readdirSync('./controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        route.controller(app);
    }
  });   