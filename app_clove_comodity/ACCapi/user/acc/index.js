const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'userPetani',
  version: '1.0.0',
  register: async (server, {service, validator, author}) => {
    const pluginHandler = new Handler(service, validator, author);
    server.route(routes(pluginHandler));
  },
};