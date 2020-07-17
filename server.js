//Environment variables
require('dotenv').config();

//Imports
const 
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Routes
const blogsRoute = require('./routes/api/blogs');

const app  = express();

//Middleware: Body Parser
app.use(bodyParser.json());

//Database Config
const dbURI = process.env.MONGO_URI;

mongoose
    .connect(dbURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Error connecting...',err))

//API Routes
app.use('/api/blogs',blogsRoute);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on ${port}`));