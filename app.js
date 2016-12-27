var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//connecting to mongodb server
var databaseurl = "niftystock";
var collections = ["NiftyI"];
var collections2 = ["GraphData"]
var db = require("mongojs").connect(databaseurl, collections,collections2);

//trying to fire query
//per min
db.NiftyI.find({Time: }, function (err, NiftyI) {
    if(err || !NiftyI){
        console.log("Time not found");
    }else{
        db.GraphData.save({Time: , Open: , High: , Low: , Close: , Volume: , OpenInterest: }, function (err, saved) {
            if(err || !saved){
                console.log("Data not saved");
            }else{
                console.log("Data Saved");
            }
        });

    }

})
//per hour
db.NiftyI.find({Time: }, function (err, NiftyI) {
    if(err || !NiftyI){
        console.log("Time not found");
    }else{
        db.GraphData.save({Time: , Open: , High: , Low: , Close: , Volume: , OpenInterest: }, function (err, saved) {
            if(err || !saved){
                console.log("Data not saved");
            }else{
                console.log("Data Saved");
            }
        });

    }

})