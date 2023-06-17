const test = require('../ACCapi/test');

const dummy = require('../ACCapi/dummy/index');
const dummyS= require('../ACCservice/dummy/index')

const auth = require('../ACCapi/auth');
const AuthValidator = require('../ACCapi/auth/validator');
const authService = require('../ACCservice/Postgres/AuthService');
const TokenManager = require('../tokenize/TokenManager')

const user_petani = require('../ACCapi/user/pxp');
const user_buruh = require('../ACCapi/user/buruh')
const UsersValidator = require('../ACCapi/user/validator');
const usersService = require('../ACCservice/Postgres/usersService');

const profiling_pxp = require('../ACCapi/profiling/pxp');
const profiling_buruh = require('../ACCapi/profiling/buruh');
const profilingValidator = require('../ACCapi/user/validator');

const lahan = require('../ACCapi/dashboard/panen/lahan');
const lahanService = require('../ACCservice/Postgres/accservice/lahan');
const setoran = require('../ACCapi/dashboard/panen/setoran');
const setoranService = require('../ACCservice/Postgres/accservice/setoran');
const hasil_panen = require('../ACCapi/dashboard/panen/hasil_panen');
const hasilPanenService = require('../ACCservice/Postgres/accservice/hasilPanen')
const panenValidator = require('../ACCapi/dashboard/panen/validator');

const bahan_pengeringan = require('../ACCapi/dashboard/pengeringan/bahan_pengeringan');
const hasil_pengeringan = require('../ACCapi/dashboard/pengeringan/hasil_pengeringan');
const pengringanValidator = require('../ACCapi/user/validator');

const jual_beli = require('../ACCapi/dashboard/jual-beli');
const jualBeliValidator = require('../ACCapi/user/validator');

const rekapitulasi = require('../ACCapi/dashboard/rekapitulasi');
const rekapitulasiValidator = require('../ACCapi/user/validator');

const information_pxp = require('../ACCapi/information/pxp');
const information_buruh = require('../ACCapi/information/buruh');
const informationValidator = require('../ACCapi/user/validator');

const UsersService = new usersService();
const AuthService = new authService();
const LahanService = new lahanService()
const SetoranService = new authService();
const Dummy = new dummyS();

const plugin = [
        {
            plugin: test,
        },
        {
            plugin: dummy,
            options: {
                dummy : Dummy,
            }
        },
        {
            plugin: user_petani,
            options: {
                service : UsersService,
                dummy : Dummy,
                validator : UsersValidator,
                author :AuthService,
            }
        },
        {
            plugin: user_buruh,
            options: {
                service : UsersService,
                dummy : Dummy,
                validator : UsersValidator,
                author : AuthService,
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
            options: {
                service : SetoranService,

                validator : panenValidator,
            }
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
