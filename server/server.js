// TODO: mount the tigers route with a a new router just for tigers
// exactly like lions below

// "use strict"; 
// // partial support of let and const.

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lionRouter = require('./lions');
var tigerRouter = require('./tigers');

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//   console.log('The body', req.body);
//   next();
// });
// // my own morgan.


// this is called mounting. when ever a req comes in for
// '/lion' we want to use this router
app.use('/lions', lionRouter);
app.use('/tigers', tigerRouter);

app.use(function(err, req, res, next) {
  if (err) {
    console.log(err.message);
    res.status(500).send(error);
  }
});


app.listen(3000);
console.log('on port 3000');
