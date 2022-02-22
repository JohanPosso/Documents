var express = require("express");

var app = express();

var port = process.env.port || 3000;

var cors = require("cors");

var path = require("path");

app.use(cors());
app.use("/assets", express.static("assets"));

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./dist")));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/snap.svg.html"));
});

app.listen(port, function () {
  console.log("Server is Running on :" + port);
});
