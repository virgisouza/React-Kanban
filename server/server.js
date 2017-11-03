const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
const PORT = process.env.PORT || 4567;
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));


const Card = db.Card;
const User = db.User;
const Priorities = db.priorities;


app.get('/api/cards', (req, res) => {
  return Card.findAll({
    include: [
      {model: User, as: 'Creator'},
      {model: User, as: 'Dev'}
    ]
  }).then(cards => {
      return res.json(cards);
  })
})
app.get('/api/users', (req, res) => {
  return User.findAll({
    include: [
      {model: Card, as: 'Cards'},
      {model: Card, as: 'Tasks'}
    ]
  }).then(users => {
      return res.json(users);
  })
})


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/api/cards', function (req, res) {
  const data = req.body;
  console.log('post data 1', data);

  return cards.create({
    title: data.title,
    assigned_to: data.assigned_to,
    priorities_id: data.priorities_id,
    status_id: data.status_id,
    created_by: data.created_by
  }).then(data => {
    console.log('post server data', data);
    return res.json(data);
  })

})

app.post('/api/users', (req,res) => {
  const data = req.body;
  return User.create({username: data.username})
    .then(data => {
      res.json(data);
    })
})

// app.get('/api/cards', function (req, res) {
//   return cards.findAll()
//   .then(cards => {
//     res.json(cards);
//   })
// })

// app.get('/api/users', function (req, res) {
//   return users.findAll()
//     .then(users => {
//       res.json(users);
//     })
// })

app.get('/api/priorities', function (req, res) {
  return Priorities.findAll()
    .then(priorities => {
      res.json(priorities);
    })
})

app.listen(PORT, function () {
  db.sequelize.sync({force: false});
  console.log('Swerver up listening on port ' + PORT)
});