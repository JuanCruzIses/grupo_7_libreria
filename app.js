const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')


//Declarando rutas
const indexRouter = require('./routes/indexRoute');

///-----Rutas de APIS-------////
const userAPIRouter = require('./routes/api/userAPIRouter');
const productsAPIRouter = require('./routes/api/productsAPIRouter');

///-----Rutas de usuario-------////
const userRouter = require('./routes/usersRoute')
const productRouter = require('./routes/productRoute');
const carritoRouter = require('./routes/carritoRoute');
const pedidosRouter = require('./routes/pedidosRoute');
const detallesdepedidosRouter = require('./routes/detallespedidosRoute');
const aboutUsRouter = require('./routes/aboutUsRoute');
const questionsRouter = require('./routes/questionsRoute');
const adminRouter = require('./routes/adminRoute');
const apiRouter = require('./routes/api');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({ secret: "Somos el sombrero loco",
                  resave: false,
                  saveUninitialized: false}));

                  
///-----Requiriendo middlewares----///
const userLoggedMiddlewares = require('./middlewares/userLoggedMiddlewares')
const recordameMiddleware = require('./middlewares/recordameMiddleware')

//Uso de middlewares
app.use(userLoggedMiddlewares);
app.use(recordameMiddleware);


//Uso de rutas
app.use('/', indexRouter);
app.use('/user', userRouter)
app.use('/products', productRouter);
app.use('/carrito', carritoRouter);
app.use('/pedidos', pedidosRouter);
app.use('/detallesdepedidos', detallesdepedidosRouter);
app.use('/aboutUs', aboutUsRouter);
app.use('/questions', questionsRouter);
app.use('/admin', adminRouter);


//Uso de rutas APIS
app.use('/api/users', userAPIRouter)
app.use('/api/products', productsAPIRouter)
app.use('/api', apiRouter);


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
