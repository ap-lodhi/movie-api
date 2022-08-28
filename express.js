const express =require('express')
const mongoose = require('mongoose')

// const Movie =require('./schema')
const connectDataBace =require('./db')

const app =express();

connectDataBace();

app.use(express.json())



const movieSchema =new mongoose.Schema({
    title:String,
    year:Number,
    imdbId:String,
    type:String,
    poster:String,
})

const Movie =mongoose.model("Movie",movieSchema );




app.get('/getMovie' ,async (req,res) => {
    const data = await Movie.find()
    res.send(data)
})

app.post('/addMovie', async (req,res) => {
    try {
        
        const query = req.body;
    Movie.create(query)
    res.send('Movie Added')
    }
    catch(err){
        console.error("bad request ",err)
    }
})



app.listen(3000, ()=>{
    console.log("server is running at port no. 3000")
})