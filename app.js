const createError = require('http-errors');
const express = require('express');
const path = require('path');
const i18n = require('i18n');
const hbs = require('express-hbs');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const langRouter = require('./routes/lang');
const { directory, locales, metaData } = require('./locales');
const packageJson = require('./package.json');

const app = express();

i18n.configure({
  locales,
  objectNotation: true,
  defaultLocale: 'en_us',
  directory
});

hbs.registerHelper('log', function(something) {
  console.log(something);
  return '' + something;
});
app.set('packageVersion', packageJson.version);
app.set('languagesMetaData', metaData);

app.engine(
  'hbs',
  hbs.express4({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'views/layouts/default',
    partialsDir: __dirname + '/views/partials',
    i18n
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(i18n.init);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/lang', langRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
