var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db= require("./database/models")

// SESSION
const session = require('express-session')



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter= require("./routes/productos");   
var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//SESSION
app.use(session( { secret: "Clamalú tortas",
				           resave: false,
			            	saveUninitialized: true }));

//Pasar datos de sesion a las vistas (usamos middleware de aplicación)
app.use(function(req, res, next) {
  if(req.session.usuarioLogueado != undefined) {      // si no hay datos en la sesión, pasa de largo, si si los hay, pasalos a locals
    res.locals.usuarioLogueado= req.session.usuarioLogueado
    return next()
  }
  return next()   //el next le dice continua con lo que sigue para que la ejecuci´øn no corte ahí ni siga cargando.          
})



// COOKIE
/*  app.use((req, res, next)=> {
  if(req.cookies.cookieUsuario != undefined) {
      let id= req.cookies.cookieUsuario
      db.Usuario.findByPk(id)
      .then((data)=> {
        if(data != undefined) {
          req.session.usuarioLogueado= data
        }
        return next()
      })
      .catch((error)=> {
        console.log(error)
      })}
      return next()

}) */




//RUTAS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);  

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
