var express = require('express');
var multer  = require('multer');
var request = require('request');

var app = express();
var fs = require('fs');
var sys = require('sys');
var Promise = require('promise');

app.listen(8080);
console.log('server started. http://localhost:8080');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Cache-Control, Accept, Origin, X-Session-ID');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,TRACE,COPY,LOCK,MKCOL,MOVE,PROPFIND,PROPPATCH,UNLOCK,REPORT,MKACTIVITY,CHECKOUT,MERGE,M-SEARCH,NOTIFY,SUBSCRIBE,UNSUBSCRIBE,PATCH');
    res.header('Access-Control-Allow-Credentials', 'false');
    res.header('Access-Control-Max-Age', '1000');
    next();
};
app.use(allowCrossDomain);

app.use("/css", express.static(__dirname + '/public/css'));
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/fonts", express.static(__dirname + '/public/fonts'));
app.use("/uploads", express.static(__dirname + '/public/uploads'));


function readFile(filename, enc) {
    return new Promise(function(fulfill, reject) {
        fs.readFile(filename, enc, function(err, res) {
            if(err) reject(err);
            else fulfill(res);
        });
    });
}

function getIndex(res) {
    readFile('./public/index.html', 'utf8').done(function(data) {
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
    //fs.readFile('index.html',function (err, data){
    //    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    //    res.write(data);
    //    res.end();
    //});
}

app.get('/',function(req, res){
    //res.writeHead(200, {'Content-Type': 'text/html','Content-Length':5});
    //res.write('hello');
    //res.end();
    getIndex(res);
});

app.get('/app', function(req, res) {
   getIndex(res);
});

app.get('/todo', function(req, res) {
    getIndex(res);
});

app.get('/markdown', function(req, res) {
    getIndex(res);
});

app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        var name = filename.replace(/\W+/g, '-').toLowerCase() + Date.now();
        console.log( name + ' uploaded.');
        return name;
    }
}));

app.post('/upload', function(req, res) {
    // wait for seconds to replay...
    var intervalId = setInterval(
        function () {
            res.write(JSON.stringify(req.files));
            res.end();
            clearInterval(intervalId);
        }, 5000
    );
});

