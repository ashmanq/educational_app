const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(parser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('lessons_db');
  const lessonsCollection = db.collection('lessons');
  const lessonsRouter = createRouter(lessonsCollection)
  app.use('/api/lessons', lessonsRouter);

})
.catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
})
