var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });


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

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
