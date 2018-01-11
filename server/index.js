var app = require('express')();
var httpServer = require('http').Server(app);
//var net = require('net');
var path = require('path');
var ip = require('ip');

// Use 80 if U do not want a special port
const httpport    = process.env.PORT || 80;

app.use(require('express').static(path.join(__dirname, '../public')));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});


httpServer.listen(httpport, function() {
    console.log('listening on ' + ip.address() + ":" + httpport);
});

