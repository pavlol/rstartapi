'use strict';
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const exp = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
//
// exp.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
//   next();
//  });

exp.use(cors({credentials: true, origin: true}));

exp.use(bodyParser.urlencoded({ extended: true }));
var db;
MongoClient.connect('mongodb://pavl1:Mytestdb1@ds113936.mlab.com:13936/rstartdb', (err, database) => {
  if (err) return console.log(err)
  db = database;
  exp.listen(port, () => {
    console.log('We are live on ' + port);
  });
  require('./app/routes')(exp, db);
});
