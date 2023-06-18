const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'dummy',
  version: '1.0.0',
  register: async (server,  { dummy }) => {
    const pluginHandler = new Handler(dummy);
    server.route(routes(pluginHandler));
  },
};