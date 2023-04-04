const express = require('express');
const app = express();
const port = 3001;

const journal_model = require('./journal_entry_model');

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/journals', (req, res) => {
  journal_model.getEntries()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
    console.log(error);
  })
})

app.post('/journals', (req, res) => {
  journal_model.createEntry(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    console.log(error);
    res.status(500).send(error);
  })
})

/*app.delete('/journals/:id', (req, res) => {
  journal_model.deleteEntry(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})*/

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})