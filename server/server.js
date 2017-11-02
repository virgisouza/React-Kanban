const express = require('express');
//const bodyParser = require('bodyParser');
const db = require('../models');
const app = express()
const PORT = process.env.PORT || 4567;

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(PORT, function () {
  db.sequelize.sync({force: true});
  console.log('Swerver up listening on port ' + PORT)
});