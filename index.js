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
// console.log(process.env.PORT);


app.use(express.static(path.join(__dirname, '/dist/')));

app.post("/api/signin", useBodyParser, (req, res) => {
  const user = authOp.findOne(path.join(__dirname + '/dist/data/clients.json'), 'username', req.body.username);
  user ? authOp.authenticate(res, user, req.body.password) : res.status(422).send({ error: 'Inccorect Username or Password'})
});

app.post("/api/newEvent", useBodyParser, (req, res) => {
  let events = fileOp.jsonToArray(fileOp.readData(path.join(__dirname + '/dist/data/calendar.json')));
  events.push(req.body);
  let events_json = {};
  events.forEach(event => {
    events_json[events.indexOf(event)] = event;
  });
  fileOp.writeData(path.join(__dirname + '/dist/data/calendar.json'), events_json);

  // Email Confirmation
  // const messageInfo = {
  //   email: `${req.body.email}`, fromEmail: "service.accuracy@gmail.com",
  //   fromName: "Accuracy Accounting", subject: "Appointment Confirmation", 
  //   text: `Dear ${req.body.client},\n\n\tThank you for choosing to work with Accuracy! This email is to confirm your appointment about "${req.body.reason}" is scheduled for ${req.body.date.replace(":00 GMT-0700 (Mountain Standard Time)", '.')} Since you are not a registered client of Accuracy yet, you do not have access to a client account, however should you choose to continue working with Accuracy after your appointment, one will be provided for your convenience.\n\nSincerely,\nThe Accuracy Team`
  // };
  // mailer.sendEmail(messageInfo);

  res.send(events);
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
