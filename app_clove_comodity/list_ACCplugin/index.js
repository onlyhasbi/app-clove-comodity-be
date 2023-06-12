const test = require('../ACCapi/test');

const auth = require('../ACCapi/auth');
const AuthValidator = require('../ACCvalidator/auth');
const authService = require('../ACCservice/Postgres/AuthService');
const TokenManager = require('../tokenize/TokenManager')

const user_petani = require('../ACCapi/user/pxp');
const user_buruh = require('../ACCapi/user/buruh')
const UsersValidator = require('../ACCvalidator/users');
const usersService = require('../ACCservice/Postgres/usersService');

const profiling_pxp = require('../ACCapi/profiling/pxp');
const profiling_buruh = require('../ACCapi/profiling/buruh');

const lahan = require('../ACCapi/dashboard/panen/lahan');
const setoran = require('../ACCapi/dashboard/panen/setoran');
const hasil_panen = require('../ACCapi/dashboard/panen/hasil_panen');
const bahan_pengeringan = require('../ACCapi/dashboard/pengeringan/bahan_pengeringan');
const hasil_pengeringan = require('../ACCapi/dashboard/pengeringan/hasil_pengeringan');
const jual_beli = require('../ACCapi/dashboard/jual-beli');
const rekapitulasi = require('../ACCapi/dashboard/rekapitulasi');

const information_pxp = require('../ACCapi/information/pxp');
const information_buruh = require('../ACCapi/information/buruh');

const UsersService = new usersService();
const AuthService = new authService();

const plugin = [
        {
            plugin: test,
        },
        {
            plugin: user_petani,
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
            plugin: lahan,
        },
        {
            plugin: setoran,
        },
        {
            plugin: hasil_panen,
        },
        {
            plugin: bahan_pengeringan,
        },
        {
            plugin: hasil_pengeringan,
        },
        {
            plugin: jual_beli,
        },
        {
            plugin: rekapitulasi,
        },
        {
            plugin: information_pxp,
        },
        {
            plugin: information_buruh,
        },
    ];

module.exports = plugin;
