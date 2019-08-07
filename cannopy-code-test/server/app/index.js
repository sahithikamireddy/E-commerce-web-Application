var express = require('express');
var routes = require('./routes');
var figchalk = require('figchalk');
var bodyParser = require('body-parser');

var app = express()

app.listen(3000, function(){
    console.log(figchalk.mix("Cannopy API", "cyanBright", "Ghost"));    
    console.log('Running in port ' + figchalk.chalk(3000, 'green'));    
})
app.use("/", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: 'false'}));
app.use(bodyParser.json());


app.use(routes);

function shutdown() {
    console.log('The server shutting down')
    server.close(err => {
        if (err) {
            console.error(figchalk.chalk(err, 'red'))
            process.exitCode = 1
        }

        process.exit()
    })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

module.exports = app;