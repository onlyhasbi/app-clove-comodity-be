const hapi = require('@hapi/hapi');
const jwt = require('@hapi/jwt');

const test = require('../api/test');
//const albumsService = require('./services/postgres/albumsService');
//const albumsValidator = require('./validator/albums');

const init = async  () => {
    const server = hapi.server({
        port: 3555,
        host: 'localhost',
        debug: {
            request: ['error'],
        },
        routes:{
            cors: {
                origin:['*'],
            },
        },
    });

    server.register([
            {
                plugin: jwt,
            },
    ]);

    server.auth.strategy('musicApp_jwt', 'jwt', {
        keys: 'key/ pelajari nanti',
        verify: {
            aud: false,
            iss: false,
            sub: false,
            maxAgeSec: 3600,
        },
        validate: (artifacts) => ({
            isValid: true,
            credentials: {
            id: artifacts.decoded.payload.id,
            },
        }),
    });

    await server.register([
        {
            plugin:test,
        },

    ])

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

};

init();

