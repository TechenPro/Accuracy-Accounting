const express = require("express");
const os = require("os");
const http = require('http');
const path = require('path');
const fileOp = require('./controllers/fileOperations');
const authOp = require('./controllers/authFunctions');
const bodyParser = require('body-parser');
const useBodyParser = bodyParser.json({ type: '*/*'});

const app = express();


app.use(express.static(path.join(__dirname, '/dist/')));

app.post("/api/getUsername", useBodyParser, (req, res) => {
  const user = authOp.findOne(path.join(__dirname + '/dist/data/clients.json'), 'username', 'Gilgamesh');
  user ? authOp.authenticate(res, user, req.body.password) : res.status(422).send({ error: 'Inccorect Username or Password'})
});

app.post("/api/storeUsername", useBodyParser, (req, res) => {
  console.log(req.body);
  const user = req.body.name;
  fileOp.writeData(path.join(__dirname + '/dist/data/test.json'), {user: user});
  res.send({
    success: true,
    message: 'Wrote Data',
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the server on port 8080
const server = http.createServer(app);
server.listen(8080, () => console.log("Listening on port 8080!"));
