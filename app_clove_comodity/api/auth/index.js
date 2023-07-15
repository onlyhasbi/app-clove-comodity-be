const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'auth',
  version: '1.0.0',
  register: async (server,  { service, tokenManager, validator}) => {
    const pluginHandler = new Handler(service, tokenManager, validator);
    server.route(routes(pluginHandler));
  },
};