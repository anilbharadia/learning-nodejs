var restify = require('restify');

var options= {
    name: "TooDoo rest API"
}

var server = restify.createServer(options);

module.exports = server;