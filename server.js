
var app = require('express')();
 
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var resources = [
    {
        id: 200,
        name: 'Foo'
    }
];
 
app.get('/resources', function(req, res) {
    res.send(resources);
});
 
app.get('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var result = resources.filter(r => r.id === id)[0];
 
    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;
 
  console.log('listening at http://%s:%s', host, port);
});
