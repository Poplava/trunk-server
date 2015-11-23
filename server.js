var express = require('express');
var app = express();

app.use(express.static('/home/trunk/htdocs'));

var server = app.listen(3456, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
