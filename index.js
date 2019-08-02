var app = require('express')();
const express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules/socket.io-client/dist'));

app.get('/', function(req, res) {
    res.render('pages/index');
});
  
app.post('/update', function(req, res) {
    if (req.body.kiosk == '1') {
        io.emit('kiosk1', req.body.location);   
    }
    if (req.body.kiosk == '2') {
        io.emit('kiosk2', req.body.location);   
    }
    if (req.body.kiosk == '3') {
        io.emit('kiosk3', req.body.location);   
    }
    if (req.body.kiosk == '4') {
        io.emit('kiosk4', req.body.location);   
    }
    res.send('Sucsess!');
});

server.listen(port);
  