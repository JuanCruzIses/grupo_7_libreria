var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//Declarando rutas
const indexRouter = require('./routes/indexRoute');
const loginRouter = require('./routes/loginRoute')
const registerRouter = require('./routes/registerRoute')
const productRouter = require('./routes/productRoute');
const carritoRouter = require('./routes/carritoRoute');
const aboutUsRouter = require('./routes/aboutUsRoute');
const questionsRouter = require('./routes/questionsRoute');

//const usersRouter = require('./routes/users');
const adminRouter = require('./routes/adminRoute');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Uso de rutas
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use('/carrito', carritoRouter);
app.use('/aboutUs', aboutRouter);
app.use('/questions', questionsRouter);

//app.use('/users', usersRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
