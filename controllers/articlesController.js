const mongoose = require("mongoose");
const Articles = require('../models/articles');
module.exports.controller = function(app){

    app.get('/', function(req, res){
        Articles.find({}, function(err, meuh){
        res.render('index.ejs', { meuh: meuh});
        });
    });
    
     app.get('/article/:id', function(req, res){
        Articles.find({}, function(err, meuh){
            res.render('article.ejs', {
                article: req.params.id, myArticle: meuh.filter((article) => {
                    return article.id == req.params.id
                })[0]
            });
    });
    
    });
}