const dummy = require('../api/dummy/index');
const dummyService= require('../service/storage/dummyService');

const auth = require('../api/auth');
const AuthValidator = require('../api/auth/validator');
const authenticationService = require('../service/Postgres/AuthenticationService');
const TokenManager = require('../tokenize/TokenManager')

const user_acc = require('../api/user/acc');
const user_buruh = require('../api/user/buruh')
const UsersValidator = require('../api/user/validator');
const usersService = require('../service/Postgres/usersService');

const authorService = require('../service/Postgres/AuthorizationService');

const profiling_acc = require('../api/dashboard/profiling/acc');
const profiling_buruh = require('../api/dashboard/profiling/buruh');
const profilingValidator = require('../api/dashboard/profiling/validator');
const profilingService = require('../service/Postgres/profilingService');

const panen = require('../api/dashboard/acc/panen');
const panenService = require('../service/Postgres/accservice/panenService');
const panenValidator = require('../api/dashboard/acc/panen/validator');

const pengeringan = require('../api/dashboard/acc/pengeringan');
const pengeringanService = require('../service/Postgres/accservice/pengeringanServices');
const pengeringanValidator = require('../api/dashboard/acc/pengeringan/validator');

const jual_beli = require('../api/dashboard/acc/jual-beli');
const jualBeliService = require('../service/Postgres/accservice/jualBeliService');
const jualBeliValidator = require('../api/dashboard/acc/jual-beli/validator');

const panen_buruh = require('../api/dashboard/buruh/panen');
const panenBuruhService = require('../service/Postgres/buruhservice/panenService');
const KomplainValidator = require('../api/dashboard/buruh/panen/validator');


const UsersService = new usersService();
const AuthorService = new authorService();
const AuthenticationService = new authenticationService();

const ProfilingService = new profilingService();
const PanenService = new panenService();
const PengeringanService = new pengeringanService();
const JualBeliService = new jualBeliService();
const PanenBuruhService = new panenBuruhService()
const DummyService = new dummyService();

const plugin = [
        {
            plugin: dummy,
            options: {
                service : DummyService,
            }
        },
        // {
        //     plugin: user_acc,
        //     options: {
        //         service : UsersService,
        //         dummy : DummyService,
        //         validator : UsersValidator,
        //         authentic :AuthenticationService,
        //     }
        // },
        // {
        //     plugin: user_buruh,
        //     options: {
        //         service : UsersService,
        //         dummy : DummyService,
        //         validator : UsersValidator,
        //         authentic : AuthenticationService,
        //     }
        // },
        // {
        //     plugin: auth,
        //     options: {
        //         service : AuthenticationService,
        //         tokenManager : TokenManager,
        //         validator : AuthValidator,
        //     }
        // },
        // {
        //     plugin: profiling_acc,
        //     options: {
        //         service: ProfilingService,
        //         validator : profilingValidator,
        //         author : AuthorService,
        //     }
        // },
        // {
        //     plugin: profiling_buruh,
        //     options:{
        //         service: ProfilingService,
        //         validator : profilingValidator,
        //         author : AuthorService,
                
        //     }
        // },
        // {
        //     plugin: panen,
        //     options: {
        //         service : PanenService,
        //         validator : panenValidator,
        //         author : AuthorService,
        //     }
        // },
        // {
        //     plugin: pengeringan,
        //     options: {
        //         service : PengeringanService,
        //         validator : pengeringanValidator,
        //         author : AuthorService,
        //     }
        // },
        // {
        //     plugin: jual_beli,
        //     options: {
        //         service : JualBeliService,
        //         validator : jualBeliValidator,
        //         author : AuthorService,
        //     }
        // },
//        {
//            plugin: panen_buruh,
//            options: {
//                service : PanenBuruhService,
//                validator : KomplainValidator,
//            }
//        },
    ];

module.exports = plugin;
