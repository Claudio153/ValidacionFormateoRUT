var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var validacion = require('./routes/validar_rut');
var formateo = require('./routes/formatear_rut');
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/validar', validacion);
app.use('/formatear', formateo);
module.exports = app;
