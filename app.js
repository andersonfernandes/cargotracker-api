var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

require('dotenv').config()

var indexRouter = require('./routes/index');
var cargosRouter = require('./routes/CargosRoutes');
var locationsRouter = require('./routes/LocationsRoutes');
var eventsRouter = require('./routes/EventsRoutes');

var app = express();

const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cargos', cargosRouter);
app.use('/locations', locationsRouter);
app.use('/events', eventsRouter);

module.exports = app;
