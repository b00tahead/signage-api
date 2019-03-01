// app.js

var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var sassMiddleware = require('node-sass-middleware')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var directoryRouter = require('./routes/directory.js')

var app = express()

const mongoose = require('mongoose')
let uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
mongoose.connect(uri)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/directory', directoryRouter)

module.exports = app
