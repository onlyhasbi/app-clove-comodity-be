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

const profiling_acc = require('../ACCapi/profiling/acc/index');
const profiling_buruh = require('../ACCapi/profiling/buruh/index');
const profilingValidator = require('../ACCapi/profiling/validator');
const profilingService = require('../ACCservice/Postgres/profilingService');

const panen = require('../ACCapi/dashboard/panen');
const panenService = require('../ACCservice/Postgres/accservice/panenService');
const panenValidator = require('../ACCapi/dashboard/panen/validator');

const pengeringan = require('../ACCapi/dashboard/pengeringan');
const pengeringanService = require('../ACCservice/Postgres/accservice/pengeringanServices');
const pengeringanValidator = require('../ACCapi/dashboard/pengeringan/validator');

const jual_beli = require('../ACCapi/dashboard/jual-beli');
const jualBeliService = require('../ACCservice/Postgres/accservice/jualBeliService');
const jualBeliValidator = require('../ACCapi/dashboard/jual-beli/validator');


const UsersService = new usersService();
const AuthorService = new authorService();
const AuthenticationService = new authenticationService();

const ProfilingService = new profilingService();
const PanenService = new panenService();
const PengeringanService = new pengeringanService();
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
                authentic :AuthenticationService,
            }
        },
        {
            plugin: user_buruh,
            options: {
                service : UsersService,
                dummy : Dummy,
                validator : UsersValidator,
                authentic : AuthenticationService,
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
            plugin: panen,
            options: {
                service : PanenService,
                validator : panenValidator,
                author : AuthorService,
            }
        },
        {
            plugin: pengeringan,
            options: {
                service : PengeringanService,
                validator : pengeringanValidator,
                author : AuthorService,
            }
        },
        {
            plugin: jual_beli,
            options: {
                service : jualBeliService,
                validator : jualBeliValidator,
                author : AuthorService,
            }
        },
    ];

module.exports = plugin;
