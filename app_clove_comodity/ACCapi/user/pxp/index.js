const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'user_pxp',
  version: '1.0.0',
  register: async (server, {service, validator}) => {
    const pluginHandler = new Handler(service, validator);
    server.route(routes(pluginHandler));
  },
};