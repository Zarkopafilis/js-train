const port = process.env.PORT;
//const port = 8080;
const path = require('path')
const express = require('express')
const app = express()

app.use('/index.html', express.static('./index.html'));
app.use('/js', express.static(path.join(__dirname + '/js')));
app.use('/resources', express.static(path.join(__dirname + '/resources')));

app.get('/', function (req, res) {
  res.redirect('/index.html')
})

app.listen(port, function () {
  console.log('App listening on port ' + port);
})