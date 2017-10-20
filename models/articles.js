const mongoose = require("mongoose");

let articleSchema = new mongoose.Schema({
    id: Number,
    title: String,
    summary: String,
    content: String, 
    createdAt: String
});

let Articles = mongoose.model("article1", articleSchema);

module.exports = Articles;
