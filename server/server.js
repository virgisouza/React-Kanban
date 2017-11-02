const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
const app = express()
const PORT = process.env.PORT || 4567;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));

const cards = db.cards;
const users = db.users;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/api/cards', function (req, res) {
  const data = req.body;
  console.log(data);

  return cards.create({
    title: data.title,
    assigned_to: data.assigned_to,
    priorities_id: data.priorities_id,
    status_id: data.status_id,
    created_by: data.created_by
  }).then(data => {
    return res.json(data);
  })

})

app.post('/api/users', (req,res) => {
  const data = req.body;

  return users.create({username: data.username})
    .then(data => {
      res.json(data);
    })
})

app.get('/api/cards', function (req, res) {
  const data = req.body;
  console.log(data);
  res.json(data);
})

app.listen(PORT, function () {
  db.sequelize.sync({force: false});
  console.log('Swerver up listening on port ' + PORT)
});