const test = require('../ACCapi/test');

const dummy = require('../ACCapi/dummy/index');
const dummyS= require('../ACCservice/dummy/index');

const auth = require('../ACCapi/auth');
const AuthValidator = require('../ACCapi/auth/validator');
const authenticationService = require('../ACCservice/Postgres/AuthenticationService');
const TokenManager = require('../tokenize/TokenManager')

const user_acc = require('../ACCapi/user/acc');
const user_buruh = require('../ACCapi/user/buruh')
const UsersValidator = require('../ACCapi/user/validator');
const usersService = require('../ACCservice/Postgres/usersService');

const authorService = require('../ACCservice/Postgres/AuthorizationService');

const profiling_acc = require('../ACCapi/profiling/acc');
const profiling_buruh = require('../ACCapi/profiling/buruh');
const profilingValidator = require('../ACCapi/profiling/validator');
const profilingService = require('../ACCservice/Postgres/profilingService');

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
const AuthorService = new authorService();
const AuthenticationService = new authenticationService();

const ProfilingService = new profilingService();
const LahanService = new lahanService()
const SetoranService = new authenticationService();
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
            plugin: user_acc,
            options: {
                service : UsersService,
                dummy : Dummy,
                validator : UsersValidator,
                author :AuthenticationService,
            }
        },
        {
            plugin: user_buruh,
            options: {
                service : UsersService,
                dummy : Dummy,
                validator : UsersValidator,
                author : AuthenticationService,
            }
        },
        {
            plugin: auth,
            options: {
                service : AuthenticationService,
                tokenManager : TokenManager,
                validator : AuthValidator,
            }
        },
        {
            plugin: profiling_acc,
            options: {
                service: ProfilingService,
                validator : profilingValidator,
                author : AuthorService,
            }
        },
        {
            plugin: profiling_buruh,
            options:{
                service: ProfilingService,
                validator : profilingValidator,
                author : AuthorService,
                
            }
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
