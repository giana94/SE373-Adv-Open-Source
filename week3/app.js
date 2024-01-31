const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const createError = require('http-errors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Handle form submission
app.post('/results', (req, res) => {
  console.log('Form submitted!');
  const size = req.body.size;
  console.log('Size:', size);

  // Process form data and render results view
  res.render('results', { size });
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error(err.stack);

  // render the error page
  res.status(err.status || 500);
  res.render('error', { errorMessage: 'Something went wrong!' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// final error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const data = './data';

module.exports = app;
