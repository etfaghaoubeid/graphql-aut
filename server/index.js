const express = require('express');
const mongoose = require('mongoose');
const expressGraphQl = require('express-graphql');
const schema = require('./schema/schema');



const PORT = 3001;


const app = express();

// midlleware 
// app.use(express.urlencoded(true));
app.use('/graphql', expressGraphQl({
    schema: schema,
    graphiql: true
}))


app.listen(PORT, () => {
    console.log(`app start on port ${PORT}`)
})