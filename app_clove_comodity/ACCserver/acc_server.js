const hapi = require('@hapi/hapi');
const jwt = require('@hapi/jwt');

const test = require('../ACCapi/test');
//const albumsService = require('./services/postgres/albumsService');
//const albumsValidator = require('./validator/albums');

const auth = require('../ACCapi/auth');

const user_pxp = require('../ACCapi/user/pxp');
const user_buruh = require('../ACCapi/user/buruh');

const profiling_pxp = require('../ACCapi/profiling/pxp');
const profiling_buruh = require('../ACCapi/profiling/buruh');

const dashboard_pxp = require('../ACCapi/dashboard_clove_comodity/pxp');
const dashboard_buruh = require('../ACCapi/dashboard_clove_comodity/buruh');

const information_pxp = require('../ACCapi/information/pxp');
const information_buruh = require('../ACCapi/information/buruh');


async function init() {
    const server = hapi.server({
        port: 3555,
        host: 'localhost',
        // debug: {
        //     request: ['error'],
        // },
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
            plugin: test,
        },
        {
            plugin: user_pxp,
        },
        {
            plugin: user_buruh,
        },
        {
            plugin: auth,
        },
        {
            plugin: profiling_pxp,
        },
        {
            plugin: profiling_buruh,
        },
        {
            plugin: dashboard_pxp,
        },
        {
            plugin: dashboard_buruh,
        },
        {
            plugin: information_pxp,
        },
        {
            plugin: information_buruh,
        },

    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

}

init();

