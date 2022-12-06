const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose'); 
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
console.log(uri)

mongoose.connect(uri, { useNewUrlParser:true,  useUnifiedTopology:true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongodb database connection established sucessfully!!");
})

const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);



app.get('/', (req,res) => {
    res.json({"name":"arun"});
});

app.listen(port,() => {
    console.log(`listening port${port}`);
});

