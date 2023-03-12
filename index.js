// Require dotenv
require('dotenv').config()
// Require express
const express = require('express')
// Create an express app
const app = express()

// Home route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// Wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
})

// Start listening on the server port
app.listen(process.env.PORT)