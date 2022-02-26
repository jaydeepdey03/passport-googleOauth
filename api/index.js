const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const connectDb = require('./db')


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


const app = express()

const PORT = process.env.PORT

connectDb()

// Routes

app.use('/', require('./routes/auth.js'))


app.listen(PORT, ()=>{
    console.log(`Server started on at: http://localhost:${PORT}`)
})