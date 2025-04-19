// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
// app.get("/api/hello", function (req, res) {
//   res.json({ greeting: "hello API" });
// });

// Header Parser Microservice
app.get(["/api/whoami/", "/api/whoami"], function (req, res) {
  // Extract IP (handles proxy servers via 'x-forwarded-for')
  const ip =
    req.headers["x-forwarded-for"] || req.ip || req.connection.remoteAddress;

  // Extract language (from 'accept-language' header)
  const language = req.headers["accept-language"];

  // Extract software (from 'user-agent' header)
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ip,
    language: language,
    software: software,
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
