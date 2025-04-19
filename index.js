// index.js
// where your node app starts

// init project
require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

// --- Middleware ---

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Enable trust proxy only in production (not locally)
app.set("trust proxy", process.env.NODE_ENV === "production");

// Request logging
app.use((req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.path} (IP: ${req.ip})`
  );
  next();
});

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static("public"));

// Serve static files first (CSS/JS/images)
app.use(express.static(path.join(__dirname, "public")));

// Rate limiting (Production-only)
if (process.env.NODE_ENV === "production") {
  const limiter = require("express-rate-limit")({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max 100 requests per window
    message: {
      error: "Too many requests. Try again in 15 minutes.",
    },
    headers: true, // Sends "Retry-After" header
  });
  app.use(["/api/whoami", "/api/whoami/"], limiter);
}

// --- API Route ---

// Header Parser Microservice
app.get(["/api/whoami/", "/api/whoami"], function (req, res) {
  // Prioritize 'x-forwarded-for' (for proxies like FCC's tests)
  let ip = req.headers["x-forwarded-for"];

  // Handle local IPv6 -> IPv4 conversion
  if (!ip && req.ip) {
    ip = req.ip.includes("::1") ? "127.0.0.1" : req.ip;
  }

  // Fallback to socket IP (with same conversion)
  if (!ip) {
    const rawIp = req.socket.remoteAddress;
    ip = rawIp?.includes("::1") ? "127.0.0.1" : rawIp;
  }

  const cleanIp = ip ? ip.split(",")[0].trim() : "Unknown";

  // Extract language (from 'accept-language' header)
  const language = req.headers["accept-language"];

  // Extract software (from 'user-agent' header)
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: cleanIp,
    language: language,
    software: software,
  });
});

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/views/index.html");
// });

// Frontend Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
