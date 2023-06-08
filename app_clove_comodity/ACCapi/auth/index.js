const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'auth',
  version: '1.0.0',
  register: async (server,  { authService, tokenManager, validator}) => {
    const pluginHandler = new Handler();
    server.route(routes(pluginHandler));
  },
};