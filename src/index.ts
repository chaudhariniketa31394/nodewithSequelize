import appp from './App'

import express = require('express');
import bodyParser = require('body-parser');
import db = require("./app/dataAccess/DataAccess");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


db.authenticate().then((res) => {
  console.log("====",res);
  
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// console.log("",process.env);

const port = process.env.PORT || 3000

appp.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
