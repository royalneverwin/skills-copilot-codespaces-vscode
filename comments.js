// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install ejs
// npm install express-sanitizer
// npm install method-override
// npm install lodash
// npm install dotenv
// npm install passport
// npm install passport-local
// npm install express-session
// npm install passport-local-mongoose
// npm install connect-flash

// Load env variables
require('dotenv').config();

// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const _ = require('lodash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');

// Create app
const app = express();

// Use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Use ejs
app.set('view engine', 'ejs');

// Use express-sanitizer
app.use(expressSanitizer());

// Use method-override
app.use(methodOverride('_method'));

// Use connect-flash
app.use(flash());

// Use express-session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Use passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to database
mongoose.connect('mongodb://localhost:27017/comments', {useNewUrlParser: true, useUnifiedTopology: true});

// Create schema
const commentSchema = new mongoose.Schema({
  text: String,