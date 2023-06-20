const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'KontakBuruh',
  version: '1.0.0',
  register: async (server, {service, validator, author}) => {
    const pluginHandler = new Handler(service, validator, author);
    server.route(routes(pluginHandler));
  },
};