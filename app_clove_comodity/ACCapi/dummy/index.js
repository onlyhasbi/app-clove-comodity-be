const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'dummy',
  version: '1.0.0',
  register: async (server,  { service }) => {
    const pluginHandler = new Handler(service);
    server.route(routes(pluginHandler));
  },
};