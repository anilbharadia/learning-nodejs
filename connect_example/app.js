var connect = require('connect');
var http = require('http');

function filterOne(request, response, next) {
    console.log('First filter called');
    next(); // call next filer, otherwise the request will time out
}

function filterTwo(request, response, next) {
    console.log('Second fitler called');
    next();
}

var app = connect();

app.use(filterOne);
app.use(filterTwo);

function serveProfile(request, response) {
    console.log('User requested profile');
    response.writeHead(200);
    response.write('Profile score is good :)');
    response.end();
}

function serveForum(request, response) {
    console.log('User requested forum');
    response.writeHead(200);
    response.write('Welcome to Forum !!');
    response.end();
}

app.use('/profile', serveProfile);
app.use('/forum', serveForum);

http.createServer(app).listen(9876);

console.log('Server is running at http://localhost:9876');