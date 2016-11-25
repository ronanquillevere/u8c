"use strict";
var express = require("express");
var app = express();
var port = 80;
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
app.use(express.static('client'));
app.use('/lib', express.static('node_modules/react/dist'));
app.use('/lib', express.static('node_modules/react-dom/dist'));
//ahah
app.listen(80, function () {
    console.log("Example app listening on port " + port);
});
