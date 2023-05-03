const express = require('express');
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { nanoid } = require("nanoid");
const app = express();

var storage = multer.diskStorage(
  {
      destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
      },
      filename: function ( req, file, cb ) {
        cb(null, nanoid() + path.extname(file.originalname));
    }
  }
);
var upload = multer({ storage: storage });

const port = 3001;

const journal_model = require('./journal_model');
const message_model = require('./message_model');
const recipe_model = require('./recipe_model');
const custom_recipe_model = require('./custom_recipe_model');

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



app.get('/messages', (req, res) => {
  message_model.getMessages()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
    console.log(error);
  })
})

app.post('/messages', (req, res) => {
  message_model.createMessage(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    console.log(error);
    res.status(500).send(error);
  })
})



app.get('/savedrecipes', (req, res) => {
  recipe_model.getRecipes()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
    console.log(error);
  })
})

app.post('/savedrecipes', (req, res) => {
  recipe_model.saveRecipe(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    console.log(error);
    res.status(500).send(error);
  })
})

app.delete('/savedrecipes', (req, res) => {
  recipe_model.deleteRecipe(req.query.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})



app.get('/customrecipes', (req, res) => {
  custom_recipe_model.getRecipes()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
    console.log(error);
  })
})

app.post('/customrecipes', upload.single("file"), async (req, res) => {
  try {    
    if (req.file) {
      console.log(req.file)
      res.send({
        status: true,
        message: "File Uploaded!",
      });
    } else {
      res.status(400).send({
        status: false,
        data: "File Not Found",
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
  
  custom_recipe_model.createRecipe(req.body, req.file.filename)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    console.log(error);
    res.status(500).send(error);
  })
})

app.delete('/customrecipes', (req, res) => {
  custom_recipe_model.deleteRecipe(req.query.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})