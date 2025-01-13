const express = require('express');
const createError = require('http-errors');
const path = require('path')
const serverless = require('serverless-http');

const app = express();

app.use(express.static(path.join(__dirname, '../public')))
  .set('views', path.join(__dirname, '../views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/user', (req, res) => {
    res.render('user');
  });

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

pp.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json('error');
  });
  
  // Export the app as a serverless function
  module.exports.handler = serverless(app);