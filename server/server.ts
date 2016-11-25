import * as express from "express";

var app = express();
let port = 80;
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.use(express.static('client'))
app.use(express.static('/lib','node_modules/react/dist'));
app.use(express.static('/lib','node_modules/react-dom/dist'));

//ahah

app.listen(80, function () {
  console.log(`Example app listening on port ${port}`)
})