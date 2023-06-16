const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'auth',
  version: '1.0.0',
  register: async (server,  { dummy, validator}) => {
    const pluginHandler = new Handler(dummy, validator);
    server.route(routes(pluginHandler));
  },
};