const mongoose = require('mongoose')


const movieSchema =new mongoose.Schema({
    title:String,
    year:Number,
    imdbId:String,
    type:String,
    poster:String,
})

const Movie =mongoose.model("Movie",movieSchema );
module.exports =movieSchema;