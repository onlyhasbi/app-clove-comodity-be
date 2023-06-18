const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'userBuruh',
  version: '1.0.0',
  register: async (server, {service, dummy, validator, author}) => {
    const pluginHandler = new Handler(service, dummy, validator, author);
    server.route(routes(pluginHandler));
  },
};