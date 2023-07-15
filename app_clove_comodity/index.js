const hapi = require('@hapi/hapi');
const jwt = require('@hapi/jwt');
require('dotenv').config();

const plugin = require('./plugin');

async function init() {

    const server = hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.register([
        {
            plugin: jwt,
        },
    ]);

    server.auth.strategy('ACC_jwt', 'jwt', {
        keys: process.env.ACCESS_TOKEN_KEY,
        verify: {
            aud: false,
            iss: false,
            sub: false,
            maxAgeSec: 14400,
        },
        validate: (artifacts) => ({
            isValid: true,
            credentials: {
                id: artifacts.decoded.payload.id,
            },
        }),
    });

    await server.register(plugin);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

}

init();

