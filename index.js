const express = require("express");
const os = require("os");
const http = require('http');
const path = require('path');
const fileOp = require('./controllers/fileOperations');
const authOp = require('./controllers/authFunctions');
const bodyParser = require('body-parser');
const useBodyParser = bodyParser.json({ type: '*/*'});

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/dist/')));

app.post("/api/signin", useBodyParser, (req, res) => {
  const user = authOp.findOne(path.join(__dirname + '/dist/data/clients.json'), 'username', req.body.username);
  user ? authOp.authenticate(res, user, req.body.password) : res.status(422).send({ error: 'Inccorect Username or Password'})
});

app.get("/api/getSchedule", (req, res) => {
  const json_data = fileOp.readData(path.join(__dirname + '/dist/data/calander.json'));
  const schedule = fileOp.jsonToArray(json_data);
  res.send(schedule);
});

// app.post("/api/storeUsername", useBodyParser, (req, res) => {
//   console.log(req.body);
//   const user = req.body.name;
//   fileOp.writeData(path.join(__dirname + '/dist/data/test.json'), {user: user});
//   res.send({
//     success: true,
//     message: 'Wrote Data',
//   });
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the server on port 8080
const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}!`));
