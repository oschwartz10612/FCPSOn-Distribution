var app = require('express')();
const express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules/socket.io-client/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));


app.get('/', function(req, res) {
    res.render('pages/4tiles');
});
app.get('/4', function(req, res) {
    res.render('pages/4tiles');
});
app.get('/6', function(req, res) {
    res.render('pages/6tiles');
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
    if (req.body.kiosk == '5') {
        io.emit('kiosk5', req.body.location);   
    }
    if (req.body.kiosk == '6') {
        io.emit('kiosk6', req.body.location);   
    }
    res.send('Sucsess!');
});

io.on('connection', function(client) {
     client.on('kiosk1', function(data) {
        io.emit('kiosk1', data);   
    });
    client.on('kiosk2', function(data) {
        io.emit('kiosk2', data);   
    });
    client.on('kiosk3', function(data) {
        io.emit('kiosk3', data);   
    });
    client.on('kiosk4', function(data) {
        io.emit('kiosk4', data);   
    });
    client.on('kiosk5', function(data) {
        io.emit('kiosk5', data);   
    });
    client.on('kiosk6', function(data) {
        io.emit('kiosk6', data);   
    });
    client.on('panic', function(data) {
        io.emit('panic', data);   
    });
 });
 

server.listen(port);
  