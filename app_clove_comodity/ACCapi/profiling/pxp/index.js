const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'profiling_pxp',
  version: '1.0.0',
  register: async (server) => {
    const pluginHandler = new Handler();
    server.route(routes(pluginHandler));
  },
};