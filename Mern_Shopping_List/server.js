const express = require('express');
const mongoose = require('mongoose');
const itemsRoute = require('./routes/api/ItemRoute')

const app = express();

// BodyParser Middleware
app.use(express.json());

//DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database Connection Successfully"))
  .catch((err) => console.log(err));


// use Routes 
app.use('/api/items',itemsRoute)

// Server running port
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server Running on port ${port}`))
