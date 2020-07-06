const express = require('express');
const mongoose = require('mongoose');
const expressGraphQl = require('express-graphql');
require('dotenv').config()
const schema = require('./schema/schema');



const PORT = process.env.PORT || 3002;


const app = express();

// midlleware 
// app.use(express.urlencoded(true));
app.use('/graphql', expressGraphQl({
    schema: schema,
    graphiql: true
}));

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongodb")
})

app.listen(PORT, () => {
    console.log(`app start on port ${PORT}`)
})