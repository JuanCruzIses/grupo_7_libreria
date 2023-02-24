import express from 'express'
// import session from 'express-session'
const app = express()
// const createError = require('http-errors');
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
// import methodOverride from 'method-override'
import cors from "cors";

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// ///-----Rutas de APIS-------////
// import userAPIRouter from './routes/api/userAPIRouter';
// import productsAPIRouter from './routes/api/productsAPIRouter';

//Declarando rutas
import indexRoute from './routes/indexRoute.js';
import usersRoute from './routes/usersRoute.js'
import productRoute from './routes/productRoute.js';
import libroListRoute from './routes/libroListRoute.js'
import carritoRoute from './routes/carritoRoute.js';
import pedidosRoute from './routes/pedidosRoute.js';
import detallesdepedidosRoute from './routes/detallespedidosRoute.js';
import aboutUsRoute from './routes/aboutUsRoute.js';
import questionsRoute from './routes/questionsRoute.js';
import adminRoute from './routes/adminRoute.js';
// import apiRouter from './routes/api'



// Cors para integrar Api al Dasboard de React
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(methodOverride('_method'));
// app.use(session({
//   secret: "Somos el sombrero loco",
//   resave: false,
//   saveUninitialized: false
// }));


///-----Requiriendo middlewares----///
// import userLoggedMiddlewares from './middlewares/userLoggedMiddlewares';
//const recordameMiddleware = require('./middlewares/recordameMiddleware')

// Uso de middlewares
// app.use(userLoggedMiddlewares);
//app.use(recordameMiddleware);


//Uso de rutas
app.use('/', indexRoute);
app.use('/user', usersRoute)
app.use('/products', productRoute);
app.use('/libroList', libroListRoute);
app.use('/carrito', carritoRoute);
app.use('/pedidos', pedidosRoute);
app.use('/detallesdepedidos', detallesdepedidosRoute);
app.use('/aboutUs', aboutUsRoute);
app.use('/questions', questionsRoute);
app.use('/admin', adminRoute);


//Uso de rutas APIS
// app.use('/api/users', userAPIRouter)
// app.use('/api/products', productsAPIRouter)
// app.use('/api', apiRouter);


// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// export default app;
