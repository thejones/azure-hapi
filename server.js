var hapi = require('hapi');
var Posts = require('./posts');

var server = new hapi.Server();

server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
});

server.route({
    path: '/',
    method: 'GET',
    handler: function(request, reply) {
        reply('hello');
    }
})

server.route({
    method: 'GET',
    path: '/posts',
    handler: function (request, reply) {

        reply(Posts);
    }
});

if (!module.parent) {
    server.start(function() {
        console.log('Server started: ' + server.info.uri);
    });
}
