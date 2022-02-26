const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const passport = require('passport')
const session = require('express-session')
const connectDb = require('./db')


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//passport
require('./passport1')(passport)



const app = express()

const PORT = process.env.PORT

connectDb()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }))

app.use(passport.initialize())
app.use(passport.session())

// Routes

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))


app.listen(PORT, ()=>{
    console.log(`Server started on at: http://localhost:${PORT}`)
})