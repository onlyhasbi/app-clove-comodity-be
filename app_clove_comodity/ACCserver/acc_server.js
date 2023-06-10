const hapi = require('@hapi/hapi');
const jwt = require('@hapi/jwt');
require('dotenv').config();

const test = require('../ACCapi/test');
//const albumsService = require('./services/postgres/albumsService');
//const albumsValidator = require('./validator/albums');

const auth = require('../ACCapi/auth');
const AuthValidator = require('../ACCvalidator/auth');
const authService = require('../ACCservice/Postgres/AuthService');
const TokenManager = require('../tokenize/TokenManager')

const user_pxp = require('../ACCapi/user/pxp');
const user_buruh = require('../ACCapi/user/buruh');
const UsersValidator = require('../ACCvalidator/users')
const usersService = require('../ACCservice/Postgres/usersService');

const profiling_pxp = require('../ACCapi/profiling/pxp');
const profiling_buruh = require('../ACCapi/profiling/buruh');
const dashboard_pxp = require('../ACCapi/dashboard/pxp');
const dashboard_buruh = require('../ACCapi/dashboard/buruh');

const information_pxp = require('../ACCapi/information/pxp');
const information_buruh = require('../ACCapi/information/buruh');

console.log(authService)
async function init() {
    const UsersService = new usersService();
    const AuthService = new authService();

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

    server.auth.strategy('ACC_jwt', 'jwt', {
        keys: process.env.ACCESS_TOKEN_KEY,
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
            options: {
                service : UsersService,
                validator : UsersValidator,
            }
        },
        {
            plugin: user_buruh,
            options: {
                service : UsersService,
                validator : UsersValidator,
            }
        },
        {
            plugin: auth,
            options: {
                service : AuthService,
                tokenManager : TokenManager,
                validator : AuthValidator,
            }
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

