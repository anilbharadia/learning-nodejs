var http = require('http');

function onRequest(req, res) {
    console.log("A user made a request " + req.url);
    res.writeHead(200, {"content-type" : "text/plain"});
    res.write("Here is some data");
    res.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server is now running...")