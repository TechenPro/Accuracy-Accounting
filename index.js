const express = require("express");
const os = require("os");
const http = require('http');
const path = require('path');
const fileOp = require('./controllers/fileOperations');
const authOp = require('./controllers/authFunctions');
const mailer = require('./controllers/mailer');
const bodyParser = require('body-parser');
const useBodyParser = bodyParser.json({ type: '*/*'});

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/dist/')));

app.post("/api/signin", useBodyParser, (req, res) => {
  const user = authOp.findOne(path.join(__dirname + '/dist/data/clients.json'), 'username', req.body.username);
  user ? authOp.authenticate(res, user, req.body.password) : res.status(422).send({ error: 'Inccorect Username or Password'})
});

app.post("/api/newEvent", useBodyParser, (req, res) => {
  // let events = fileOp.jsonToArray(fileOp.readData(path.join(__dirname + '/dist/data/calendar.json')));
  // events.push(req.body);
  // let events_json = {};
  // events.forEach(event => {
  //   events_json[events.indexOf(event)] = event;
  // });
  // fileOp.writeData(path.join(__dirname + '/dist/data/calendar.json'), events_json);
  // res.send(events);
  const locals = {userName: "Mr. Clean"};
  const messageInfo = {
    email: "zant375.01@gmail.com", fromEmail: "Accuracy@A.com",
    fromName: "Mr. Clean", subject: "Testing"
  };
  mailer.sendOne("test", messageInfo, locals);
})

app.get("/api/getSchedule", (req, res) => {
  const json_data = fileOp.readData(path.join(__dirname + '/dist/data/calendar.json'));
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

// Start the server
const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}!`));
