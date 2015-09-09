var Hapi = require('hapi');

var Posts = require('./posts');

var port = process.env.PORT || 1337;
var server = new Hapi.Server();
server.connection({ port: port });


server.route({
    path: '/',
    method: 'GET',
    handler: function(request, reply) {
        reply('hello');
    }
});

server.route({
    method: 'GET',
    path: '/posts',
    handler: function (request, reply) {

        reply(Posts);
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
