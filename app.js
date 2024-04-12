var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
console.log(connectionString);
mongoose.connect(connectionString);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jRouter = require('./routes/Bank');
var gRouter = require('./routes/grid');
var rRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
const Bank = require('./models/Bank');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username })
      .then(function (user){
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    })
    .catch(function(err){
      return done(err)
    })
  })
)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
  
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Bank',jRouter);
app.use('/grid', gRouter);
app.use('/pick', rRouter);
app.use('/resource', resourceRouter);

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

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
async function recreateDB()
{
// Delete everything
await Bank.deleteMany();
let instance1 = new
Bank({Bank_name:"Canara", Bank_place:'Komatinenivaripalem',limit:1000000});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
Bank({Bank_name:"SBI", Bank_place:'Ongole',limit:8000000});
instance2.save().then(doc=>{
console.log("second object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new
Bank({Bank_name:"Kotak", Bank_place:'Narasaraopet',limit:12000000});
instance3.save().then(doc=>{
console.log("third object saved")}
).catch(err=>{
console.error(err)
});
}

let reseed = true;
if (reseed) {recreateDB();
}
module.exports = app;
