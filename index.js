const express = require("express");
const os = require("os");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/')));

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the server on port 8080
app.listen(8080, () => console.log("Listening on port 8080!"));
